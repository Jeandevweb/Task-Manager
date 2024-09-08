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
        backgroundColor=" #22313f"
      >
        <Heading
          as="h1"
          size="2xl"
          textAlign="center"
          marginBottom="20px"
          padding="10px"
          color="white"
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
