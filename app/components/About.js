import React from 'react';
import NewNav from './NewNav'

export default class About extends React.Component {


  render() {

      return (
        <div>
        <div className="about">
          <h2>Hi! I'm a software engineer, composer and performer currently located in Chicago, Il. I'm interested in interactivity and responsiveness in both music and coding. My projects often involve generative sound or visual elements. I work with Node.js, React, Redux, PostgreSQL, and sometimes React Native and Firebase. Right now, I'm freelancing, but I'd really love to work for you.

          </h2>
        </div>

        <NewNav page="about" />
        </div>
      );
    }
  }

