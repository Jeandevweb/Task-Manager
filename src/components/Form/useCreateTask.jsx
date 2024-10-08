import { useContext } from "react";
import { UseToast } from "../../hooks/useToast";
import { TaskContext } from "../../context/TaskProvider";

export const useCreateTask = () => {
  const { toastInfo } = UseToast();

  const { tasks, setTasks, setNewTask } = useContext(TaskContext);

  /**
   * Function to create new task
   * @param event to prevent submit form
   */

  function createNewTask(name, parentId = null) {
    if (name.trim() === "") {
      toastInfo("Value vide", "top", "warning", 3000);
      return;
    }

    // Création d'une nouvelle tâche
    const createTask = {
      id: Date.now(),
      name,
      completed: false,
      subTasks: [],
    };

    // Insérer aléatoirement dans le tableau des tâches
    const insertRandomly = Math.floor(Math.random() * (tasks.length + 1));
    const newTaskArray = [
      ...tasks.slice(0, insertRandomly),
      createTask,
      ...tasks.slice(insertRandomly),
    ];

    const addSubTask = (t, parentId) =>
      t.map((task) =>
        task.id === parentId
          ? { ...task, subTasks: [...task.subTasks, createTask] }
          : { ...task, subTasks: addSubTask(task.subTasks, parentId) }
      );
    setTasks((prevTasks) =>
      parentId ? addSubTask(prevTasks, parentId) : newTaskArray
    );
    setNewTask("");
    toastInfo(`${name} a été créé`, "top", "success", 3000);
  }

  //Handle change new task
  function handleChangeNewTask(e) {
    setNewTask(e.target.value);
  }

  const createSubTask = (id) => {
    const subTaskName = prompt("Entrez le nom de la sous tâche");
    if (subTaskName) {
      createNewTask(subTaskName, id);
      setNewTask("");
    }
  };

  return {
    createNewTask,
    handleChangeNewTask,
    createSubTask,
  };
};
