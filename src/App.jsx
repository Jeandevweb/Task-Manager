import { Box, Heading } from "@chakra-ui/react";
import TaskLayout from "./components/TaskLayout";

import { TaskProvider } from "./context/TaskProvider";

function App() {
  return (
    <TaskProvider>
      <Box
        border="1px solid"
        w="100vw"
        h="100vh"
        position="relative"
        backgroundColor=" #FFFFFF"
      >
        <Heading
          as="h1"
          size="2xl"
          textAlign="center"
          margin="40px 0"
          padding="10px"
          color="black"
        >
          {" "}
          Task Manager{" "}
        </Heading>
        <TaskLayout />
      </Box>
    </TaskProvider>
  );
}

export default App;
