import { useState } from "react";

export const useTaskItem = (setTasks, task) => {
  const [newName, setNewName] = useState(task.name);


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
    moveTaskUp,
    moveTaskDown,
    newName,
    setNewName,
  };
};
