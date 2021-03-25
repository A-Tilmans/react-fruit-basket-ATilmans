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
        <span className="minus-button">&#45;</span>
      </button>
      <p>{counterFruit}</p>
      <button
        className="increment-buttons"
        type="button"
        onClick={setCounterPlus}
      >
      <span className="plus-button">&#43;</span>
      </button>
    </div>
  );
}

export default IncrementButtons;