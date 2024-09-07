import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";

import * as Icons from "../../../icons/reactIcons";

import { editTask, deleteTask } from "../../../constants/crudFunctions";
import { moveTaskUp, moveTaskDown } from "../../../constants/moveTaskFunctions";
import { useContext } from "react";
import { TaskContext } from "../../../context/TaskProvider";

const MenuActions = ({
  task,
  index,
  setIsEditing,
  isEditing,
  newName,
  createSubTask,
}) => {
  
  const { setTasks, tasks } = useContext(TaskContext);

  return (
    <>
      <Menu>
        <MenuButton
          as={IconButton}
          icon={<Icons.MdOutlineMoreVert />}
          bg="#34495e"
          color="white"
          ml="2"
        />
        <MenuList color="black" fontFamily={"helvetica"}>
          {isEditing ? (
            <>
              <MenuItem
                icon={<Icons.MdCancel />}
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </MenuItem>
              <MenuItem
                icon={<Icons.MdOutlineSave />}
                onClick={() => {
                  editTask(task.id, newName, tasks, setTasks);
                  setIsEditing(false);
                }}
              >
                Save
              </MenuItem>
            </>
          ) : (
            <>
              <MenuItem
                icon={<Icons.MdArrowDropUp />}
                onClick={() => moveTaskUp(index, tasks, setTasks)}
                isDisabled={index === 0}
              >
                Move Task Up
              </MenuItem>
              <MenuItem
                icon={<Icons.MdArrowDropDown />}
                onClick={() => moveTaskDown(index, tasks, setTasks)}
              >
                Move Task Down
              </MenuItem>
              <MenuItem
                icon={<Icons.MdEdit />}
                onClick={() => setIsEditing(true)}
              >
                Edit Task
              </MenuItem>
              <MenuItem
                icon={<Icons.MdDelete />}
                onClick={() => deleteTask(task.id, tasks, setTasks)}
              >
                Delete Task
              </MenuItem>
              <MenuItem
                icon={<Icons.MdAdd />}
                onClick={() => createSubTask(task.id)}
              >
                Add SubTask
              </MenuItem>
            </>
          )}
        </MenuList>
      </Menu>
    </>
  );
};

export default MenuActions;
