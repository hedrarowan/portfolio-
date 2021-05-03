import React from 'react'
// import axios from 'axios'

import * as Tone from 'tone'

import levels from './synthLevels'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.handleOff = this.handleOff.bind(this)
    this.canvas = null
    this.ctx = null
    this.isDrawing = false
    this.x = 0
    this.y = 0
    this.imgDataLoop = this.imgDataLoop.bind(this)
    this.state = {
      loading: false
    },
    this.reverb = new Tone.Freeverb(this.y, 200).toDestination()
    this.lFO = new Tone.Tremolo(9, 0.75).toDestination()
    this.pingPong = new Tone.PingPongDelay(`${Math.abs(this.x) + 1}n`, 0.1).toDestination()
    this.audio = new Tone.Synth({
      oscillator: {
        type: 'fmtriangle13',
        harmonicity: 0.8,
        modulationType: 'sawtooth3'
      },

      envelope: {
        attack: 0,
        decay: 0.2,
        sustain: 0.2,
        release: 0.4
      }
    }).toDestination()
    this.echo = new Tone.Synth({
      oscillator: {
        type: 'fmtriangle12',
        harmonicity: 0.9,
        modulationType: 'sawtooth3'
      },

      envelope: {
        attack: 0.3,
        decay: 0.2,
        sustain: 0.2,
        release: 0.4
      }
    }).connect(this.pingPong)
    this.drawLine = this.drawLine.bind(this)
    this.handleThird = this.handleThird.bind(this)
    this.level = 0
  }

  async componentDidMount() {
    const canvas = document.getElementById('my-canvas')
    this.canvas = canvas
    this.ctx = await canvas.getContext('2d')
    this.canvas.addEventListener('mousedown', e => {
      this.x = e.offsetX
      this.y = e.offsetY
      this.isDrawing = true
    })

    this.canvas.addEventListener('mousemove', e => {
      if (this.isDrawing === true) {
        this.drawLine(this.ctx, this.x, this.y, e.offsetX, e.offsetY)
        this.x = e.offsetX
        this.y = e.offsetY
        const now = Tone.now()
        this.audio.triggerAttack(200 + Math.abs(this.x), now)
        this.echo.triggerAttack(200 + Math.abs(this.y), now + 1)
      }
    })

    window.addEventListener('mouseup', async e => {

      try {
        console.log('I made it ')
        if (this.isDrawing === true) {



          this.drawLine(this.ctx, this.x, this.y, e.offsetX, e.offsetY)
          this.x = 0
          this.y = 0
          this.isDrawing = false

        }
        const now = Tone.now()
        this.audio.triggerRelease(now)
        this.echo.triggerRelease(now)

        const imgData = this.ctx.getImageData(
          this.x,
          this.y,
          this.canvas.width,
          this.canvas.height
        ).data
        const pixels = []
        ;``

        const pixelsFilled = this.imgDataLoop(imgData, pixels)

        const percentCompleted =
          pixelsFilled / (this.canvas.width * this.canvas.height)
        let howManyTimes = 0
        if (percentCompleted > 2.9) {

          howManyTimes++

          if (howManyTimes === 1) {


            // const res = await axios.delete(`/api/sounds`)
            // const doneStatus = await res.data
            // console.log(doneStatus, 'DONT STATSU')
            await this.level++
            await this.ctx.clearRect(
              0,
              0,
              this.canvas.width,
              this.canvas.height
            )

            if(this.level === 1) {
              this.echo.disconnect(this.pingPong)
              this.audio.connect(this.reverb)
              this.audio.oscillator.type = levels[0].audio.oscillator.type

              this.audio.oscillator.modulationType = levels[0].audio.oscillator.modulationType

              this.echo.oscillator.type = levels[0].echo.oscillator.type

              this.echo.oscillator.modulationType = levels[0].echo.oscillator.modulationType
            }

            if(this.level === 2) {
                this.audio.disconnect(this.reverb)
                this.audio.connect(this.lFO)
                this.audio.oscillator.type = levels[1].audio.oscillator.type

                this.audio.oscillator.modulationType = levels[1].audio.oscillator.modulationType

                this.echo.oscillator.type = levels[1].echo.oscillator.type

                this.echo.oscillator.modulationType = levels[1].echo.oscillator.modulationType
            }

            if (this.level === 3) {
              alert('Congrats, you beat all the levels!')
            }
          }
        }
      } catch (error) {
        console.log(error)
      }
    })
  }
  imgDataLoop(imgData, pixels) {
    if (typeof imgData !== 'array') {
      for (let i = 0; i < imgData.length; i++) {
        if (imgData[i] !== 0) {
          pixels.push(imgData[i])
        }
      }
    } else {
      for (let j = 0; j < imgData.length; j++) {
        imgDataLoop(imgData[j])
      }
    }

    return pixels.length
  }
  drawLine(context, x1, y1, x2, y2) {
    let gradient
    context.beginPath()
    if (this.level === 0) {
      gradient = context.createLinearGradient(
        0,
        0,
        this.canvas.width,
        this.canvas.height
      )

      gradient.addColorStop('0', 'magenta')
      gradient.addColorStop('0.5', 'blue')
      gradient.addColorStop('1.0', 'red')
    }

    if (this.level === 1) {
      gradient = context.createLinearGradient(
        0,
        0,
        this.canvas.width,
        this.canvas.height
      )
      gradient.addColorStop('0', 'lime')
      gradient.addColorStop('0.5', 'purple')
      gradient.addColorStop('1.0', 'black')
    }

    if (this.level === 2) {
      gradient = context.createLinearGradient(
        0,
        0,
        this.canvas.width,
        this.canvas.height
      )
      gradient.addColorStop('0', 'DarkOrchid')
      gradient.addColorStop('0.5', 'LavenderBlush')
      gradient.addColorStop('1.0', 'MediumTurquoise')
    }
    context.strokeStyle = gradient

    context.lineWidth = 50
    context.moveTo(x1, y1)
    context.lineTo(x2, y2)
    context.stroke()
    context.closePath()
  }

  async handleClick(event) {
    event.preventDefault()
    const infoObject = {
      data: this.level
    }
    Tone.start()

  }

  async handleOff(event) {
    event.preventDefault()
    // Tone.stop()
    // await axios.delete(`/api/sounds`)
  }

  async handleThird() {
    // await axios.put(`/api/sounds`)
  }

  render() {
    const loading = this.state.loading
    console.log(loading)
    return (
      <div>
        <div>
          <h3 style={{display: 'flex', justifyContent: 'center', fontSize:'140%'}}>
            DrawSynth
          </h3>
          <h3 style={{display: 'flex', justifyContent: 'center', fontSize:'140%'}}>
            Color in the gradient with the mouse to complete the level! Make sure audio is on!
          </h3>

          {this.state.loading ? <LoadingSpinner /> : null}
        </div>
        <div>
          <canvas
            id="my-canvas"
            width={window.innerWidth}
            height={window.innerHeight}
          >
            <p>Your browser doesnt support canvas</p>
          </canvas>
        </div>
      </div>
    )
  }
}
