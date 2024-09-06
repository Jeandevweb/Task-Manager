import { useState } from "react";
import { Checkbox, Input, ListItem } from "@chakra-ui/react";

import MenuActions from "./MenuActions";
import { useTaskItem } from "./../TaskItem/useTaskItem";

const TaskItem = ({ task, tasks, setTasks, index }) => {
  const [isEditing, setIsEditing] = useState(false);
  const { toggleTodo, newName, setNewName } = useTaskItem(setTasks, task);

return (
    <ListItem key={task.id + Date.now()} display="flex">
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
      />
    </ListItem>
  );
};

export default TaskItem;
