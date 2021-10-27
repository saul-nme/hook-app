import React, { useEffect, useState } from 'react'

export default function Message() {
   const [{ x, y }, setCords] = useState({ x: 0, y: 0 })

   useEffect(() => {
      const mousemove = (e) => {
         console.log(e);
         setCords({ x: e.x, y: e.y });
      }


      window.addEventListener("mousemove", mousemove);
      return () => {
         window.removeEventListener("mousemove", mousemove);
      }


   }, []);

   return (
      <div>
         <h3>Message</h3>
         <p>x: {x}</p>
         <p>y: {y}</p>
      </div>
   )
}
