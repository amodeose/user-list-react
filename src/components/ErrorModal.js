import "./ErrorModal.css";
import React from "react";

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      <div className="backdrop" onClick={props.acceptError}></div>
      <div className="modal">
        <header>
          <h1>Error</h1>
        </header>
        <footer>
          <h2>{props.message}</h2>
          <button onClick={props.acceptError}>Okay</button>
        </footer>
      </div>
    </React.Fragment>
  );
};

export default ErrorModal;
