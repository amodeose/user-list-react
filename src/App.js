import UserInput from "./components/UserInput";
import UserList from "./components/UserList";
import data from "./data.js";

console.log(data);
function App() {

  

  return (
    <div>
      <UserInput />
      <UserList />
    </div>
  );
}

export default App;
