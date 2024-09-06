import { List } from "@chakra-ui/react";
import TaskItem from "../TaskItem/TaskItem";
import { useTaskList } from "./useTaskList";
const Tasklist = ({ tasks, setTasks, filterTask }) => {

  const { filteredTasks } = useTaskList(tasks, filterTask);
  
  console.log(filteredTasks)
  
  return (
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
  );
};

export default Tasklist;
