import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/index.css';

class MyMemes extends Component {
  constructor(){
    super();

    this.showMeme = this.showMeme.bind(this);
  }

  showMeme(meme, index) {
    return (
      <img
        key={index}
        src={meme.data.url}
        alt="my-meme"
        className="my-meme-img"
      />
    )
  }


  render() {
    return (
      <div>
      {
        this.props.myMemes.map(this.showMeme)
      }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    myMemes: state.myMemes
  }
}

export default connect(mapStateToProps, null)(MyMemes);
