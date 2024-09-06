import {
  Box,
  Button,
  List,
} from "@chakra-ui/react";
import { useState } from "react";
import TaskItem from "./TaskItem";
import TaskCreateForm from "./TaskCreateForm";
import TaskFilterMenu from "./TaskFilterMenu";

import { UseToast } from "../hooks/useToast";

const TaskContainer = () => {
  const [tasks, setTasks] = useState([]);
  const [filterTask, setFilterTask] = useState("all");

  const { toastInfo } = UseToast();

  const filteredTasks = tasks.filter((task) => {
    if (filterTask === "completed") return task.completed;
    if (filterTask === "incomplete") return !task.completed;
    return true;
  });

  /**
   * Function to download the tasks
   * @param {object} element list of tasks created
   */
  const downloadJsonFile = (element) => {
    if (element.length === 0) {
      toastInfo(
        "la liste est vide, il n'y a rien à télécharger",
        "top",
        "warning",
        3000
      );
      return;
    }
    const elementToDownload = JSON.stringify(element);
    let blob = new Blob([elementToDownload], { type: "application/json" });
    let url = URL.createObjectURL(blob);
    let link = document.createElement("a");
    link.download = "tasks.json";
    link.href = url;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <Box
      width="50%"
      border="1px solid"
      height="80%"
      margin="0 auto"
      position="fixed"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%)"
    >
      <TaskCreateForm tasks={tasks} setTasks={setTasks} />
      <TaskFilterMenu tasks={tasks} setFilterTask={setFilterTask} />
      <Button onClick={() => downloadJsonFile(tasks)}>Download task</Button>
      <List>
        {filteredTasks.map((task, index) => {
          return (
            <TaskItem
              index={index}
              key={task.id}
              task={task}
              tasks={tasks}
              setTasks={setTasks}
            />
          );
        })}
      </List>
    </Box>
  );
};

export default TaskContainer;
