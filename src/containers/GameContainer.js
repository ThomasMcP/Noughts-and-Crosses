import React, {Component} from 'react';
import SquareList from '../components/SquareList.js';
import PlayerSelector from '../components/PlayerSelector.js';

class GameContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      squares: ["", "", "", "", "", "", "", "", ""],
      players: ["x", "o"],
      currentPlayer: null
    }

    this.handleSquareClick = this.handleSquareClick.bind(this);
    // this.handleDropChange = this.handleDropChange.bind(this);
  }

  handleSquareClick(index){
    const newSquares = Array.from(this.state.squares);
    newSquares[index] = this.state.players[0];
    this.setState({ squares: newSquares})
  }

  // handleDropChange(){
  //   return return playerIndex;
  // }


  render() {
    return (
    <div className="game-container">
      <h3>SquareList</h3>
      <PlayerSelector players={this.state.players} dropChangeSelected={this.state}/>
      <SquareList squares={this.state.squares} handleSquareClick={this.handleSquareClick}/>
    </div>
    )
  }
}



export default GameContainer;
