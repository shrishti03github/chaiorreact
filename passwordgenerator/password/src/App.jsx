import { useState} from 'react'



function App() {
  
  const [buttontext, setbuttontext] = useState("button 2")
  const [swap,setswap] = useState('false')

  const handlefirstbutton = () =>{
       setbuttontext("text change")
  }

  const handlesecondbutton = ()=>{
    setswap('!true')
  }
  return (
    <div className="flex justify-center items-center">
    <button
      onClick={handlefirstbutton}
      className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200 items-center"
    >
      Button 1
    </button>
    <button
      onClick={handlesecondbutton}
      className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-200"
    >
      {buttontext}
    </button>
  </div>
       
        
    
  )
}

export default App
