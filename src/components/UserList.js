import "./UserList.css";
import User from "./User";

const UserList = (props) => {
  return (
    <div className="card">
      <div>
        {props.users.map((user, index) => (
          <User key={index} id={index} username={user.username} age={user.age}></User>
        ))}
      </div>
    </div>
  );
};

export default UserList;
