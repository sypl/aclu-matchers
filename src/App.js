import React, { Component } from 'react';

import './App.css';

import { Timeline } from 'react-twitter-widgets';
import CloudwokComponent from './CloudwokComponent';

const twitterHandle = 'ACLU_Multiplier';

const divStyle = {
  align: 'float left',
  padding: '25px',
  borderTopStyle: 'solid'
};

const signatureStyle = {
  fontSize: '0.8em'
};

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="App-header">
          <h2>ACLU Donation Multiplier</h2>
        </div>

        <div>
          <p>Drag and drop a screenshot of your ACLU donation receipt below to multiply your donation by 10.</p>
        </div>

        <CloudwokComponent />

        <div style={divStyle}>
          <i>
            “‘Extreme vetting’ is just a euphemism for discrimination against Muslims. Identifying specific countries with Muslim majorities and carving out exceptions for minority religions flies in the face of the constitutional principle that bans the government from either favoring or discriminating against particular religions. Any effort to discriminate against Muslims and favor other religions runs afoul of the First Amendment.”
          </i>

          <p style={signatureStyle}>
            - Anthony D. Romero, Executive Director, American Civil Liberties Union
          </p>
          <p>
            The above is a statement from the Executive Director of the ACLU, a statement that I wholeheartedly agree with - and I'm not alone.
            <br/>
            <br />
            People around the nation have volunteered to match our donations to the ACLU; all they need from us is a tweet with the donation receipt.
            <br/>
            <br />
            Drag and drop your receipt above, and I will automatically tweet your receipt to at least ten matching donors. Multiply your donation by 10!
          </p>
          <p>

          </p>
        </div>

        <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: twitterHandle
          }}
          options={{
            username: twitterHandle,
            height: '400',
            width: '300'
          }}
        />
      </div>
    );
  }
}

export default App;