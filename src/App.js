import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import GuessLetter from './GuessLetter'
import Key from './Key';

const WORDS = ['caca', 'prout', 'pigeon', 'piscine', 'application', 'enfant', 'bisou', 'detruire', 'chapeau', 'ordinateur', 'console', 'video'];

class App extends Component {

  state = {
    hiddenWord : WORDS[Math.floor(Math.random()*WORDS.length)].split(''),
    foundLetters : [],
    LETTERS : 'abcdefghijklmnopqrstuvwxyz'.split('')
  }

  getSymbolForLetter = (value, index) => {
    return this.state.foundLetters.includes(index) ? value : '_';
  }

  handleClickForKey = (value) =>{
    const {hiddenWord, foundLetters} = this.state;
    var index = -1;
    while((index = hiddenWord.indexOf(value, index+1))>-1){
      foundLetters.push(index);
    }
    this.setState({foundLetters:foundLetters});
  }

  render(){
    return (
    <div className="App">
      <div className = 'hiddenWord'>
        {
            this.state.hiddenWord.map((value, index)=>(
              <GuessLetter
                symbol = {this.getSymbolForLetter(value,  index)}
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
              onClick = {this.handleClickForKey}
            />
          ))
        }
      </div>

    </div>
  );
  }
}

export default App;
