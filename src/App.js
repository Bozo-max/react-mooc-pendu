import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import GuessLetter from './GuessLetter'
import Key from './Key';
import TryCount from './TryCount';

const WORDS = ['caca', 'prout', 'pigeon', 'piscine', 'application', 'enfant', 'bisou', 'detruire', 'chapeau', 'ordinateur', 'console', 'video'];
const LETTERS = 'abcdefghijklmnopqrstuvwxyz'
class App extends Component {

  state = {
    hiddenWord : WORDS[Math.floor(Math.random()*WORDS.length)].split(''),
    foundLetters : [],
    letters : LETTERS.split(''),
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

  handleClickReplay = ()=>{
    this.setState(
      {
        hiddenWord : WORDS[Math.floor(Math.random()*WORDS.length)].split(''),
        foundLetters : [],
        letters : LETTERS.split(''),
        tries: 0
      }
    )
  }

  render(){
    const {hiddenWord, foundLetters, letters, tries} = this.state;
    const won = (hiddenWord.length===foundLetters.length);
    return (
    <div className="App">
      <div className = 'hiddenWord'>
        {
            hiddenWord.map((value, index)=>(
              <GuessLetter
                symbol = {this.getSymbolForLetter(value,  index)}
                key = {index}
                />
              ))
        }
      </div>

      <div className='keyboard'>
        {
          letters.map((value, index)=>(
            <Key
              symbol={value}
              key={value}
              onClick = {this.handleClickForKey}
            />
          ))
        }
      </div>

      <TryCount tries = {tries}/>

      {won && <div class='congrats'>BRAVO !!!!!!!! <button onClick={this.handleClickReplay}>Rejouer</button></div>}
    </div>
  );
  }
}

export default App;
