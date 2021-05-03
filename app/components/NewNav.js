import React from "react";
import {NavLink} from "react-router-dom"


export default class NewNav extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isShown: false,
      filter: 'grayscale(0%)',
      isShownAb: false,
      filterAb: 'grayscale(0%)',
      isShownPro: false,
      filterPro: 'grayscale(0%)'
    }
  }



  render() {

    return (
      <div className="big-flex">

        <NavLink
          to="/resume"
        >
            <div className='imgLink'
              onMouseEnter={() => this.setState({
                isShown: true,
                filter: "grayscale(100%)"
              })}

              onMouseLeave={() => this.setState({
                isShown: false,
                filter: 'grayscale(0%)'
              })}

              style={{
                filter: this.state.filter
              }}
            >
              {this.state.isShown ? <div className="imgLinkText"> RESUME </div> : null}
            </div>

        </NavLink>


        <NavLink
          to="/about"
        >
            <div className='imgLinkAb'
              onMouseEnter={() => this.setState({
                isShownAb: true,
                filterAb: 'grayscale(100%)'
              })}

              onMouseLeave={() => this.setState({
                isShownAb: false,
                filterAb: 'grayscale(0%)'
              })}

              style={{
                filter: this.state.filterAb
              }}
            >
              {this.state.isShownAb ? <div className="imgLinkText"> ABOUT </div> : null}
            </div>

        </NavLink>

        <NavLink
          to="/projects"
        >
            <div className='imgLink'
              onMouseEnter={() => this.setState({
                isShownPro: true,
                filterPro: 'grayscale(100%)'
              })}

              onMouseLeave={() => this.setState({
                isShownPro: false,
                filterPro: 'grayscale(0%)'
              })}

              style={{
                filter: this.state.filterPro
              }}
            >
              {this.state.isShownPro ? <div className="imgLinkText"> PROJECTS </div> : null}
            </div>

        </NavLink>


      </div>
    )
  }
}
