import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

import '../styles/index.css'

import MemeItem from './memes';
import MyMemes from './my_memes';

class WriteForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      memeLimit: 15,
      topText: '',
      bottomText: ''
    }
    this.showMeme = this.showMeme.bind(this);
  }

  showForm(){
    return (
      <Form inline>

        <FormGroup>
          <ControlLabel>Top</ControlLabel>
          {' '}
          <FormControl
            type="text"
            onChange={ (event) => this.changeText(event,'top')}
          ></FormControl>
        </FormGroup>
        {' '}
        <FormGroup>
          <ControlLabel>Bottom</ControlLabel>
          {' '}
          <FormControl
            type="text"
            onChange={ (event) => this.changeText(event,'bottom')}
          ></FormControl>
        </FormGroup>

      </Form>
    )
  }

  showMeme(meme) {
    const { id } = meme;
    return (
      <MemeItem
        key={id}
        meme={meme}
        topText={this.state.topText}
        bottomText={this.state.bottomText}
      />
    )
  }

  loadMoreMemes() {
    return (
      <div
        className="load-button"
        onClick={() => this.setState({ memeLimit: this.state.memeLimit + 15 })}
        >
          Load 15 more memes...
      </div>
    )
  }

  changeText(event, position) {
    let input = event.target.value;
    (position === 'top') ? this.setState({topText: input}) : this.setState({bottomText: input})
  }

  render() {
    return (
      <div>
        { this.showForm() }

        {
          this.props.memes.slice(0, this.state.memeLimit).map(this.showMeme)
        }

        { this.loadMoreMemes() }

      </div>
    )
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, null)(WriteForm);
