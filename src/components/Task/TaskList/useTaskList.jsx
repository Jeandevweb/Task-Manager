export const useTaskList = () => {
  const filteredTasks = (tasks, filterTask) =>
    tasks?.filter((task) => {
      if (filterTask === "completed") return task.completed;
      if (filterTask === "incomplete") return !task.completed;
      return true;
    });

  return {
    filteredTasks,
  };
};
