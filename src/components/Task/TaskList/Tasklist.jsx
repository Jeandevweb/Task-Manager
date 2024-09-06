import { List } from "@chakra-ui/react";
import TaskItem from "../TaskItem/TaskItem";
import { useTaskList } from "./useTaskList";

const Tasklist = ({ tasks, setTasks, filterTask, createSubTask }) => {
  const { filteredTasks } = useTaskList();

  return (
    <List>
      {filteredTasks(tasks, filterTask).map((task, index) => {
        return (
          <TaskItem
            index={index}
            key={task.id + Date.now()}
            task={task}
            tasks={tasks}
            setTasks={setTasks}
            createSubTask={createSubTask}
          />
        );
      })}
    </List>
  );
};

export default Tasklist;
