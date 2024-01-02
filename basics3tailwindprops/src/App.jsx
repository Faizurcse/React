
import './App.css'
import Cards from './components/Cards'
function App() {
  let myobj ={
    name:"faiz",
    age : 23
  }
  return (
    <>
       <h1 className='bg-green-400 rounded-xl mb-4 p-3'>Tailwind start</h1>
       <Cards  details="chai" btntext = "change" k ={myobj}/>
    </>
  )
}

export default App
