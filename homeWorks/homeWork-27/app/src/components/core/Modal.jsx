import { useEffect, useRef } from 'react';

function Modal(props) {
  return (
    <div className="modal-wrapper">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Task №{props.task.id}</h5>
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="modal"
            aria-label="Close"
            onClick={props.onClick}
          ></button>
        </div>
        <div className="modal-body">
          <p>This task description {props.task.text}</p>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
            onClick={props.onClick}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
