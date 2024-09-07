/**
 * Function to edit current task
 * @param {number} id current id of the task
 * @param {string} newname enter by the user
 * @param {array} tasks current tasks
 * @param {function} setTasks
 */
export function editTask(id, name, tasks, setter) {
  const updateTask = (taskList) => {
    return taskList.map((task) => {
      if (task.id === id) {
        return { ...task, name: name };
      }

      if (task.subTasks && task.subTasks.length > 0) {
        return { ...task, subTasks: updateTask(task.subTasks) };
      }

      return task;
    });
  };
  const updatedTasks = updateTask(tasks);
  setter(updatedTasks);
}

/**
 * Function to delete current task
 * @param {number} id current id of the task
 * @param {array} tasks current tasks
 * @param {function} setTasks
 */
export function deleteTask(id, tasks, setter) {
  const deleteTask = (taskList) => {
    return taskList
      .filter((task) => task.id !== id)
      .map((task) => {
        if (task.subTasks && task.subTasks.length > 0) {
          return { ...task, subTasks: deleteTask(task.subTasks) };
        }
        return task;
      });
  };

  const updatedTasks = deleteTask(tasks);
  setter(updatedTasks);
}

/**
 * Function to toggle if task complete or not
 * @param {number} id current id of the task
 * @param {boolean} completed toggle completed todo
 * @param {array} tasks current tasks
 * @param {function} setTasks
 * @param {function} toastinfo to display information
 */
export function toggleTodo(id, completed, tasks, setter, toastInfo) {
  const toggleTask = (taskList) => {
    return taskList.map((task) => {
      if (task.id === id) {
        if (task.subTasks && task.subTasks.length > 0) {
          if (completed) {
            const allSubTasksCompleted = task.subTasks.every(
              (subTask) => subTask.completed
            );
            if (!allSubTasksCompleted) {
              toastInfo(
                `Impossible de marquer ${task.name} comme complétée, car toutes les sous-tâches ne sont pas terminées`,
                "top",
                "error",
                3000
              );
              return task;
            } else {
              toastInfo(`${task.name} a été complété`, "top", "success", 3000);
            }
          }
        }
        return { ...task, completed };
      }

      if (task.subTasks && task.subTasks.length > 0) {
        const updatedSubTasks = toggleTask(task.subTasks);
        return { ...task, subTasks: updatedSubTasks };
      }
      return task;
    });
  };

  const updatedTasks = toggleTask(tasks);
  setter(updatedTasks);

  const task = tasks.find((task) => task.id === id);
  if (completed && task && task.completed) {
    toastInfo(`${task.name} a été complété`, "top", "success", 3000);
  } else if (task.subTasks.length === 0 && !task.completed) {
    toastInfo(`${task.name} a été complété`, "top", "success", 3000);
  }
}
