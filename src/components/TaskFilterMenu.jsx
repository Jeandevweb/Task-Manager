import { Button } from "@chakra-ui/react";

const TaskFilterMenu = ({ setFilterTask }) => {
  return (
    <>
      <Button onClick={() => setFilterTask("all")}>all</Button>
      <Button onClick={() => setFilterTask("completed")}>completed</Button>
      <Button onClick={() => setFilterTask("incomplete")}>incompleted</Button>
    </>
  );
};

export default TaskFilterMenu;
