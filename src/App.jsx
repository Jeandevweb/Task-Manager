import { Box, Heading } from "@chakra-ui/react";
import TaskContainer from "./components/TaskContainer";
function App() {
  return (
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
  );
}

export default App;
