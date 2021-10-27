import React, { useState } from 'react';
import './counter.css'

export default function CounterApp() {
   const [{ counter1, counter2 }, setCounter] = useState({
      counter1: 10,
      counter2: 20
   })
   return (
      <>
         <h1>Counter1 {counter1}</h1>
         <h1>Counter2 {counter2}</h1>
         <hr />
         <button
            className="btn btn-outline-success"
            onClick={() => setCounter((state) => ({ ...state, counter1: counter1 + 1 }))}
         >+1</button>
      </>
   )
}
