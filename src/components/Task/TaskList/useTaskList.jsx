export const useTaskList = (tasks, filterTask) => {
  const filteredTasks = tasks?.filter((task) => {
    if (filterTask === "completed") return task.completed;
    if (filterTask === "incomplete") return !task.completed;
    return true;
  });

  return {
    filteredTasks,
  };
};

