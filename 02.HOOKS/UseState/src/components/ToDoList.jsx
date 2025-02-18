import { useState } from "react"

const ToDoList = () => {

    const [ todos , setTodos] = useState([])
    const [inputvalue , setInputValue ] = useState("")


    const handleSubmit   = e => {
        e.preventDefault()


        if (inputvalue.trim()) {
            setTodos([...todos , inputvalue])
            setInputValue('') 
        }

    }



    const handleChange = e => {
        setInputValue(e.target.value)
    }




  return (
    <div>
    <h1> Todo list </h1>
    <form onSubmit={handleSubmit} >
        <input type="text" value={inputvalue}  onChange={handleChange} placeholder="Add a new todo " />
        <button type="submit" >Add todo</button>
    </form>




    <ul>
        {todos.map((todo , index) => (
            <li key={index} > {todo}</li>
        ))}
    </ul>
    </div>
  )
}

export default ToDoList
