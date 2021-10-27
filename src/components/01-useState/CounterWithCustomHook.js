import React from 'react'
import './counter.css';
import useCounter from '../../hooks/useCounter';

export default function CounterWithCustomHook() {
   const { state, increment, decrement, reset } = useCounter(0);
   return (
      <>
         <h1>Counter with hook: {state}</h1>
         <hr />

         <div class="btn-group" role="group" aria-label="Basic outlined example">
            <button className="btn btn-outline-primary" onClick={() => decrement(1)} >-1</button>
            <button className="btn btn-outline-primary" onClick={reset} >Reset</button>
            <button className="btn btn-outline-primary" onClick={() => increment(1)} >+1</button>
         </div>
      </>
   )
}
