let level2 = {

  "audio": {
    oscillator: {
      type: 'sawtooth6',
      harmonicity: 0.3,
      modulationType: 'sine6',

    },

    envelope: {
      attack: 0,
      decay: 0.2,
      sustain: 0.2,
      release: 0.4
    }},


    "echo":  {
      oscillator: {
        type: 'square2',
        harmonicity: 0.9,
        modulationType: 'sine4'
      },

      envelope: {
        attack: 0.0,
        decay: 0.2,
        sustain: 0.2,
        release: 0.2
      }
    }
}

let level3 = {

  "audio": {
    oscillator: {
      type: 'sine',
      harmonicity: 0.3,
      detune: 34,
      modulationType: 'sine6',

    },

    envelope: {
      attack: 0,
      decay: 0.2,
      sustain: 0.2,
      release: 0.4
    }},


    "echo":  {
      oscillator: {
        type: 'triangle',
        harmonicity: 0.9,
        modulationType: 'sine4'
      },

      envelope: {
        attack: 0.0,
        decay: 0.2,
        sustain: 0.2,
        release: 0.2
      }
    }
}
let levels = [level2, level3]

export default levels
