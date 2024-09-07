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
