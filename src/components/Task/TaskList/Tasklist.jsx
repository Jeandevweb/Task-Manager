import { Box, List } from "@chakra-ui/react";
import TaskItem from "../TaskItem/TaskItem";
import { useTaskList } from "./useTaskList";

const Tasklist = ({
  tasks,
  setTasks,
  filterTask,
  createSubTask,
}) => {
  const { filteredTasks } = useTaskList();

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
