import {
  Box,
  List,
} from "@chakra-ui/react";
import { useState } from "react";
import TaskItem from "./TaskItem";
import TaskCreateForm from "./TaskCreateForm";

const TaskContainer = () => {
  const [tasks, setTasks] = useState([]);

  return (
    <Box
      width="50%"
      border="1px solid"
      height="80%"
      margin="0 auto"
      position="fixed"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%)"
    >
      <TaskCreateForm tasks={tasks} setTasks={setTasks} />

      <List>
        {tasks.map((task) => {
          return (
            <TaskItem
              key={task.id}
              task={task}
              tasks={tasks}
              setTasks={setTasks}
            />
          );
        })}
      </List>
    </Box>
  );
};

export default TaskContainer;
