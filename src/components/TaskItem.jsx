import { Button, Checkbox, Input, ListItem } from "@chakra-ui/react";
import { useState } from "react";
import { MdDelete, MdEdit, MdCancel, MdOutlineSave } from "react-icons/md";
import { UseToast } from "../hooks/useToast";

const TaskItem = ({ task, tasks, setTasks }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(task.name);
  const { toastInfo } = UseToast();

  /**
   * Function to create new task
   * @param {number} id current id of the task
   */
  function deleteTask(id) {
    setTasks((prevTask) => {
      return prevTask.filter((task) => task.id !== id);
    });
  }

  /**
   * Function to edit current task
   * @param {number} id current id of the task
   * @param {string} newname enter by the user
   */
  function editTask(id, newName) {
    const editedTaskList = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, name: newName };
      }
      return task;
    });
    setTasks(editedTaskList);
    setIsEditing(false);
  }

  /**
   * Function to toggle if task complete or not
   * @param {number} id current id of the task
   * @param {boolean} completed toggle completed todo
   */
  function toggleTodo(id, completed) {
    setTasks((prevTask) => {
      return prevTask.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed,
          };
        }
        return todo;
      });
    });
    if (completed)
      toastInfo(`${task.name} a été complété`, "top", "success", 3000);
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
        <Checkbox
          onChange={(e) => {
            toggleTodo(task.id, e.target.checked);
          }}
        >
          {task.name}
        </Checkbox>
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
        <>
          <Button onClick={() => setIsEditing(true)}>
            <MdEdit />
          </Button>
          <Button onClick={() => deleteTask(task.id)}>
            <MdDelete />
          </Button>
        </>
      )}
    </ListItem>
  );
};

export default TaskItem;
