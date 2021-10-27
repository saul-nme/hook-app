import React, { useEffect, useState } from 'react';
import Message from './Message';
import './effects.css';

export default function SimpleForm() {

   const [{ name, email }, setFormState] = useState({
      name: '',
      email: ''
   });

   useEffect(() => {
      console.log("coso");
   }, []);

   function handleInputChange({ target: { name, value } }) {
      setFormState((state) => ({ ...state, [name]: value }))
   }

   return (
      <>
         <h1>Use Effect</h1>
         <hr />

         <div className="form-group">
            <input
               type="text"
               name="name"
               className="form-control"
               placeholder="John Doe"
               autoComplete="off"
               value={name}
               onChange={handleInputChange}
            />
            <input
               type="text"
               name="email"
               className="form-control"
               placeholder="example@mail.com"
               autoComplete="off"
               value={email}
               onChange={handleInputChange}
            />
         </div>

         {name && <Message />}
      </>
   )
}
