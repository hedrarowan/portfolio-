import React from 'react'
import p5, {WEBGL} from 'p5'
import * as Tone from 'tone'
import SingleProject from './SingleProject'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import { fetchProjects } from "../redux/projects";
// import vert from './feedback.vert'
// import frag from './feedback.frag'

class P5Play extends React.Component {
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
    this.state = {
      visibility: false,
      projects: [
        {
          completed: "October 2020",
          createdAt: "2020-11-29T22:34:45.641Z",
          description: "Mobile Learning App for Kids",
          id: 2,
          longDescription: "Mobile learning App for Kids",
          mediaUrl: "https://www.youtube.com/watch?v=J4UF711Ofc0",
          title: "BrainTeez",
          updatedAt: "2020-11-29T22:34:45.641Z"
        }
      ]
    }
    this.handleVisibility = this.handleVisibility.bind(this)
    // this.Sketch.mouseMoved = this.Sketch.mouseMoved.bind(this)
  }
  async componentDidMount() {
  
    Tone.start()
    this.myP5 = new p5(this.Sketch, this.myRef.current)
    
  }


  Sketch = (sketch) => {
    // let feedbackShader
    let x = 200;
    let y = 200;
    let value = 0;
    let detailX
   
    
    sketch.setup = () => {
      sketch.pingPong = new Tone.PingPongDelay('4n', 0.2).toDestination()
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

      sketch.echo = new Tone.Synth({
        oscillator: {
          type: "fmtriangle12",
          harmonicity: 0.9,
          modulationType: "sawtooth3"
        },

        envelope: {
          attack: 0.3,
          decay: 0.2,
          sustain: 0.2,
          release: 0.4,
        }
      }).connect(sketch.pingPong)
      
      sketch.createCanvas(x, y, sketch.WEBGL)
      console.log(sketch.canvas)
     
    
      detailX = sketch.createSlider(2, 24, 12);
      detailX.position(10, x + 5);
      detailX.style('width', '80px');

    }

    sketch.draw = () => {
      
      sketch.fill(255);
      
      sketch.background(205, value, 94);
      sketch.rotateY(sketch.millis() / (value / 2))
      sketch.ellipsoid(30, 20, 40, detailX.value(), 8);
      
    


    }

 
  
    sketch.mouseDragged = function () {
      if(sketch.mouseX > 0 && sketch.mouseX < x && sketch.mouseY > 0 && sketch.mouseY < y) {
        
        value = value + 55;
        
        if (value > 255) {
          value = 0;
        }
        
        const now = Tone.now()

        sketch.audio.triggerAttack(200 + Math.abs(sketch.mouseX), now)
        sketch.echo.triggerAttack(200 + Math.abs(sketch.mouseX), now)
      
      } else {
        if(sketch.mouseX > x) {
        //  console.log(this)
       
         //figure out how to call P5Play's handlevisbility 
        }
      }      
    }

   sketch.mouseReleased = function () {
        const now = Tone.now()
       
        sketch.audio.triggerRelease(now)
        sketch.echo.triggerRelease(now)
        
      }

    }

  
  handleVisibility = () => {
    console.log('hellooko')
    // this.setState({
    //   visibility: true
    // })
  }

  handleClick = () => {
    console.log('Betty Boop')
    Tone.start()
  }



  render () {
 
      
      console.log(this.state.projects)
      const projects = this.state.projects
      return (
        <div className='projectsWheel' onClick={this.handleVisibility}>
        <button onClick={this.handleClick}>Hello</button>
        <div className="canvas" ref={this.myRef} onClick={this.handleVisibility}>
          {this.state.visibility ? <NavLink to={`/projects/${projects[0].id}`}>
            <h3>{projects[0].title}</h3>
          </NavLink> : null}
          
        </div>
      </div>
    )
    
  }
}



const mapState = (state) => {
  return {
    projects: state.projects,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getProjects: () => dispatch(fetchProjects()),
  };
};


export default connect(mapState, mapDispatch)(P5Play);