import classes from "./User.module.css";
import Button from "./UI/Button";

const User = (props) => {
  return (
    <div className={classes.user}>
      <h3>{props.username}</h3>
      <p>{" (" + props.age + " years old)"}</p>
      <Button
        className="button-delete"
        onClick={() => {
          props.onDeleteUser(props.id);
        }}
      >
        Delete
      </Button>
    </div>
  );
};

export default User;
