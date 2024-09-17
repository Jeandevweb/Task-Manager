import { createContext, useEffect, useState } from "react";

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

    useEffect(() => {
      if (!tasks) return;
      localStorage.setItem("ITEMS", JSON.stringify(tasks));
    }, [tasks]);

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
