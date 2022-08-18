import classes from "./ErrorModal.module.css";
import React from "react";
import Button from "./UI/Button";

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      <div className={classes.backdrop} onClick={props.acceptError}></div>
      <div className={classes.modal}>
        <header>
          <h1>Error</h1>
        </header>
        <footer>
          <h2>{props.message}</h2>
          <Button onClick={props.acceptError}>Okay</Button>
        </footer>
      </div>
    </React.Fragment>
  );
};

export default ErrorModal;
