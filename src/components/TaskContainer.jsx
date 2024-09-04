import { Box, Button, FormControl, Input, Text } from "@chakra-ui/react";
import { useState } from "react";

const TaskContainer = () => {
  const [newTask, setNewTask] = useState("");
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
      <FormControl  display="flex" >
        <Input
          type="text"
          placeholder="Add a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <Button type="submit">Add Task</Button>
      </FormControl>
    </Box>
  );
};

export default TaskContainer;
