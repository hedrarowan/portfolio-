import React from 'react'
import p5 from 'p5'
import * as Tone from 'tone'


export default class p5Play extends React.Component {
  constructor (props) {
    super(props)
    this.myRef = React.createRef
    this.handleClick = this.handleClick.bind(this)
    this.audio = new Tone.Synth({
      oscillator: {
        type: "fmtriangle13",
        harmonicity: 0.8,
        modulationType: "sawtooth3"
      },

      envelope: {
        attack: 0,
        decay: 0.2,
        sustain: 0.2,
        release: 0.4,
      }
    }).toDestination()
    // this.Sketch.mouseMoved = this.Sketch.mouseMoved.bind(this)
  }
  componentDidMount() {
    Tone.start()
    this.myP5 = new p5(this.Sketch, this.myRef.current)
  }


  Sketch = (sketch) => {

    let x = 100;
    let y = 100;
    let value = 0;

    sketch.setup = () => {
      sketch.createCanvas(200, 200)

    }

    sketch.draw = () => {
      sketch.background(value);
      sketch.fill(255);
      sketch.rect(x, y, 50, 50)


    }
    //only happen on mouseDown maybe (below) figure out hwo to limit the amount
    sketch.mouseMoved = function () {
      // console.log(this, 'THISS')
      // console.log(typeof this, "yooo");
      value = value + 55;
      if (value > 255) {
        value = 0;
      }

      this.audio = new Tone.Synth({
        oscillator: {
          type: "fmtriangle13",
          harmonicity: 0.8,
          modulationType: "sawtooth3"
        },

        envelope: {
          attack: 0,
          decay: 0.2,
          sustain: 0.2,
          release: 0.4,
        }
      }).toDestination()
      console.log(this)

      this.audio.triggerAttackRelease(value, "3n")

    }




  }


  handleClick = () => {
    console.log('Betty Boop')
    Tone.start()
  }



  render () {
    return (
      <div>
      <button onClick={this.handleClick}>Hello</button>
      <div ref={this.myRef} onClick={this.handleClick}></div>
      </div>
    )
  }
}



