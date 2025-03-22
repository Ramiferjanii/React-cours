import { useState } from "react"
import UserProfile from "./components/UserProfile"

const App = () => {
  const [count , setCount] = useState<number>(0) 


    const increment = () => {
      setCount(prevCount => prevCount + 1)
    } 
    const decrement = () => {
      setCount(prevcount => prevcount - 1)
    }

  return (
    <div>
      <h1> counter : {count} </h1>
      <button onClick={increment} > Increment  </button>
      <button onClick={decrement} >Decrement </button>
      <UserProfile />
    </div>
  )
}

export default App
