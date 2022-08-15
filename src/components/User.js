import "./User.css";

const User = (props) => {
  return <h3>{props.username + " (" + props.age + " years old)"}</h3>;
};

export default User;
