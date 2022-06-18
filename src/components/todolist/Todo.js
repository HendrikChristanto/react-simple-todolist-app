import React from "react";
import { Tooltip, IconButton } from "@mui/material";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";

const Todo = (props) => {
  return (
    <div className="todo">
      <span className="todo-title">{props.title}</span>
      <div className="todo-action">
        {props.status === "complete" ? (
          <Tooltip title="Add to Incomplete">
            <IconButton onClick={() => props.handleCompleteTask(props.id)}>
              <RemoveCircleOutlineOutlinedIcon className="icon" />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Add to Complete">
            <IconButton onClick={() => props.handleCompleteTask(props.id)}>
              <CheckCircleOutlinedIcon className="icon" />
            </IconButton>
          </Tooltip>
        )}
        <Tooltip title="Delete">
          <IconButton onClick={() => props.handleDeleteTask(props.id)}>
            <DeleteOutlinedIcon className="icon" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Edit">
          <IconButton onClick={() => props.handleSetUpdateModal(props.id)}>
            <EditOutlinedIcon className="icon" />
          </IconButton>
        </Tooltip>
      </div>
    </div>
  );
};

export default Todo;
