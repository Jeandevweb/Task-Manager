import { useContext, useState } from "react";
import { Box, Checkbox, Input, ListItem } from "@chakra-ui/react";

import MenuActions from "./MenuActions";

import {
  editTask,
  deleteTask,
  toggleTodo,
} from "./constants/crudFunctions";
import { UseToast } from "../../../hooks/useToast";
import { moveTaskUp, moveTaskDown } from "./constants/moveTaskFunctions";
import { TaskContext } from "../../../context/TaskProvider";
import { useCreateTask } from "../../Form/useCreateTask";

const TaskItem = ({ task, index }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(task.name);

  const { tasks, setTasks, filterTask } = useContext(TaskContext);

  const { toastInfo } = UseToast();

  const { createSubTask } = useCreateTask();

  return (
    <Box borderRadius="10px" bg="#e0ebeb" color="black" padding="5px">
      <ListItem
        key={task.id + Date.now()}
        justifyContent="space-between"
        display="flex"
        width="100%"
        padding="5px 10px"
        border="1px solid white"
        borderRadius="10px"
        background="rgba(127, 199, 235, 0.2)"
        margin="2px 0"
      >
        {isEditing ? (
          <Input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            autoFocus
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                editTask(task.id, newName, tasks, setTasks);
                setIsEditing(false);
              }
            }}
          />
        ) : (
          <Checkbox
            isChecked={task.completed}
            isDisabled={filterTask === "completed"}
            textDecoration={task.completed ? "line-through" : "none"}
            onChange={(e) => {
              toggleTodo(task.id, e.target.checked, tasks, setTasks, toastInfo);
            }}
          >
            {task.name}
          </Checkbox>
        )}
        <MenuActions
          task={task}
          index={index}
          setIsEditing={setIsEditing}
          isEditing={isEditing}
          newName={newName}
          createSubTask={createSubTask}
        />
      </ListItem>
      {task.subTasks && (
        <Box paddingLeft="20px">
          {task.subTasks.map((subTask) => (
            <TaskItem
              key={subTask.id}
              task={subTask}
              deleteTask={deleteTask}
              createSubTask={createSubTask}
              moveTaskUp={moveTaskUp}
              moveTaskDown={moveTaskDown}
              editTask={editTask}
            />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default TaskItem;
