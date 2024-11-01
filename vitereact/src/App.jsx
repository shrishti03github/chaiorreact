
import { useState } from "react";

function App() {
   let [counter ,setcounter] = useState(15);

const addValue = ()=>{
  setcounter(counter+1);
  console.log("clicked", counter);
 // counter++;
}
const removeValue = ()=>{
  if(counter>0){
    setcounter(counter-1)
  }else{
    alert("Counter is already at 0")
  } 
  
  console.log("clicked", counter);
  //counter--;
}


  return (
   <>
   <h1>chai aur react</h1>
   <h2>Counter value:{counter}</h2>
   <button onClick={addValue}>add value {counter}</button>
   <br/>
   <button onClick={removeValue}>remove value{counter}</button>
   <p>footer: {counter}</p>
   
   </>
  )
}

export default App
