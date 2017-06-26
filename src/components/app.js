import React, { Component } from 'react';
import { connect } from 'react-redux';

import MemeItem from './memes';

import '../styles/index.css'


class App extends Component {
  constructor(){
    super();

    this.state = {
      memeLimit: 15
    }
    this.showMeme = this.showMeme.bind(this);
  }

  loadMoreMemes() {
    this.setState({ memeLimit: this.state.memeLimit + 15 });
  }

  showMeme(meme) {
    const { id } = meme;
    return (
      <MemeItem key={id} meme={meme} />
    )
  }

  render() {
    return (
      <div>
        <h2>Welcome to Meme Generator!</h2>
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
