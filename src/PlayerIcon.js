import React, { Component } from 'react';
import './App.css';

function nameToRgb(name) {
  let char = name[0].toUpperCase();
  let proportion = (char.charCodeAt() - 65) / 25;
  let hue = proportion * 255;
  return "hsl(" + hue + ", 65%, 70%)";
};

class PlayerIcon extends Component {
  render() {
    return (
      <div className="player-icon card" style={{ backgroundColor: nameToRgb(this.props.player) }}>
        <div className="player-footer">{ this.props.player }</div>
      </div>
    );
  }
}

export default PlayerIcon;
