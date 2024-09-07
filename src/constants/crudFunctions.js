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
