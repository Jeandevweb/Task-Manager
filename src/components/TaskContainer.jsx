import { Box, Button, Input, List } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import TaskItem from "./TaskItem";
import TaskCreateForm from "./Form/TaskCreateForm";
import TaskFilterMenu from "./TaskFilterMenu";

import { UseToast } from "../hooks/useToast";

const TaskContainer = () => {
  const [tasks, setTasks] = useState([]);
  const [filterTask, setFilterTask] = useState("all");

  const { toastInfo } = UseToast();

  const filteredTasks = tasks?.filter((task) => {
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

  /**
   * Function to upload new tasks
   * @param {event} element list of tasks created
   */
  const jsonFileUpload = (e) => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = (e) => {
      const data = JSON.parse(e.target.result);
      setTasks([...tasks, ...data]);
      if (data.length === 0) {
        toastInfo("Votre fichier téléchargé est vide", "top", "warning", 3000);
      } else {
        toastInfo("Fichier télécharger avec succès", "top", "success", 3000);
      }
    };
    let resetFile = document.querySelector(".file");
    resetFile.value = "";
  };

  useEffect(() => {
    console.log("new update");
  }, [tasks]);

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

      <Box margin={"20px 0 "}>
        <TaskFilterMenu tasks={tasks} setFilterTask={setFilterTask} />
        <Button onClick={() => downloadJsonFile(tasks)}>Download task</Button>
        <Button onClick={() => document.querySelector(".file").click()}>
          {" "}
          Télécharger un fichier json
        </Button>
        <Input
          display="none"
          type="file"
          accept=".json"
          className="file"
          onChange={jsonFileUpload}
        />
      </Box>

       {tasks.length === 0 && "Pas de tâches créés"}
      <List>
        {filteredTasks.map((task, index) => {
          return (
            <TaskItem
              index={index}
              key={task.id + Date.now()}
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
