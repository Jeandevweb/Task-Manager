import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";

import * as Icons from "../../../icons/reactIcons";

import { editTask, deleteTask } from "./constants/crudFunctions";
import { moveTaskUp, moveTaskDown } from "./constants/moveTaskFunctions";
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

  /**
   * Editing tasks
   */
  const handleEditTask = () => {
    editTask(task.id, newName, tasks, setTasks);
    setIsEditing(false);
  };

  /**
   * Delete tasks
   */
  const handleDeleteTask = () => {
    deleteTask(task.id, tasks, setTasks);
  };

  /**
   * Create Subtask tasks
   */
  const handleCreateSubtask = () => {
    createSubTask(task.id);
  };

  /**
   * Move tasks Up
   */
  const handleMoveTaskUp = () => {
    moveTaskUp(index, tasks, setTasks);
  };

  /**
   * Move tasks Down
   */
  const handleMoveTaskDown = () => {
    moveTaskDown(index, tasks, setTasks);
  };

  return (
    <>
      <Menu>
        <MenuButton
          as={IconButton}
          icon={<Icons.MdOutlineMenu />}
          backgroundColor="darkgoldenrod"
          color="white"
          size="sm"
          isDisabled={filterTask === "completed" || task.completed}
        />
        <MenuList color="black" fontFamily={"helvetica"}>
          {isEditing ? (
            <>
              <MenuItem icon={<Icons.MdOutlineSave />} onClick={handleEditTask}>
                Sauvegarder
              </MenuItem>
              <MenuItem
                icon={<Icons.MdCancel />}
                onClick={() => setIsEditing(false)}
              >
                Annuler
              </MenuItem>
            </>
          ) : (
            <>
              <MenuItem
                icon={<Icons.MdArrowDropUp />}
                onClick={handleMoveTaskUp}
                isDisabled={index === 0}
              >
                Déplacer vers le haut
              </MenuItem>
              <MenuItem
                icon={<Icons.MdArrowDropDown />}
                onClick={handleMoveTaskDown}
              >
                Déplacer vers le bas
              </MenuItem>
              <MenuItem
                icon={<Icons.MdEdit />}
                onClick={() => setIsEditing(true)}
              >
                Éditer
              </MenuItem>
              <MenuItem icon={<Icons.MdDelete />} onClick={handleDeleteTask}>
                Supprimer
              </MenuItem>
              <MenuItem icon={<Icons.MdAdd />} onClick={handleCreateSubtask}>
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
