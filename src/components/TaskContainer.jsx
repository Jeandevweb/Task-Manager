import { Box, Divider, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import TaskCreateForm from "./Form/TaskCreateForm";

import TaskControls from "./TaskControls/TaskControls";
import Tasklist from "./Task/TaskList/Tasklist";
import { useCreateTask } from "./Form/useCreateTask";

const TaskContainer = () => {
  const [tasks, setTasks] = useState(() => {
    const local = localStorage.getItem("ITEMS");
    if (local === null) return [];

    return JSON.parse(local);
  });
  const [filterTask, setFilterTask] = useState("all");

  const { createNewTask, handleChangeNewTask, newTaskName, createSubTask } =
    useCreateTask(tasks, setTasks);

  useEffect(() => {
    if (!tasks) return;
     localStorage.setItem("ITEMS", JSON.stringify(tasks));
  }, [tasks]);

   

  return (
    <Box
      width="65%"
      height="80%"
      margin="0 auto"
      position="fixed"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%)"
      bg="#34495e"
      borderRadius="20px"
      padding="10px 15px"
      color="#FFFFFF"
      fontFamily="helvetica"
      overflowY="scroll"
      sx={{
        "::-webkit-scrollbar": {
          width: "8px",
          height: "8px",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "rgba(128,128,128,0.4)",
          borderRadius: "24px",
        },
      }}
    >
      <TaskCreateForm
        createNewTask={createNewTask}
        handleChangeNewTask={handleChangeNewTask}
        newTaskName={newTaskName}
      />
      <Divider />
      <TaskControls
        tasks={tasks}
        setFilterTask={setFilterTask}
        setTasks={setTasks}
        filterTask={filterTask}
      />

      <Text>{tasks.length === 0 && "Pas de tâches créés"}</Text>

      <Tasklist
        createSubTask={createSubTask}
        tasks={tasks}
        setTasks={setTasks}
        filterTask={filterTask}
      />
    </Box>
  );
};

export default TaskContainer;
