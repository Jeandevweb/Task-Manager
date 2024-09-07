import { Box, List } from "@chakra-ui/react";
import TaskItem from "../TaskItem/TaskItem";

const Tasklist = ({
  tasks,
  setTasks,
  filterTask,
  createSubTask,
}) => {

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

  return (
    <List>
      {filteredTasks(tasks, filterTask).map((task, index) => {
        return (
          <Box key={index} margin="10px 0">
            <TaskItem
              index={index}
              key={task.id + Date.now()}
              task={task}
              tasks={tasks}
              setTasks={setTasks}
              createSubTask={createSubTask}
            />
          </Box>
        );
      })}
    </List>
  );
};

export default Tasklist;
