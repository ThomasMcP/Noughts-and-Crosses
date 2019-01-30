import React, {Component} from 'react';

class PlayerSelector extends Component {
  constructor(props){
    super(props)

    this.handleDropChange = this.handleDropChange.bind(this)
  }



  handleDropChange(event){
    console.log(event);
    this.props.handleSquareClick(event.target.value);

  }

  render(){
    // debugger;
    const options = this.props.players.map((player, index) => {
      return <option value={index} key={index} >{player}</option>
    })
      return (
        <select onChange={this.handleDropChange} id="player-selector" defaultValue="default">
          <option  disabled value="default">Choose a player...</option>
            {options}
        </select>
      )

  }



}

export default PlayerSelector;
