import { useEffect, useState } from "react";

const Error = ({children}) => { 
return (
    <div className="bg-red-800 text-white font-bold mx text-center p-3 uppercase mb-3 rounded-md ">
      <p>
    {children}   
      </p>
    </div>)}


export default Error
