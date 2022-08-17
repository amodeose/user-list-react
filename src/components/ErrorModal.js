import "./ErrorModal.css";
import React from "react";

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      <div className="backdrop"></div>
      <div className="modal card">
        <h2>{props.message}</h2>
        <button>Okay</button>
      </div>
    </React.Fragment>
  );
};

export default ErrorModal;
