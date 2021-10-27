import { useState } from "react";

export default function useCounter(initialState = 0) {

   const [state, setState] = useState(initialState);


   const increment = (factor) => setState(state + factor);
   const decrement = (factor) => setState(state - factor);
   const reset = (factor) => setState(initialState);

   return { state, increment, decrement, reset };
}
