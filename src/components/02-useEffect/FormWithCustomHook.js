import React from 'react';
import useForm from '../../hooks/useForm'
import './effects.css';

export default function FormWithCustomHook() {

   const [values, handleInputChange] = useForm({
      name: '',
      email: '',
      password: ''
   });

   const { name, email, password } = values;

   return (
      <>
         <h1>FormWithCustomHook</h1>
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
            <input
               type="password"
               name="password"
               className="form-control"
               placeholder="******"
               value={password}
               onChange={handleInputChange}
            />
         </div>

      </>
   )
}
