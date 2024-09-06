import { useState } from "react";
import { UseToast } from "../../hooks/useToast";

export const useCreateTask = (tasks, setTasks) => {
  const [newTask, setNewTask] = useState("");
  const { toastInfo } = UseToast();

  //Initial task empty
  const createTask = {
    id: Date.now(),
    name: newTask,
    completed: false,
    subTask: [],
  };

  /**
   * Function to create new task
   * @param event to prevent submit form
   */
  function createNewTask(e) {
    e.preventDefault();
    const insertRandomly = Math.floor(Math.random() * (tasks.length + 1));

    const newTaskArray = [
      ...tasks.slice(0, insertRandomly),
      createTask,
      ...tasks.slice(insertRandomly),
    ];
    if (newTask.trim() === "") {
      toastInfo("Value vide", "top", "warning", 3000);
      return;
    } else {
      setTasks(newTaskArray);
    }
    toastInfo(`${newTask} a été créé`, "top", "success", 3000);
    setNewTask("");
  }

    //Handle change new task
  function handleChangeNewTask(e) {
    setNewTask(e.target.value);
  }
  return {
    createNewTask,
    handleChangeNewTask,
    newTask,
  };
};
