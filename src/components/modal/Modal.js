import React from "react";
import { MdClose } from "react-icons/md";

import "./modal.css";

const Modal = (props) => {
  return (
    <div
      className={
        props.toggleModal ? "modal-wrapper modal-active" : "modal-wrapper"
      }
    >
      <div className="modal-backdrop" onClick={props.handleCloseModal} />
      <div className="btn modal-close" onClick={props.handleCloseModal}>
        <MdClose size="1.5em" />
      </div>
      <div className="modal-box">
        <div className="modal-header">
          <h3>{props.updateId === null ? "Add Task" : "Update Task"}</h3>
          <small className="text-light">
            {props.updateId === null ? "" : props.updateId}
          </small>
        </div>
        <form
          className="form"
          onSubmit={(event) => {
            if (props.updateId !== null) {
              props.handleUpdateTask(event, props.updateId);
            } else {
              props.handleAddTask(event);
            }
          }}
        >
          <div className="label-header">
            <label>Title</label>
            <small>({props.charLeft} characters left)</small>
          </div>
          <input
            className="form-field"
            type="text"
            placeholder="Title"
            value={props.inputTitle}
            onChange={props.handleOnChangeTitle}
            required
          />
          <label>Status</label>
          <select
            className="form-field"
            value={props.inputStatus}
            onChange={props.handleOnChangeStatus}
          >
            <option value="incomplete">Incomplete</option>
            <option value="complete">Complete</option>
          </select>
          <div className="form-action">
            <button
              className="btn btn-secondary"
              onClick={props.handleCloseModal}
            >
              Cancel
            </button>
            <button className="btn" type="submit">
              {props.updateId === null ? "Add Task" : "Update Task"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
