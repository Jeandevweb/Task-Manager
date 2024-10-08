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
          bg="white"
          color="black"
          borderRadius="3px"
          borderBottom="4px solid #dcdcdd"
          padding="20px"
          placeholder="Ajoutez une tâche"
          value={newTaskName}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              createNewTask(newTaskName);
            }
          }}
        />
        <Button
          fontSize="sm"
          padding="20px"
          borderRadius="3px"
          type="submit"
          colorScheme="blue"
          onClick={() => createNewTask(newTaskName)}
        >
          Ajoutez une tâche
        </Button>
      </FormControl>
    </>
  );
};

export default TaskCreateForm;
