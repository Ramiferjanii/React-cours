import Counter from "./components/Counter";
import Profile from "./components/Profile";
import ShoppingList from "./components/shoppingList";
import ToDoList from "./components/ToDoList";






const App = () => {
  return (
    <div>
      <Counter/> 
      <ToDoList/>
      <Profile/>
      <ShoppingList/>
    </div>
  )
}

export default App ; 
