import {
  Button,
  Checkbox,
  Input,
  ListItem,
} from "@chakra-ui/react";
import { useState } from "react";
import { MdDelete, MdEdit, MdCancel, MdOutlineSave } from "react-icons/md";


const TaskItem = ({task, tasks, setTasks}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(task.name);

  /**
   * Function to create new task
   * @param id current id of the task
   */
  function deleteTask(id) {
    setTasks((prevTask) => {
      return prevTask.filter((task) => task.id !== id);
    });
  }

  /**
   * Function to edit current task
   * @param id current id of the task
   * @param newname enter by the user
   */
  function editTask(id, newName) {
    //partie a faire en premier, ensuite rajouter les sous taches
    const editedTaskList = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, name: newName };
      }
      return task;
    });
    setTasks(editedTaskList);
    setIsEditing(false);
  }
  return (
    <ListItem key={task.id} display="flex">
      {isEditing ? (
        <Input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
      ) : (
        <Checkbox>{task.name}</Checkbox>
      )}
      {isEditing ? (
        <>
          <Button onClick={() => setIsEditing(false)}>
            <MdCancel />
          </Button>
          <Button onClick={() => editTask(task.id, newName)}>
            <MdOutlineSave />
          </Button>
        </>
      ) : (
        <Button onClick={() => setIsEditing(true)}>
          <MdEdit />
        </Button>
      )}

      <Button onClick={() => deleteTask(task.id)}>
        <MdDelete />
      </Button>
    </ListItem>
  );
};

export default TaskItem;
