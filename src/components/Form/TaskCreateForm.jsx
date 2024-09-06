import { Button, FormControl, Input } from "@chakra-ui/react";

const TaskCreateForm = ({
  newTaskName,
  handleChangeNewTask,
  createNewTask,
}) => {
  return (
    <>
      <FormControl display="flex" gap="5" padding="10px" margin="20px 0">
        <Input
          type="text"
          placeholder="Add a new task"
          value={newTaskName}
          onChange={handleChangeNewTask}
        />
        <Button type="submit" onClick={() => createNewTask(newTaskName)}>
          Add Task
        </Button>
      </FormControl>
    </>
  );
};

export default TaskCreateForm;
