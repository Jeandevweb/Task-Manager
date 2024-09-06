import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";

import * as Icons from "../../../icons/reactIcons";
import { useTaskItem } from "./../TaskItem/useTaskItem";

const MenuActions = ({
  setTasks,
  tasks,
  task,
  index,
  setIsEditing,
  isEditing,
  newName,
  createSubTask,
}) => {
  const { deleteTask, editTask, moveTaskUp, moveTaskDown } =
    useTaskItem(setTasks, task);

  return (
    <>
      <Menu>
        <MenuButton as={IconButton} icon={<Icons.MdOutlineMoreVert />} ml="2" />
        <MenuList>
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
                  editTask(task.id, newName, tasks);
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
                onClick={() => moveTaskUp(index, tasks)}
                isDisabled={index === 0}
              >
                Move Task Up
              </MenuItem>
              <MenuItem
                icon={<Icons.MdArrowDropDown />}
                onClick={() => moveTaskDown(index, tasks)}
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
                onClick={() => deleteTask(task.id)}
              >
                Delete Task
              </MenuItem>
              <MenuItem
                icon={<Icons.MdDelete />}
                onClick={() => createSubTask(task.id)}
              >
                addSubTask
              </MenuItem>
            </>
          )}
        </MenuList>
      </Menu>
    </>
  );
};

export default MenuActions;
