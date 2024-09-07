import { Button, FormControl, Input } from "@chakra-ui/react";
import { useContext } from "react";
import { TaskContext } from "../../context/TaskProvider";
import { useCreateTask } from "./useCreateTask";

const TaskCreateForm = () => {
  const { newTaskName } = useContext(TaskContext);
  const { createNewTask, handleChangeNewTask } = useCreateTask();


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
