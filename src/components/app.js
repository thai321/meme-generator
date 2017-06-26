import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

import WriteForm from './write_form';
import MyMemes from './my_memes';


export default class App extends Component {

  render() {
    return (
      <div>
        <h2><u>Welcome to Meme Generator!</u></h2>
        <MyMemes />
        <h4><i>Write some text</i></h4>
        <WriteForm />

      </div>
    )
  }
}
