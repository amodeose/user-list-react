import UserInput from "./components/UserInput";
import UserList from "./components/UserList";
import data from "./data.js";
import { useState } from 'react';

function App() {

  const [users, setUsers] = useState(data);

  const handleAddUser = newUser => {
    setUsers(prev => [newUser, ...prev])
  }

  return (
    <div>
      <UserInput onAddUser={handleAddUser}/>
      <UserList users={users}/>
    </div>
  );
}

export default App;
