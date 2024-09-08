import { Button, FormControl, Input } from "@chakra-ui/react";
import { useContext } from "react";
import { TaskContext } from "../../context/TaskProvider";
import { useCreateTask } from "./useCreateTask";

const TaskCreateForm = () => {
  const { newTaskName, setNewTask } = useContext(TaskContext);
  const { createNewTask } = useCreateTask();

  return (
    <>
      <FormControl display="flex" gap="5" padding="10px" margin="20px 0">
        <Input
          type="text"
          placeholder="Ajoutez une tâche"
          value={newTaskName}
          onChange={(e)=>setNewTask(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              createNewTask(newTaskName);
            }
          }}
        />
        <Button
          fontSize="sm"
          type="submit"
          onClick={() => createNewTask(newTaskName)}
        >
          Ajoutez une tâche
        </Button>
      </FormControl>
    </>
  );
};

export default TaskCreateForm;
