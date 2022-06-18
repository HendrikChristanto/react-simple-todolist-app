import React from "react";

import "./todolist.css";

import Todo from "./Todo";

const TodoList = (props) => {
  return (
    <section className="todolist">
      <div className="container todolist__container">
        <h3>Incomplete Task</h3>
        {props.incompleteTask.length > 0 ? (
          props.incompleteTask.map((task) => {
            return (
              <Todo
                key={task.id}
                id={task.id}
                title={task.title}
                status={task.status}
                handleDeleteTask={props.handleDeleteTask}
                handleCompleteTask={props.handleCompleteTask}
                handleSetUpdateModal={props.handleSetUpdateModal}
              />
            );
          })
        ) : (
          <span className="text-light">No Tasks available.</span>
        )}
        <h3>Complete Task</h3>
        {props.completeTask.length > 0 ? (
          props.completeTask.map((task) => {
            return (
              <Todo
                key={task.id}
                id={task.id}
                title={task.title}
                status={task.status}
                handleDeleteTask={props.handleDeleteTask}
                handleCompleteTask={props.handleCompleteTask}
                handleSetUpdateModal={props.handleSetUpdateModal}
              />
            );
          })
        ) : (
          <span className="text-light">No Tasks available.</span>
        )}
      </div>
    </section>
  );
};

export default TodoList;
