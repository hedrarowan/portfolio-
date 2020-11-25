import React from "react";
import * as Tone from 'tone'


export default class About extends React.Component {
  constructor (props) {
    super(props)
    this.audio = new Tone.Synth({
      oscillator: {
        type: 'fatsawtooth15',
        harmonicity: 0.8,
        modulationType: 'triangle'
      },

      envelope: {
        attack: 0,
        decay: 0.2,
        sustain: 0.2,
        release: 0.4,
      }
    }).toDestination()
    console.log(this)
  }

  handleClick() {
    Tone.start()
    this.audio.triggerAttackRelease("C4", "8n")
  }

  render() {

      return (
        <div>
        <div className="about">
          <h3>Hi! I'm a software engineer, composer and performer currently located in Chicago, Il. I'm interested in interactivity and responsiveness in both music and coding. My projects often involve generative sound or visual elements. Right now, I'm freelancing, but I'd really love to work for you. Click on my face to make a sound: </h3>
        </div>
        <div className='headshot'>
        <img src="headshot.jpg" width="500" height="600" onClick={this.handleClick}></img>
        </div>

        </div>
      );
    }
  }

