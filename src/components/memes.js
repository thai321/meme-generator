import React, { Component } from 'react';

class MemeItem extends Component {
  constructor() {
    super();

    this.state = {
      hover: false
    }
  }

  render() {
    const { name, url } =this.props.meme;
    return (
      <div className="meme-item"
        onMouseOver={() => this.setState({hover: true})}
        onMouseLeave={() => this.setState({hover: false})}
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

export default MemeItem;
