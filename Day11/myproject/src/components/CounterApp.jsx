import React, { useState } from 'react';
import './CounterApp.css';

const CounterApp = () => {
  const [count, setCount] = useState(0);

  return (
    <div class="card">
  <div class="card2">

    <div className="disp">
      <h1 className="header" id="heading">{count}</h1>
      
      
      <button class="button btn" onClick={() => setCount(count + 1)}>
    <div class="button_lg">
        <div class="button_sl"></div>
        <div class="button_text">Incre</div>
    </div>
</button>
      
      
      <button class="button btn" onClick={() => setCount(0)}>
    <div class="button_lg">
        <div class="button_sl"></div>
        <div class="button_text">Reset</div>
    </div>
</button>
      
      <button class="button btn" onClick={() => setCount(count - 1)}>
    <div class="button_lg">
        <div class="button_sl"></div>
        <div class="button_text">Decre</div>
    </div>
</button>
      
      
     
    </div>
    </div>
</div>
  );
};

export default CounterApp;
