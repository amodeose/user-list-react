import "./UserInput.css";
import { useState } from "react";

const UserInput = (props) => {
  const [user, setUser] = useState({ username: "", age: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prev) => ({ ...prev, [name]: value}));
  }

  const handleSubmit = event => {
    event.preventDefault();
  }

  return (
    <div className="card">
      <form onSubmit={handleSubmit}>
        <label>UserName</label>
        <input onChange={handleChange} value={user.username} name="username"></input>
        <label>Age(Years)</label>
        <input onChange={handleChange} value={user.age} name="age" type="number"></input>
        <button type='submit'>Add User</button>
      </form>
    </div>
  );
};

export default UserInput;
