import {
  Box,
  Button,
  Checkbox,
  FormControl,
  Input,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import TaskItem from "./TaskItem";

const TaskContainer = () => {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const createTask = {
    id: Date.now(),
    name: newTask,
    completed: false,
    subTask: [],
  };
  console.log(tasks);

  /**
   * Function to create new task
   * @param event to prevent submit form
   */
  function createNewTask(e) {
    e.preventDefault();
    if (newTask.trim() !== "") {
      setTasks((prevTask) => {
        return [...prevTask, createTask];
      });
    }
    setNewTask("");
  }

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
      <Text textAlign="center"> Task Manager </Text>
      <FormControl display="flex">
        <Input
          type="text"
          placeholder="Add a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <Button type="submit" onClick={createNewTask}>
          Add Task
        </Button>
      </FormControl>

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
