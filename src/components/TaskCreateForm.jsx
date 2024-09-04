import { Button, FormControl, Input, Text } from "@chakra-ui/react";
import { useState } from "react";

import { UseToast } from "../hooks/useToast";

const TaskCreateForm = ({ setTasks }) => {
    const [newTask, setNewTask] = useState("");
    const {toastInfo} = UseToast()

  const createTask = {
    id: Date.now(),
    name: newTask,
    completed: false,
    subTask: [],
  };

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
      toastInfo(`${newTask} a été créé`, "top", "success", 3000);
    setNewTask("");
  }
  return (
    <>
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
    </>
  );
};

export default TaskCreateForm;
