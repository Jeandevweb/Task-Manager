import { Button, Checkbox, IconButton, Input, ListItem, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useState } from "react";
import {
  MdDelete,
  MdEdit,
  MdCancel,
  MdOutlineSave,
  MdArrowDropUp,
  MdArrowDropDown,
  MdOutlineMoreVert,
} from "react-icons/md";
import { UseToast } from "../hooks/useToast";

const TaskItem = ({ task, tasks, setTasks, index }) => {
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

  /**
   * Function to moveup the current task
   * @param {number} index current index of the task
   */
  function moveTaskUp(index) {
    if (index > 0) {
      const newArrayOfTasks = [...tasks];
      [newArrayOfTasks[index], newArrayOfTasks[index - 1]] = [
        newArrayOfTasks[index - 1],
        newArrayOfTasks[index],
      ];
      setTasks(newArrayOfTasks);
    }
  }

  /**
   * Function to movedown the current task
   * @param {number} index current index of the task
   */
  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const newArrayOfTasks = [...tasks];
      [newArrayOfTasks[index], newArrayOfTasks[index + 1]] = [
        newArrayOfTasks[index + 1],
        newArrayOfTasks[index],
      ];
      setTasks(newArrayOfTasks);
    }
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
          isChecked={task.completed}
          textDecoration={task.completed ? "line-through" : "none"}
          onChange={(e) => {
            toggleTodo(task.id, e.target.checked);
          }}
        >
          {task.name}
        </Checkbox>
      )}
      <Menu>
        <MenuButton as={IconButton} icon={<MdOutlineMoreVert />} ml="2" />
        <MenuList>
          {isEditing ? (
            <>
              <MenuItem icon={<MdCancel />} onClick={() => setIsEditing(false)}>
                Cancel
              </MenuItem>
              <MenuItem
                icon={<MdOutlineSave />}
                onClick={() => {
                  editTask(task.id, newName);
                  setIsEditing(false);
                }}
              >
                Save
              </MenuItem>
            </>
          ) : (
            <>
              <MenuItem
                icon={<MdArrowDropUp />}
                onClick={() => moveTaskUp(index)}
                isDisabled={index === 0}
              >
                Move Up
              </MenuItem>
              <MenuItem
                icon={<MdArrowDropDown />}
                onClick={() => moveTaskDown(index)}
              >
                Move Down
              </MenuItem>
              <MenuItem icon={<MdEdit />} onClick={() => setIsEditing(true)}>
                Edit
              </MenuItem>
              <MenuItem icon={<MdDelete />} onClick={() => deleteTask(task.id)}>
                Delete
              </MenuItem>
            </>
          )}
        </MenuList>
      </Menu>
      {/* {isEditing ? (
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
          <Button
            isDisabled={tasks[0] === index ? true : false}
            onClick={() => moveTaskUp(index)}
          >
            <MdArrowDropUp />
          </Button>
          <Button onClick={() => moveTaskDown(index)}>
            <MdArrowDropDown />
          </Button>
          <Button onClick={() => setIsEditing(true)}>
            <MdEdit />
          </Button>
          <Button onClick={() => deleteTask(task.id)}>
            <MdDelete />
          </Button>
        </>
      )} */}
    </ListItem>
  );
};

export default TaskItem;
