import React, {Component} from 'react';
import PropTypes from 'prop-types';
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
    const {onClick} = this.props;
    return (
      <div className={`key ${this.state.status}`}
      onClick={()=>{onClick(this.symbol); this.handleClick()}}>
      <span className='symbol'>
      {this.symbol}
      </span>
      </div>
    )
  }
}

Key.propTypes = {
  symbol: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Key
