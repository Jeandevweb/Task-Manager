import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import {
  MdDelete,
  MdEdit,
  MdCancel,
  MdOutlineSave,
  MdArrowDropUp,
  MdArrowDropDown,
  MdOutlineMoreVert,
} from "react-icons/md";
import { useTaskItem } from "./../TaskItem/useTaskItem";

const MenuActions = ({
  setTasks,
  tasks,
  task,
  index,
  setIsEditing,
  isEditing,
  newName,
}) => {
  const { deleteTask, editTask, moveTaskUp, moveTaskDown } = useTaskItem(
    setTasks,
    task
  );

  return (
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
                console.log("clcik");
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
              icon={<MdArrowDropUp />}
              onClick={() => moveTaskUp(index, tasks)}
              isDisabled={index === 0}
            >
              Move Up
            </MenuItem>
            <MenuItem
              icon={<MdArrowDropDown />}
              onClick={() => moveTaskDown(index, tasks)}
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
  );
};

export default MenuActions;
