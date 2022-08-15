import "./User.css";

const User = (props) => {
  return (
    <div>
      <h3>{props.username}</h3>
      <p>{" (" + props.age + " years old)"}</p>
      <button
        className="button-delete"
        onClick={() => {
          props.onDeleteUser(props.id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default User;
