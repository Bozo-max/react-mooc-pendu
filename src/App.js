import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import GuessLetter from './GuessLetter'
import Key from './Key';
import TryCount from './TryCount';

const WORDS = ['caca', 'prout', 'pigeon', 'piscine', 'application', 'enfant', 'bisou', 'detruire', 'chapeau', 'ordinateur', 'console', 'video'];

class App extends Component {

  state = {
    hiddenWord : WORDS[Math.floor(Math.random()*WORDS.length)].split(''),
    foundLetters : [],
    letters : 'abcdefghijklmnopqrstuvwxyz'.split(''),
    tries: 0
  }

  getSymbolForLetter = (value, index) => {
    return this.state.foundLetters.includes(index) ? value : '_';
  }

  handleClickForKey = (value) =>{
    const {hiddenWord, foundLetters, tries, letters} = this.state;
    var index = -1;
    letters.splice(letters.indexOf(value), 1);
    while((index = hiddenWord.indexOf(value, index+1))>-1){
      foundLetters.push(index);
    }
    this.setState({foundLetters:foundLetters, tries:tries+1, letters:letters});
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
          this.state.letters.map((value, index)=>(
            <Key
              symbol={value}
              key={value}
              onClick = {this.handleClickForKey}
            />
          ))
        }
      </div>
      <TryCount tries = {this.state.tries}/>
    </div>
  );
  }
}

export default App;
