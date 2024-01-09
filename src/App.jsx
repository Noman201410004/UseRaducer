
import { useReducer } from 'react'
import './App.css'
import { initialState } from './store';
import reducer from './Reducer';

function App() {
 
  
 
 
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
