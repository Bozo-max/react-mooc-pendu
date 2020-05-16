import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import GuessLetter from './GuessLetter'
import Key from './Key';

class App extends Component {

  state = {
    hiddenWord : 'cache'.split(''),
    foundLetters : [],
    LETTERS : 'abcdefghijklmnopqrstuvwxyz'.split('')
  }

  getSymbolForLetter = (value, index) => {
    return this.state.foundLetters.includes(index) ? value : '_';
  }

  render(){
    return (
    <div className="App">
      <div className = 'hiddenWord'>
        {
            this.state.hiddenWord.map((value, index)=>(
              <GuessLetter
                symbol = {this.getSymbolForLetter(index,  value)}
                key = {index}
                />
              ))
        }
      </div>
      <div className='keyboard'>
        {
          this.state.LETTERS.map((value, index)=>(
            <Key
              symbol={value}
              key={index}
            />
          ))
        }
      </div>

    </div>
  );
  }
}

export default App;
