import UserInput from "./components/UserInput";
import UserList from "./components/UserList";
import data from "./data.js";
import { useState } from 'react';

function App() {

  const [users, setUsers] = useState(data);

  return (
    <div>
      <UserInput />
      <UserList users={users}/>
    </div>
  );
}

export default App;
