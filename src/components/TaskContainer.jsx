import {
  Box,
  Button,
  Checkbox,
  FormControl,
  IconButton,
  Input,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { MdDelete } from "react-icons/md";

const TaskContainer = () => {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const createTask = {
    id: Date.now(),
    name: newTask,
    completed: false,
    subTask: [],
    };
    console.log(tasks)

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

  /**
   * Function to create new task
   * @param id current id of the task
   */
  function deleteTask(id) {
    setTasks((prevTask) => {
      return prevTask.filter((task) => task.id !== id);
    });
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
            <ListItem key={task.id}>
              <Checkbox>{task.name}</Checkbox>
              <Button onClick={() => deleteTask(task.id)}>
                <MdDelete />
              </Button>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default TaskContainer;
