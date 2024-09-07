import { createContext, useState } from "react";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  // tasks principal
  const [tasks, setTasks] = useState(() => {
    const local = localStorage.getItem("ITEMS");
    if (local === null) return [];

    return JSON.parse(local);
  });

  //filtering task
  const [filterTask, setFilterTask] = useState("all");

  //newtaskname for subtask
  const [newTaskName, setNewTask] = useState("");

  /**
   * Filtering tasks if completed or not
   * @params {array} current tasks
   * @params {string} name of filter
   */
  const filteredTasks = (tasks, filterTask) =>
    tasks?.filter((task) => {
      if (filterTask === "completed") return task.completed;
      if (filterTask === "incomplete") return !task.completed;
      return true;
    });

  const value = {
    tasks,
    setTasks,
    filterTask,
    setFilterTask,
    newTaskName,
    setNewTask,
    filteredTasks,
  };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};
