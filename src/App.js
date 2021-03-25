import React, { useState,  } from 'react';
import { useForm } from 'react-hook-form';

import IncrementButtons from "./IncrementButtons";
import './App.css';

function App() {

  const {handleSubmit, register, watch} = useForm( { mode: "onBlur" });
  const selectedDeliveryFrequency = watch("delivery-frequency")


  const [ counterStrawberries, setCounterStrawberries ] = useState(0);
  const [ counterBananas, setCounterBananas ] = useState(0);
  const [ counterApples, setCounterApples ] = useState(0);
  const [ counterKiwis, setCounterKiwis ] = useState(0);


  function onFormSubmit(data){
  console.log(data)
  console.log(
    `Strawberries: ${counterStrawberries}, 
    Bananas: ${counterBananas}, 
    Apples: ${counterApples}, 
    Kiwis: ${counterKiwis}`);
  }

  const resetCounters = () => {
    setCounterStrawberries(0)
    setCounterBananas(0)
    setCounterApples(0)
    setCounterKiwis(0)
  }

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
     <h1>Fruitmand bezorgservice</h1>

     <fieldset>

      <IncrementButtons
        title="🍓 Strawberries"
        setCounterMinus={() =>
        setCounterStrawberries(counterStrawberries === 0 ? counterStrawberries : counterStrawberries -1)}
        counterFruit={counterStrawberries}
        setCounterPlus={() =>
        setCounterStrawberries(counterStrawberries + 1)}
      />

      <IncrementButtons
        title="🍌 Bananas"
        setCounterMinus={() =>
          setCounterBananas(counterBananas === 0 ? counterBananas : counterBananas -1)}
        counterFruit={counterBananas}
        setCounterPlus={() =>
          setCounterBananas(counterBananas + 1)}
      />

      <IncrementButtons
        title="🍏 Apples"
        setCounterMinus={() =>
          setCounterApples(counterApples === 0 ? counterApples : counterApples -1)}
        counterFruit={counterApples}
        setCounterPlus={() =>
          setCounterApples(counterApples + 1)}
      />

      <IncrementButtons
        title="🥝 Kiwis"
        setCounterMinus={() =>
          setCounterKiwis(counterKiwis === 0 ? counterKiwis : counterKiwis -1)}
        counterFruit={counterKiwis}
        setCounterPlus={() =>
          setCounterKiwis(counterKiwis + 1)}
      />

       <button
         type="reset"
         value="Reset"
         className="reset-counters"
         onClick={resetCounters}
       >Reset
       </button>
     </fieldset>

    <fieldset className="order-details">
      <legend>Gegevens</legend>
      <article className="label-and-text">
        <label htmlFor="details-first-name">
          Voornaam
          <input
            type="text"
            name="first-name"
            id="details-first-name"
            ref={register({required: true})}
          />
        </label>
      </article>

      <article className="label-and-text">
        <label htmlFor="details-last-name">
          Achternaam
          <input
            type="text"
            name="last-name"
            id="details-last-name"
            ref={register({required: true})}
          />
        </label>
      </article>

      <article className="label-and-text">
        <label htmlFor="details-age">
          Leeftijd
          <input
            type="number"
            name="age"
            id="details-age"
            ref={register({required: true,
              min: 18})}
          />
        </label>
      </article>

      <article className="label-and-text">
        <label htmlFor="details-postcode">
          Postcode
          <input
            type="text"
            name="postcode"
            id="details-postcode"
            ref={register({required: true})}
          />
        </label>
      </article>


    </fieldset>

    <fieldset className="delivery-frequency">
      <legend>Bezorgfrequentie</legend>
      <label htmlFor="delivery-weekly">
        Iedere week
        <input
          type="radio"
          name="delivery-frequency"
          id="delivery-weekly"
          value="weekly"
          ref={register({required: true})}
        />
     </label>
     <label htmlFor="delivery-biweekly">
        Om de week
        <input
        type="radio"
        name="delivery-frequency"
        id="delivery-biweekly"
        value="bi-weekly"
        ref={register}
        />
     </label>

      <label htmlFor="delivery-monthly">
        Iedere maand
        <input
        type="radio"
        name="delivery-frequency"
        id="delivery-monthly"
        value="monthly"
        ref={register}
        />
      </label>
      <label htmlFor="delivery-other">
        Anders
        <input
        type="radio"
        name="delivery-frequency"
        id="delivery-other"
        value="other"
        ref={register}
        />
      </label>
      {selectedDeliveryFrequency === "other" && (
      <input
        type="text"
        name="delivery-frequency-other-message"
        ref={register({required: true})}
      />
    )}
    </fieldset>

    <fieldset className="comment-and-submit">
      <legend>Opmerking</legend>
    <label htmlFor="order-comments" >
      <textarea
      name="comments"
      id="order-comments"
      ref={register}
      rows="4"
      cols="40"
      >
      </textarea>
    </label>

      <label htmlFor="terms-and-conditions">
        <input
          name="terms-conditions"
          type="checkbox"
          ref={register({required: true})}
        />
        Ik ga akkoord met de voorwaarden
      </label>

      <button type="submit">
        Verzend
      </button>
    </fieldset>
    </form>
  );
}


export default App;
