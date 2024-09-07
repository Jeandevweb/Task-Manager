import { useState } from "react";
import { UseToast } from "../../../hooks/useToast";

export const useTaskItem = (setTasks, task) => {
  const [newName, setNewName] = useState(task.name);

  const { toastInfo } = UseToast();

  /**
   * Function to create new task
   * @param {number} id current id of the task
   */
  function deleteTask(id) {
    setTasks((prevTask) => {
      return prevTask.filter((task) => task.id !== id);
    });
  }
  


  /**
   * Function to toggle if task complete or not
   * @param {number} id current id of the task
   * @param {boolean} completed toggle completed todo
   */
  function toggleTodo(id, completed) {
    setTasks((prevTask) => {
      return prevTask.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed,
          };
        }
        return todo;
      });
    });
    if (completed)
      toastInfo(`${task.name} a été complété`, "top", "success", 3000);
  }

  /**
   * Function to moveup the current task
   * @param {number} index current index of the task
   */
  function moveTaskUp(index, element) {
    if (index > 0) {
      const newArrayOfTasks = [...element];
      [newArrayOfTasks[index], newArrayOfTasks[index - 1]] = [
        newArrayOfTasks[index - 1],
        newArrayOfTasks[index],
      ];
      setTasks(newArrayOfTasks);
    }
  }

  /**
   * Function to movedown the current task
   * @param {number} index current index of the task
   */
  function moveTaskDown(index, element) {
    if (index < element.length - 1) {
      const newArrayOfTasks = [...element];
      [newArrayOfTasks[index], newArrayOfTasks[index + 1]] = [
        newArrayOfTasks[index + 1],
        newArrayOfTasks[index],
      ];
      setTasks(newArrayOfTasks);
    }
  }
  return {
    deleteTask,
    toggleTodo,
    moveTaskUp,
    moveTaskDown,
    newName,
    setNewName,
  };
};
