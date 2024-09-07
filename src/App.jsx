import { Box, Heading } from "@chakra-ui/react";
import TaskContainer from "./components/TaskContainer";

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
        <TaskContainer />
      </Box>
    </TaskProvider>
  );
}

export default App;
