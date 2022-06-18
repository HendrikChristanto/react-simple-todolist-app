import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { nanoid } from "nanoid";

import "react-toastify/dist/ReactToastify.css";
import "./styles.css";

import Header from "./components/header/Header";
import Search from "./components/search/Search";
import TodoList from "./components/todolist/TodoList";
import Modal from "./components/modal/Modal";
import Footer from "./components/footer/Footer";

export default function App() {
  const [tasks, setTasks] = useState([
    {
      id: nanoid(),
      title: "First Task!",
      status: "complete"
    },
    {
      id: nanoid(),
      title: "Second Task!",
      status: "incomplete"
    },
    {
      id: nanoid(),
      title: "Third Task!",
      status: "incomplete"
    },
    {
      id: nanoid(),
      title: "Forth Task!",
      status: "incomplete"
    }
  ]);

  const [searchText, setSearchText] = useState("");
  const [toggleModal, setToggleModal] = useState(false);

  const maxChar = 30;
  const [charLeft, setCharLeft] = useState(maxChar);
  const [updateId, setUpdateId] = useState(null);
  const [inputTitle, setInputTitle] = useState("");
  const [inputStatus, setInputStatus] = useState("incomplete");

  const clearAll = () => {
    setCharLeft(maxChar);
    setInputTitle("");
    setInputStatus("incomplete");
    setUpdateId(null);
  };

  const handleCloseModal = () => {
    setToggleModal(false);
    clearAll();
  };

  const handleOpenModal = () => {
    setToggleModal(true);
  };

  const handleOnChangeTitle = (event) => {
    const newValue = event.target.value;
    const newLength = newValue.length;
    if (newLength > 30) {
      setInputTitle(inputTitle);
    } else {
      setInputTitle(newValue);
      setCharLeft(maxChar - newLength);
    }
  };

  const handleOnChangeStatus = (event) => {
    const newValue = event.target.value;
    setInputStatus(newValue);
  };

  const handleAddTask = (event) => {
    event.preventDefault();
    const newTask = {
      id: nanoid(),
      title: inputTitle,
      status: inputStatus
    };
    const newTasks = [...tasks, newTask];
    setTasks(newTasks);
    handleCloseModal();
    toast.dark("New task has been added!");
  };

  const handleDeleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
    toast.dark("Delete Successfully!");
  };

  const handleCompleteTask = (id) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        if (task.status === "complete") {
          task.status = "incomplete";
        } else {
          task.status = "complete";
        }
      }
      return task;
    });
    setTasks(newTasks);
    toast.dark("Update Successfully!");
  };

  const handleSetUpdateModal = (id) => {
    const task = tasks.find((task) => {
      return task.id === id;
    });
    if (task) {
      setCharLeft(maxChar - task.title.length);
      setInputTitle(task.title);
      setInputStatus(task.status);
      setUpdateId(task.id);
      handleOpenModal();
    }
  };

  const handleUpdateTask = (event, id) => {
    event.preventDefault();
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        const newTask = {
          id: id,
          title: inputTitle,
          status: inputStatus
        };
        return newTask;
      }
      return task;
    });
    setTasks(newTasks);
    handleCloseModal();
    toast.dark("Update Successfully!");
  };

  return (
    <>
      <Header handleOpenModal={handleOpenModal} />
      <Search searchText={searchText} handleSearchText={setSearchText} />
      <TodoList
        completeTask={tasks.filter(
          (task) =>
            task.title.toLowerCase().includes(searchText.toLowerCase()) &&
            task.status === "complete"
        )}
        incompleteTask={tasks.filter(
          (task) =>
            task.title.toLowerCase().includes(searchText.toLowerCase()) &&
            task.status === "incomplete"
        )}
        handleDeleteTask={handleDeleteTask}
        handleCompleteTask={handleCompleteTask}
        handleSetUpdateModal={handleSetUpdateModal}
      />
      <Footer />
      <Modal
        toggleModal={toggleModal}
        handleCloseModal={handleCloseModal}
        inputTitle={inputTitle}
        inputStatus={inputStatus}
        charLeft={charLeft}
        updateId={updateId}
        handleOnChangeTitle={handleOnChangeTitle}
        handleOnChangeStatus={handleOnChangeStatus}
        handleAddTask={handleAddTask}
        handleUpdateTask={handleUpdateTask}
      />
      <ToastContainer position="top-right" autoClose={2500} />
    </>
  );
}
