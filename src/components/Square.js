import React, {Component} from 'react';

class Square extends Component {
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);

  }

  handleClick(){
    this.props.handleSquareClick(this.props.id)

  }

  render(){
    return(
      <div className="square" onClick={this.handleClick}>
      {this.props.value}
      </div>
    )
  }
}

export default Square;
