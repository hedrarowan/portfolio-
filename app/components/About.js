import React from "react";
import * as Tone from 'tone'
import {NavLink} from 'react-router-dom'

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
    this.handleClick = this.handleClick.bind(this)
    this.handleVisibility = this.handleVisibility(this)

  }

  handleClick() {
    Tone.start()
    this.audio.triggerAttackRelease("C4", "8n")
  }

  handleVisibility(){

  }

  render() {

      return (
        <div>
        <div className="about">
          <h2>Hi! I'm a software engineer, composer and performer currently located in Chicago, Il. I'm interested in interactivity and responsiveness in both music and coding. My projects often involve generative sound or visual elements. I work with Node.js, React, Redux, PostgreSQL, and sometimes React Native and Firebase. Right now, I'm freelancing, but I'd really love to work for you.

          </h2>
        </div>
        <div className='headshot'>
        <div>
        <NavLink to="/resume" style={{display: 'flex', alignItems: 'center', marginLeft: '-120%', fontSize:'180%'}}>Resume</NavLink>
        </div>
        <img src="headshot.jpg" width="250" height="300" onClick={this.handleClick}></img>
        <div>
        <NavLink to="/projects" style={{display: 'flex', alignItems: 'center', marginLeft: '120%', fontSize:'180%'}}>Projects</NavLink>
        </div>

        </div>

        </div>
      );
    }
  }


