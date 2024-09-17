import { Box, Divider, Text } from "@chakra-ui/react";
import { useContext } from "react";
import TaskCreateForm from "./Form/TaskCreateForm";

import TaskControls from "./TaskControls/TaskControls";
import Tasklist from "./TaskList/Tasklist";
import { TaskContext } from "../context/TaskProvider";

const TaskLayout = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <Box
      width="80%"
      height="72%"
      margin="0 auto"
      position="fixed"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%)"
      bg="#F3F4F6"
      borderRadius="5px"
      padding="10px 15px"
      color="#FFFFFF"
      fontFamily="helvetica"
      overflow="hidden"
    >
      <TaskCreateForm />

      <Divider borderColor="#dcdcdd" bg="#dcdcdd" borderWidth="1px" />

      <TaskControls />
      <Box
        padding="0 10px"
        overflowY="scroll"
        marginTop="30px"
        height="72%"
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
        <Text>{tasks.length === 0 && "Pas de tâches créés"}</Text>

        <Tasklist />
      </Box>
    </Box>
  );
};

export default TaskLayout;
