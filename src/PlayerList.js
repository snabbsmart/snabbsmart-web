import React, { Component } from 'react';
import PlayerIcon from './PlayerIcon'
import './App.css';

let players = "Kelvin Bonde Vicke Ross Omroc".split(" ");

function nameToRgb(name) {
  let char = name[0].toUpperCase();
  let proportion = (char.charCodeAt() - 65) / 25;
  let hue = proportion * 255;
  return "hsl(" + hue + ", 65%, 70%)";
}

class PlayerList extends Component {
  render() {
    return (
      <div className="row">
        <h2 className="text-center">Spelare</h2>
        <div className="center-column" id="player-list">
          {
            players.map((player) => {
              return <PlayerIcon player={player} />
            })
          }
        </div>
      </div>
    );
  }
}

export default PlayerList;
