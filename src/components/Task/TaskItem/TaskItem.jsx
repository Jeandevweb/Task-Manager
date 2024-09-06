import { useState } from "react";
import { Box, Checkbox, Divider, Input, ListItem } from "@chakra-ui/react";

import MenuActions from "./MenuActions";
import { useTaskItem } from "./../TaskItem/useTaskItem";

const TaskItem = ({ task, tasks, setTasks, index, createSubTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const {
    toggleTodo,
    newName,
    setNewName,
    deleteTask,
    editTask,
    moveTaskUp,
    moveTaskDown,
  } = useTaskItem(setTasks, task);

  return (
    <Box
      borderRadius="10px"
      bg="#e0ebeb"
      color="black"
      padding="5px"
    >
      <ListItem
        key={task.id + Date.now()}
        justifyContent="space-between"
        display="flex"
        width="100%"
        padding="15px"
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
          />
        ) : (
          <Checkbox
            isChecked={task.completed}
            textDecoration={task.completed ? "line-through" : "none"}
            onChange={(e) => {
              toggleTodo(task.id, e.target.checked);
            }}
          >
            {task.name}
          </Checkbox>
        )}
        <MenuActions
          setTasks={setTasks}
          task={task}
          tasks={tasks}
          index={index}
          setIsEditing={setIsEditing}
          isEditing={isEditing}
          newName={newName}
          createSubTask={createSubTask}
        />
      </ListItem>
      {task.subTasks && (
        <Box paddingLeft="20px">
          {task.subTasks.map(
            (subTask) => (
              console.log(subTask),
              (
                <TaskItem
                  key={subTask.id}
                  task={subTask}
                  toggleTodo={toggleTodo}
                  editTask={editTask}
                  deleteTask={deleteTask}
                  createSubTask={createSubTask}
                  moveTaskUp={moveTaskUp}
                  moveTaskDown={moveTaskDown}
                />
              )
            )
          )}
        </Box>
      )}
    </Box>
  );
};

export default TaskItem;
