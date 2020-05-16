import React from 'react';

const Key = ({symbol, onClick}) => (
  <div className={`key ${symbol}`} onClick={()=>onClick(symbol)}>
    <span className='symbol'>
      {symbol}
    </span>
  </div>
)

export default Key
