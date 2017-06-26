import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

import MemeItem from './memes';
import MyMemes from './my_memes';

import '../styles/index.css'


class App extends Component {
  constructor(){
    super();

    this.state = {
      memeLimit: 15,
      topText: '',
      bottomText: ''
    }
    this.showMeme = this.showMeme.bind(this);
  }

  changeText(event, position) {
    let input = event.target.value;
    (position === 'top') ? this.setState({topText: input}) : this.setState({bottomText: input})
  }

  loadMoreMemes() {
    this.setState({ memeLimit: this.state.memeLimit + 15 });
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

  render() {
    return (
      <div>
        <h2><u>Welcome to Meme Generator!</u></h2>
        <MyMemes />
        <h4><i>Write some text</i></h4>
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

        {
          this.props.memes.slice(0, this.state.memeLimit).map(this.showMeme)
        }

        <div
          className="load-button"
          onClick={() => this.loadMoreMemes()}
          >
            Load 15 more memes...
        </div>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, null)(App);
