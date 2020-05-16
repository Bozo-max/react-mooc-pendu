import React, {Component} from 'react';
import './Key.css'

class Key extends Component{
  constructor(props){
    super(props);
    const {symbol} = props;
    this.symbol = symbol;
  }
  state = {
    status : 'unclicked'
  }

  handleClick = () => {this.setState({status:'clicked'})}

  render(){
    return (
      <div className={`key ${this.state.status}`} onClick={this.handleClick}>
      <span className='symbol'>
      {this.symbol}
      </span>
      </div>
    )
  }
}

export default Key
