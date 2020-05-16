import React from 'react';
import Key from './Key';

const LETTERS = 'abcdefghijklmnopqrstuvwxyz'.split('');
console.log(LETTERS);
const Keyboard = (()=>
  (<div className = 'keyboard'>
    {LETTERS.map((symbol, index)=>(
      <Key
        symbol={symbol}
        key={index}
        onClick={(symbol)=>console.log(symbol)}
      />
    ))}
  </div>)
)

export default Keyboard;
