import User from "./User";
import Card from "./UI/Card";

const UserList = (props) => {
  return (
    props.users.length > 0 && (
      <Card>
        {props.users.map((user, index) => (
          <User
            onDeleteUser={props.onDeleteUser}
            key={index}
            id={index}
            username={user.username}
            age={user.age}
          ></User>
        ))}
      </Card>
    )
  );
};

export default UserList;
