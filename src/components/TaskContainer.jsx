import {
  Box,
  List,
} from "@chakra-ui/react";
import { useState } from "react";
import TaskItem from "./TaskItem";
import TaskCreateForm from "./TaskCreateForm";
import TaskFilterMenu from "./TaskFilterMenu";

const TaskContainer = () => {
  const [tasks, setTasks] = useState([]);
  const [filterTask, setFilterTask] = useState("all");

    const filteredTasks = tasks.filter((task) => {
      if (filterTask === "completed") return task.completed;
      if (filterTask === "incomplete") return !task.completed;
      return true; 
    });

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
      <TaskFilterMenu tasks={tasks} setFilterTask={setFilterTask} />

      <List>
        {filteredTasks.map((task, index) => {
          return (
            <TaskItem
              index={index}
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
