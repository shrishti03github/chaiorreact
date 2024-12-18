
import { useState } from "react"
function App() {
  const [color, setColor] = useState("olive")

  return (

    <div className="w-full h-screen duration-200"
    style={{backgroundColor:color}}
    >
     <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 text-white">

      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-xl px-3 py-2">
          <button onClick={()=>setColor("#a855f7")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"purple"}}>purple</button>

<button onClick={()=>setColor("black")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"black"}}>black</button>

<button  onClick={()=>setColor("lavender")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"lavender"}}>lavender</button>

<button  onClick={()=>setColor("pink")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"pink"}}>pink</button>

<button  onClick={()=>setColor("#fb7185")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"red"}}>red</button>

      </div>
     </div>
     
     </div>
  )
}

export default App
