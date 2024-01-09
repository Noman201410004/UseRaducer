
import { useReducer } from 'react'
import './App.css'

function App() {
 
  const initialState={
    name:"noman",
    age:"24"
  }
  const reducer=(state,action)=>{

    switch (action.type) {
      case "CHANG_NAME":
        
        return{
          ...state,name:"Rejaul"
        }
    
      default:
        break;
    }


  }
 
  const [state,dispatch]=useReducer(reducer,initialState)
  const btnHandleClick=()=>{
   dispatch({type:"CHANG_NAME"})
  }
  return (
    <>
      <h1>name:{state.name}</h1>
      <h2>Age:{state.age}</h2>

      <button onClick={btnHandleClick} style={{backgroundColor:"red"}}>Click me</button>

    </>
  )
}

export default App
