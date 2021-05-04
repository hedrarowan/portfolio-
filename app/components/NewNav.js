import React from "react";
import {NavLink} from "react-router-dom"


export default class NewNav extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isShown: false,
      filter: 'grayscale(0%)',
      imgRes: false,
      imgResProURL: 'backgroundstars.jpg',
      isShownAb: false,
      filterAb: 'grayscale(0%)',
      imgAb: false,
      imgAbURL: 'headshot.jpg',
      isShownPro: false,
      filterPro: 'grayscale(0%)',
      imgPro: false,

    }
  }

  componentDidMount() {
    console.log(this.props)
    if (!this.props.page || this.props.page === 'home') {
      this.setState({
        imgRes: true,
        imgAb: true,
        imgPro: true
      })
    }

    let page = this.props.page

    if (page === 'resume'){
      this.setState({
        imgRes: true,
      })
    }

    if (page === 'about') {

      this.setState({
        imgAb: true
      })
    }

    if (page === 'projects') {
      this.setState({
        imgPro: true
      })
    }


  }

  render() {
    let urlRes, urlAb, urlPro

    if (this.state.imgRes) {
      urlRes = this.state.imgResProURL
    } else {
      urlRes = null
    }

    if (this.state.imgAb) {
      urlAb = this.state.imgAbURL
    } else {
      urlAb = null
    }

    if (this.state.imgPro) {
      urlPro = this.state.imgResProURL
    } else {
      urlPro = null
    }

    return (
      <div className="big-flex">

        <NavLink to="/resume">

          <div
              className="imgLink"
              onMouseEnter={() => this.setState({
                isShown: true,
                filter: 'grayscale(100%)'
              })}

              onMouseLeave={() => this.setState({
                isShown: false,
                filter: 'grayscale(0%)'
              })}

              style={{

                filter: this.state.filter,
                backgroundImage: `url(${urlRes})`,
              }}
            >
              {this.state.isShown ? <div className="imgLinkText"> RESUME </div> : null}

          </div>

        </NavLink>


        <NavLink
          to="/about"
        >
          <div
              className="imgLinkAb"

              onMouseEnter={() => this.setState({
                isShownAb: true,
                filterAb: 'grayscale(100%)'
              })}

              onMouseLeave={() => this.setState({
                isShownAb: false,
                filterAb: 'grayscale(0%)'
              })}

              style={{
                filter: this.state.filterAb,
                backgroundImage: `url(${urlAb})`
              }}
            >
              {this.state.isShownAb ? <div className="imgLinkText"> ABOUT </div> : null}
          </div>

        </NavLink>

        <NavLink
          to="/projects"
        >
          <div
              className="imgLink"
              onMouseEnter={() => this.setState({
                isShownPro: true,
                filterPro: 'grayscale(100%)'
              })}

              onMouseLeave={() => this.setState({
                isShownPro: false,
                filterPro: 'grayscale(0%)'
              })}

              style={{
                filter: this.state.filterPro,
                backgroundImage: `url(${urlPro})`
              }}
          >
              {this.state.isShownPro ? <div className="imgLinkText"> PROJECTS </div> : null}
          </div>

        </NavLink>


      </div>
    )
  }
}
