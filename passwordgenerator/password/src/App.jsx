import { useState,useCallback } from 'react'

import './App.css'

function App() {
  const[Length , setLength] = useState(8);
  const[Password , setPassword] = useState('');
  const [numAllowed , setnumAllowed] = useState("false");
  const [charAllowed , setcharAllowed] = useState("false");
  
  const passwordGenerator = useCallback(()=>{
    
  },[length,numAllowed,charAllowed,setPassword])
  return (
    <>
      <h1 className='text-4xl text-center text-white'>Password Generator </h1>
    </>
  )
}

export default App
