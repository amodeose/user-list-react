import UserInput from "./components/UserInput";
import UserList from "./components/UserList";
import data from "./data.js";
import { useState } from 'react';

function App() {

  const [users, setUsers] = useState(data);

  const handleAddUser = newUser => {
    setUsers(prev => [newUser, ...prev])
  }

  const handleDeleteUser = id => {
    setUsers(prev => prev.filter(
      (item, index) => index != id
    ))
  }

  return (
    <div>
      <UserInput onAddUser={handleAddUser}/>
      <UserList users={users} onDeleteUser={handleDeleteUser}/>
    </div>
  );
}

export default App;
