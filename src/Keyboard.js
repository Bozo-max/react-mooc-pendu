import React from 'react';
import Key from './Key';
import './Keyboard.css'

const LETTERS = 'abcdefghijklmnopqrstuvwxyz'.split('');
console.log(LETTERS);
const Keyboard = (()=>
  (<div className = 'keyboard'>
    {LETTERS.map((symbol, index)=>(
      <Key
        symbol={symbol}
        key={index}
      />
    ))}
  </div>)
)

export default Keyboard;
