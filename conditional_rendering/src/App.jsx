import Greeting from "./components/Greeting"
import Userstatus from "./components/Userstatus"
import Weather from "./components/Weather"




const App = () => {
  return (
    <div>
      <Weather  />
      <Userstatus loggedIn = { true }  isAdmin= {true} /> 
      <Greeting timeOfDay = "morning" /> 
    </div>
  )
}

export default App
