import "./UserInput.css";

const UserInput = (props) => {
  return (
    <div className="card">
      <form>
        <label>UserName</label>
        <input></input>
        <label>Age(Years)</label>
        <input></input>
        <button>Add User</button>
      </form>
    </div>
  );
};

export default UserInput;
