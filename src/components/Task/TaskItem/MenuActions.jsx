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
  
  const { setTasks, tasks, filterTask } = useContext(TaskContext);

  return (
    <>
      <Menu>
        <MenuButton
          as={IconButton}
          icon={<Icons.MdOutlineMoreVert />}
          bg="#34495e"
          color="white"
          ml="2"
          isDisabled={filterTask === "completed"}
        />
        <MenuList color="black" fontFamily={"helvetica"}>
          {isEditing ? (
            <>
              <MenuItem
                icon={<Icons.MdCancel />}
                onClick={() => setIsEditing(false)}
              >
                Annuler
              </MenuItem>
              <MenuItem
                icon={<Icons.MdOutlineSave />}
                onClick={() => {
                  editTask(task.id, newName, tasks, setTasks);
                  setIsEditing(false);
                }}
              >
                Sauvegarder
              </MenuItem>
            </>
          ) : (
            <>
              <MenuItem
                icon={<Icons.MdArrowDropUp />}
                onClick={() => moveTaskUp(index, tasks, setTasks)}
                isDisabled={index === 0}
              >
                Déplacer vers le haut
              </MenuItem>
              <MenuItem
                icon={<Icons.MdArrowDropDown />}
                onClick={() => moveTaskDown(index, tasks, setTasks)}
              >
                Déplacer vers le bas
              </MenuItem>
              <MenuItem
                icon={<Icons.MdEdit />}
                onClick={() => setIsEditing(true)}
              >
                Éditer
              </MenuItem>
              <MenuItem
                icon={<Icons.MdDelete />}
                onClick={() => deleteTask(task.id, tasks, setTasks)}
              >
                Supprimer
              </MenuItem>
              <MenuItem
                icon={<Icons.MdAdd />}
                onClick={() => createSubTask(task.id)}
              >
                Ajouter une sous-tâche
              </MenuItem>
            </>
          )}
        </MenuList>
      </Menu>
    </>
  );
};

export default MenuActions;
