import { Box, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import TaskCreateForm from "./Form/TaskCreateForm";

import TaskControls from "./TaskControls/TaskControls";
import Tasklist from "./Task/TaskList/Tasklist";

const TaskContainer = () => {
  const [tasks, setTasks] = useState([]);
  const [filterTask, setFilterTask] = useState("all");

  useEffect(() => {
    if (!tasks) return;
  }, [tasks]);

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
      <Box margin={"20px 0 "}>
        <TaskControls
          tasks={tasks}
          setFilterTask={setFilterTask}
          setTasks={setTasks}
        />
      </Box>
      <Text>{tasks.length === 0 && "Pas de tâches créés"}</Text>

      <Tasklist tasks={tasks} setTasks={setTasks} filterTask={filterTask} />
    </Box>
  );
};

export default TaskContainer;
