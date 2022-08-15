import "./UserList.css";
import User from "./User";

const UserList = (props) => {
  return (
    props.users.length > 0 && (
      <div className="card">
        {props.users.map((user, index) => (
          <User
            onDeleteUser={props.onDeleteUser}
            key={index}
            id={index}
            username={user.username}
            age={user.age}
          ></User>
        ))}
      </div>
    )
  );
};

export default UserList;
