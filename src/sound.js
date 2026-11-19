// Mood sounds: a quiet background sound for each mood, matching its scene
// (rain, a crackling fire, a low hum, wind, a light beat, chimes). Everything
// is made in the browser with the Web Audio API, so there are no recordings
// or music to license. Off until the visitor turns it on.

// How loud everything is at most, and how long one mood fades into the next.
// Each mood's own levels were set so all six play at about the same
// loudness (measured 11/18: about 0.02 RMS each).
const SOUND_VOLUME = 0.35;
const SOUND_FADE_SECONDS = 1.5;

// A pentatonic scale (C D E G A, two octaves), so random chime notes always
// sound pleasant together.
const CHIME_NOTES = [523.25, 587.33, 659.25, 783.99, 880, 1046.5, 1174.66, 1318.51];

let audio = null;
let master = null;
let noiseBuffer = null;
let playing = null;

// Two seconds of white noise, looped to make rain, fire, and wind.
function makeNoiseBuffer(context) {
  const buffer = context.createBuffer(1, context.sampleRate * 2, context.sampleRate);
  const samples = buffer.getChannelData(0);
  for (let i = 0; i < samples.length; i++) {
    samples[i] = Math.random() * 2 - 1;
  }
  return buffer;
}

// A looping noise source; its stop goes into `stops` for when the mood ends.
function noiseSource(stops) {
  const source = audio.createBufferSource();
  source.buffer = noiseBuffer;
  source.loop = true;
  source.start();
  stops.push(() => source.stop());
  return source;
}

function filter(type, frequency, q = 1) {
  const node = audio.createBiquadFilter();
  node.type = type;
  node.frequency.value = frequency;
  node.Q.value = q;
  return node;
}

function gain(value) {
  const node = audio.createGain();
  node.gain.value = value;
  return node;
}

// A short sound that rises at once and dies away: a raindrop, a crackle,
// a chime, a beat. `make` returns the source, already connected to `level`.
function blip(output, make, peak, seconds) {
  const level = gain(0);
  level.connect(output);
  const now = audio.currentTime;
  level.gain.setValueAtTime(peak, now);
  level.gain.exponentialRampToValueAtTime(0.0001, now + seconds);
  const source = make(level);
  source.stop(now + seconds + 0.05);
  source.onended = () => level.disconnect();
}

function tone(frequency, type = "sine") {
  return (level) => {
    const oscillator = audio.createOscillator();
    oscillator.type = type;
    oscillator.frequency.value = frequency;
    oscillator.connect(level);
    oscillator.start();
    return oscillator;
  };
}

function noiseBurst(type, frequency) {
  return (level) => {
    const source = audio.createBufferSource();
    source.buffer = noiseBuffer;
    source.connect(filter(type, frequency)).connect(level);
    // Start at a random point so no two bursts sound the same.
    source.start(0, Math.random() * 1.9);
    return source;
  };
}

// Calls `play` again and again at a random gap between min and max seconds.
// Returns a function that stops it.
function every(minSeconds, maxSeconds, play) {
  let timer = null;
  const next = () => {
    timer = setTimeout(
      () => {
        play();
        next();
      },
      (minSeconds + Math.random() * (maxSeconds - minSeconds)) * 1000,
    );
  };
  next();
  return () => clearTimeout(timer);
}

// Each mood's sound, built into `output`; everything that has to be stopped
// when the mood ends goes into `stops`.
const MOOD_SOUNDS = {
  // Rain: hissing noise and scattered drops.
  sad(output, stops) {
    noiseSource(stops)
      .connect(filter("highpass", 900))
      .connect(filter("lowpass", 7000))
      .connect(gain(0.18))
      .connect(output);
    stops.push(every(0.05, 0.25, () => blip(output, tone(1800 + Math.random() * 2400), 0.05, 0.06)));
  },
  // A fire: a low roar and sharp crackles.
  irritated(output, stops) {
    noiseSource(stops).connect(filter("lowpass", 300)).connect(gain(0.6)).connect(output);
    stops.push(every(0.08, 0.6, () => blip(output, noiseBurst("highpass", 2500), 0.4 + Math.random() * 0.4, 0.03)));
  },
  // A low, slow hum that rises and falls like breathing.
  tired(output, stops) {
    const breath = gain(0.04);
    breath.connect(output);
    for (const frequency of [110, 164.81]) {
      const oscillator = tone(frequency)(breath);
      stops.push(() => oscillator.stop());
    }
    const lfo = audio.createOscillator();
    lfo.frequency.value = 0.12;
    lfo.connect(gain(0.02)).connect(breath.gain);
    lfo.start();
    stops.push(() => lfo.stop());
  },
  // Wind: noise through a band that slowly sweeps up and down.
  calm(output, stops) {
    const band = filter("bandpass", 500, 0.8);
    noiseSource(stops).connect(band).connect(gain(0.5)).connect(output);
    const lfo = audio.createOscillator();
    lfo.frequency.value = 0.07;
    lfo.connect(gain(300)).connect(band.frequency);
    lfo.start();
    stops.push(() => lfo.stop());
  },
  // A light beat: a soft kick every half second and ticks in between.
  excited(output, stops) {
    let step = 0;
    const timer = setInterval(() => {
      if (step % 2 === 0) {
        blip(output, tone(70), 0.5, 0.25);
      } else {
        blip(output, noiseBurst("highpass", 6000), 0.12, 0.04);
      }
      step++;
    }, 250);
    stops.push(() => clearInterval(timer));
  },
  // Wind chimes: random notes from a pleasant scale.
  happy(output, stops) {
    const note = () => CHIME_NOTES[Math.floor(Math.random() * CHIME_NOTES.length)];
    stops.push(every(0.3, 1.2, () => blip(output, tone(note(), "triangle"), 0.18, 2.5)));
  },
};

// Fades out what is playing and fades in the mood's sound (or nothing).
function playMoodSound(moodId) {
  if (audio === null) {
    return;
  }
  const now = audio.currentTime;
  if (playing !== null) {
    const { output, stops } = playing;
    output.gain.setValueAtTime(output.gain.value, now);
    output.gain.linearRampToValueAtTime(0, now + SOUND_FADE_SECONDS);
    setTimeout(
      () => {
        stops.forEach((stop) => stop());
        output.disconnect();
      },
      SOUND_FADE_SECONDS * 1000 + 100,
    );
    playing = null;
  }
  if (!MOOD_SOUNDS[moodId]) {
    return;
  }
  const output = gain(0);
  output.connect(master);
  output.gain.linearRampToValueAtTime(1, now + SOUND_FADE_SECONDS);
  const stops = [];
  MOOD_SOUNDS[moodId](output, stops);
  playing = { output, stops };
}

// Turns sound on for the mood (or off). Browsers only allow sound after the
// visitor taps something, so this is only called from the sound button.
// Returns false if the browser can't make sound at all.
function setSoundOn(on, moodId) {
  if (!on) {
    playMoodSound(null);
    return true;
  }
  if (audio === null) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) {
      return false;
    }
    audio = new AudioContextClass();
    master = gain(SOUND_VOLUME);
    master.connect(audio.destination);
    noiseBuffer = makeNoiseBuffer(audio);
  }
  audio.resume();
  playMoodSound(moodId);
  return true;
}
