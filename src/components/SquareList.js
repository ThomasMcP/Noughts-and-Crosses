import React, {Component, Fragment} from 'react';
import Square from './Square.js';

class SquareList extends Component {
  constructor(props){
    super(props);
  }

  render(){
    const squareComponents = this.props.squares.map((square, index) => {
      return <Square key={index}value={square} id={index} handleSquareClick={this.props.handleSquareClick} />
    })
    return(
      <div className="grid">
      {squareComponents}
      </div>
    )
  }
}

export default SquareList;
