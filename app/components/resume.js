import React from 'react'
import {NavLink} from 'react-router-dom'

export default class Resume extends React.Component {
    render() {

        return (
        <div>
        <div style={{fontSize: '150%', margin: '25%'}}>
          <div id="resume-header">
              <NavLink to='/'>
                  <h1>Hedra Rowan</h1>
              </NavLink>

              <div className="phone-email">
                <h3>(978) 888 8061 |</h3> <h3>| hedrarowan@gmail.com </h3>
              </div>

              <div className="phone-email">
                <a href='https://github.com/hedrarowan'><h3>GitHub</h3></a>
                <h3>| |</h3>
                <a href='https://linkedin.com/in/hedra-rowan-471a561aa/'><h3>Linkedin</h3></a>
              </div>

          </div>

          <div id="projects-resume">
              <h2><u>Projects</u></h2>
              <div id="brain-teez">
                  <div className="project-body">
                      <div className="project-header">
                        <a href='/projects/2'><h3>BrainTeez</h3></a>
                         <h3>||</h3>
                         <h4>educational gaming app for kids grades K-2</h4>
                      </div>
                      <div className="basic-flex">
                        <h4><i>Developer</i></h4>
                        <h4>September 2020-October 2020</h4>
                      </div>


                      <ul>
                          <li>Focused on game functionality, levels, and styling</li>
                          <li>Used React Native, Expo, Redux, and Firebase</li>
                          <li>
                          <a href='https://github.com/team-g-capstone/teamg'>GitHub</a>
                          </li>
                      </ul>
                  </div>

              </div>

              <div id="Draw-Synth">
                  <div className="project-body">
                      <div className="project-header">
                      <a href='/DrawSynth'><h3>DrawSynth</h3></a>
                         <h3>||</h3>
                         <h4>coloring application with auto-generated audio based on user input</h4>
                      </div>
                      <div className="basic-flex">
                        <h4><i>Sole Developer</i></h4>
                        <h4>September 2020</h4>
                      </div>


                      <ul>
                          <li>Used Node.js, SuperCollider, supercolliderjs, and HTML/CSS</li>
                          <li>
                          <a href='https://github.com/hedrarowan/stackathon'>GitHub</a>
                          </li>
                      </ul>
                  </div>

              </div>


          </div>

          <div id="experience-resume">
            <h2><u>Professional Experience</u></h2>
                <div className="job-column">
                    <div className="project-header">
                        <h3>Weigel Broadcasting Corporation</h3>
                        <h3>| |</h3>
                        <h4><i>Senior Content Screener</i></h4>
                    </div>
                        <div className="basic-flex">
                        <h4>Chicago, IL</h4>
                        <h4>February 2018 - April 2020</h4>
                      </div>

                      <ul>
                          <li>Managed a team monitoring television content and format pre-airing</li>
                          <li>Ensure all TV programs/films complied with FCC standards</li>
                      </ul>


                </div>

                <div className="job-column">
                    <div className="project-header">
                        <h3>Market Fresh Books</h3>
                        <h3>| |</h3>
                        <h4><i>Sales Associate</i></h4>
                    </div>
                        <div className="basic-flex">
                        <h4>Evanston, IL</h4>
                        <h4>February 2016 - February 2018</h4>
                      </div>

                      <ul>
                          <li>Maintained a buy-and-sell used bookstore during open hours</li>
                          <li>Responsible for customer relations, organization, and intake</li>
                      </ul>

                </div>

          </div>

          <div id="education-resume">
              <h2><u>Education</u></h2>
              <div className='edu-column'>
                <div className="project-header">
                    <h3>Grace Hopper Program at Fullstack Academy</h3>
                </div>
                <div className="basic-flex">
                    <h4><i>Web Development Certificate</i></h4>
                    <h4>August 2020 - October 2020</h4>
                </div>
                <ul>
                    <li>13-week full stack web development bootcamp</li>
                </ul>
              </div>

              <div className="edu-column">
                  <div className="project-header">
                      <h3>Northwestern University</h3>
                      <h3>| |</h3>
                      <h4>Evanston, IL</h4>
                  </div>
                  <div className="basic-flex">
                      <h4><i>Bachelor of Arts, Music Composition and Comparative Literature</i></h4>
                      <h4>September 2013 - June 2017</h4>
                  </div>
              </div>
          </div>

          <div className="awards-resume">
              <h2><u>Awards</u></h2>
              <h4>George C. Casey Award, best essay awarded by Northwestern University's Gender Studies Department</h4>

          </div>

          <div className="tech-resume">
              <h2><u>Technical Skills</u></h2>

              <h4>Proficient: Javascript, Node.js, Express, React, Redux, Max/MSP, Git, GitHub, HTML/CSS, React Native, Expo </h4>
              <h4>Intermediate: PostgreSQL, Firebase</h4>
              <h4>Basic: Mocha, Chai, SuperCollider</h4>
          </div>

        </div>

        <div className='headshot'>
        <img src="backgroundstars.jpg" width="33%" height="300" alignItems="right" onClick={this.handleClick}></img>

        <NavLink to="/about"
          style={{
            display: 'flex',
            alignItems: 'center',
            margin: '15%',
            fontSize:'180%'
          }}>
          About
          </NavLink>


        <NavLink to="/projects" style={{display: 'flex', alignItems: 'center',
        margin: '15%',
        fontSize:'180%'}}>Projects
        </NavLink>





        </div>
        </div>


        );
      }
}
