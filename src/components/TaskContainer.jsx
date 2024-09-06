import { Box, List, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import TaskItem from "./TaskItem";
import TaskCreateForm from "./Form/TaskCreateForm";

import TaskControls from "./TaskControls/TaskControls";

const TaskContainer = () => {
  const [tasks, setTasks] = useState([]);
  const [filterTask, setFilterTask] = useState("all");


  const filteredTasks = tasks?.filter((task) => {
    if (filterTask === "completed") return task.completed;
    if (filterTask === "incomplete") return !task.completed;
    return true;
  });

  useEffect(() => {
    console.log("new update");
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
      <Text>{tasks.length === 0 && "Pas de tâches créés"}</Text>
      <Box margin={"20px 0 "}>
        <TaskControls tasks={tasks} setFilterTask={setFilterTask} />
      </Box>

      <List>
        {filteredTasks.map((task, index) => {
          return (
            <TaskItem
              index={index}
              key={task.id + Date.now()}
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
