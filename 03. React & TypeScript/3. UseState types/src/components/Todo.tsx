import { useState } from "react";



interface Todo {
  id :number  , 
  task : string , 
  completed : boolean 
}





const Todo = () => {

  const [todos, setTodos] = useState<Todo[]>([]); 


  const addTodo = (task : string) => {
    const newTodo = {
      id : todos.length + 1 , 
      task , 
      completed : false 
    }
    setTodos(prevTodos =>[...prevTodos , newTodo])
  }

    
  return (
    <div>
      <h2>Todo list </h2>

      <button onClick={() => addTodo('new todo')} ></button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} > {todo.task} {todo.completed ? '(completed)' : ''} </li>
        ))}
      </ul>
    </div>
  )
}

export default Todo
