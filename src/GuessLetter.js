import React from 'react';
import './GuessLetter.css';

const GuessLetter = ({symbol}) => (
  <div className='guessLetter'>
    <span>
      {symbol}
    </span>
  </div>
)

export default GuessLetter
