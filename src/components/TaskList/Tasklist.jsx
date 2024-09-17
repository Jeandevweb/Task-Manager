import { Box, Divider, Flex, List } from "@chakra-ui/react";
import TaskItem from "./TaskItem/TaskItem";
import { useContext } from "react";
import { TaskContext } from "../../context/TaskProvider";
import { MdStar } from "react-icons/md";

const Tasklist = () => {
  const { tasks, filterTask, filteredTasks } = useContext(TaskContext);

  return (
    <List>
      {filteredTasks(tasks, filterTask).map((task, index) => {
        return (
          <Box key={index} margin="10px 0">
            <Flex alignItems="center" gap="10">
              <MdStar color="	#FFD700"/>
              <TaskItem index={index} key={task.id + Date.now()} task={task} />
            </Flex>
            <Divider
              borderColor="#dcdcdd"
              bg="#dcdcdd"
              width="100%"
              margin="0 auto"
            />
          </Box>
        );
      })}
    </List>
  );
};

export default Tasklist;
