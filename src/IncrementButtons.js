import React from 'react';

function IncrementButtons({title, setCounterMinus, counterFruit, setCounterPlus}){
  return(
    <div className="fruit-container">
      <h3>{title}</h3>
      <button
        className="increment-buttons"
        type="button"
        onClick={setCounterMinus}
      >
      <p>-</p>
      </button>
      <p>{counterFruit}</p>
      <button
        className="increment-buttons"
        type="button"
        onClick={setCounterPlus}
      >
      <p>+</p>
      </button>
    </div>
  );
}

export default IncrementButtons;