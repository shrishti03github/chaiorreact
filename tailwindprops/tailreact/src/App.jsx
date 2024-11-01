import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-300 text-white p-4 rounded-e-md mb-4'>Tailwind</h1>
      <Card/>
      <Card/> 
          
    </>
  )

}

export default App;
