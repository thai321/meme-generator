import React, { Component } from 'react';

class MemeItem extends Component {

  render() {
    const { name, url } =this.props.meme;
    return (
      <div className="meme-item">
        <img
          className="meme-img"
          src={url}
          alt={name}
          />
        <p className="meme-txt">{name}</p>
      </div>
    )
  }
}

export default MemeItem;
