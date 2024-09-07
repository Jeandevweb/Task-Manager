import { Box, List } from "@chakra-ui/react";
import TaskItem from "../TaskItem/TaskItem";
import { useContext } from "react";
import { TaskContext } from "../../../context/TaskProvider";

const Tasklist = () => {
  const { tasks, filterTask, filteredTasks } = useContext(TaskContext);

  return (
    <List>
      {filteredTasks(tasks, filterTask).map((task, index) => {
        return (
          <Box key={index} margin="10px 0">
            <TaskItem index={index} key={task.id + Date.now()} task={task} />
          </Box>
        );
      })}
    </List>
  );
};

export default Tasklist;
