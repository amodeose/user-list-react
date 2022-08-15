import "./User.css";

const User = (props) => {
  return (
    <div>
      <h3>{props.username + " (" + props.age + " years old)"}</h3>
      <button onClick={()=> {props.onDeleteUser(props.id)}}>Delete</button>
    </div>
  );
};

export default User;
