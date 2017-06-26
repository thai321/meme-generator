import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createMeme } from '../actions';


class MemeItem extends Component {
  constructor() {
    super();

    this.state = {
      hover: false
      // textMissed: false
    }
  }

  postMeme(){

    const { topText, bottomText, meme: { id } } = this.props;
    if(topText || bottomText) {
      const memeObj = { template_id: id, text0: topText, text1: bottomText };
      this.props.createMeme(memeObj);
    }
  }

  render() {
    const { name, url } = this.props.meme;
    return (

      <div className="meme-item"
        onMouseOver={() => this.setState({hover: true})}
        onMouseLeave={() => this.setState({hover: false})}
        onClick={() => this.postMeme()}
      >
        <img
          className={this.state.hover ? "meme-img darken-img" : "meme-img"}
          src={url}
          alt={name}
          />

        <p className={this.state.hover ? "meme-txt" : "no-txt"}>{name}</p>

      </div>
    )
  }
}


export default connect(null, { createMeme }) (MemeItem);
