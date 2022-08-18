import classes from "./UserInput.module.css";
import React, { useState } from "react";
import ErrorModal from "./ErrorModal";
import Card from "./UI/Card";
import Button from "./UI/Button";

const UserInput = (props) => {
  const [user, setUser] = useState({ username: "", age: "" });
  const [errorStatus, setErrorStatus] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (user.age < 0) {
      setErrorStatus(true);
      setErrorMessage("Please enter a valid age.");
      setUser((prev) => ({ ...prev, age: "" }));
    } else if (user.username.trim().length === 0 || user.age.length === 0) {
      setErrorStatus(true);
      setErrorMessage("All inputs fields must be completed.");
    } else {
      props.onAddUser(user);
      setUser({ username: "", age: "" });
    };
  };

  const acceptError = () => {
    setErrorStatus(false);
  }

  return (
    <React.Fragment>
      {errorStatus && <ErrorModal message={errorMessage} acceptError={acceptError}/>}
      <Card>
        <form className={classes.userInput} onSubmit={handleSubmit}>
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
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default UserInput;
