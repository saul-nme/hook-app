import { useState } from "react";

export default function useForm(initialState = {}) {
   const [values, setValues] = useState(initialState)


   function handleInputChange({ target: { name, value } }) {
      setValues((state) => ({ ...state, [name]: value }))
   }

   return [values, handleInputChange];
}
