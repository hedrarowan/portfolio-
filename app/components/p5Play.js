import React from 'react'
import p5, {WEBGL} from 'p5'
import * as Tone from 'tone'
// import vert from './feedback.vert'
// import frag from './feedback.frag'


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
    // let feedbackShader
    let x = 100;
    let y = 100;
    let value = 0;
    let detailX
    // sketch.preload = () => {
    //   // feedbackShader = sketch.loadShader(vert, frag)
    // }
    sketch.setup = () => {

      sketch.audio = new Tone.Synth({
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
      sketch.createCanvas(200, 200, sketch.WEBGL)
      detailX = sketch.createSlider(2, 24, 12);
      detailX.position(10, x + 5);
      detailX.style('width', '80px');

    }

    sketch.draw = () => {
      // sketch.background(value);
      sketch.fill(255);
      // sketch.shader(feedbackShader)
      sketch.background(205, sketch.movedX, 94);
      sketch.rotateY(sketch.millis() / 1000)
      sketch.ellipsoid(30, 20, 40, detailX.value(), 8);
      // sketch.rect(x, y, 50, 50)


    }
    //only happen on mouseDown maybe (below) figure out hwo to limit the amount
    sketch.mouseDragged = function () {

      // console.log(this, 'THISS')
      // console.log(typeof this, "yooo");
      value = value + 55;
      if (value > 255) {
        value = 0;
      }
      // const polyAudio = new Tone.PolySynth(sketch.audio).toDestination();
      // const now = Tone.now()

      // console.log(polyAudio.get())



      sketch.audio.triggerAttackRelease(sketch.movedX, "8n");
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



