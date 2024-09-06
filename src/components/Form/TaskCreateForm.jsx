import { Button, FormControl, Input, Text } from "@chakra-ui/react";
import { useCreateTask } from "../Form/useCreateTask";

const TaskCreateForm = ({ tasks, setTasks }) => {
  const { createNewTask, handleChangeNewTask, newTask } = useCreateTask(
    tasks,
    setTasks
  );

  return (
    <>
      <Text textAlign="center"> Task Manager </Text>
      <FormControl display="flex">
        <Input
          type="text"
          placeholder="Add a new task"
          value={newTask}
          onChange={handleChangeNewTask}
        />
        <Button type="submit" onClick={createNewTask}>
          Add Task
        </Button>
      </FormControl>
    </>
  );
};

export default TaskCreateForm;
