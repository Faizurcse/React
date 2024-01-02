import React,{ useState } from 'react'
import './App.css'
function App() {
  let [counter,newcounter] = useState(15)
  
  const mybtn=()=>{
    if(counter<=20){
      newcounter(counter+1) 
      console.log(counter)
    }
   
   
}
const mybtn2 = () =>{
  if(counter>=0){
    console.log(counter)
    newcounter(counter-1) ;
  }
  
}
let a = "";
let b = "";
if(counter>20){
  a = "value is greater than 20";
  console.log(a)
}
if(counter<0){
  b = "value is less then zero";
  console.log(b)
}
  return (
    <>
      <h1>hey faiz</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={mybtn}>Add value {counter}</button> <br/>
      <button onClick={mybtn2}>Remove value {counter}</button>
      <footer>{a || b}</footer>
    </>
  )
}
export default App
