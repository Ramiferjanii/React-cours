import UserProfile from "./components/UserProfile"
import { UserProvider } from "./components/UserContext";

const App = () => {
  return (
    <UserProvider>
      <UserProfile />
    </UserProvider>
  );
};

export default App;