import "./UserInput.css";
import React, { useState } from "react";
import ErrorModal from "./ErrorModal";

const UserInput = (props) => {
  const [user, setUser] = useState({ username: "", age: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onAddUser(user);
    setUser({ username: "", age: "" });
  };

  return (
    <React.Fragment>
      <ErrorModal />
      <div className="card">
        <form onSubmit={handleSubmit}>
          <label>UserName</label>
          <input
            onChange={handleChange}
            value={user.username}
            name="username"
          ></input>
          <label>Age(Years)</label>
          <input
            onChange={handleChange}
            value={user.age}
            name="age"
            type="number"
          ></input>
          <button type="submit">Add User</button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default UserInput;
