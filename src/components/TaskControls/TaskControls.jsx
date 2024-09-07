import { Box, Button, Input, Tooltip } from "@chakra-ui/react";
import * as Icons from "../../icons/reactIcons";

import {
  downloadJsonFile,
  jsonFileUpload,
  filtersForButton,
} from "./taskControl";
import { UseToast } from "../../hooks/useToast";
import { useContext } from "react";
import { TaskContext } from "../../context/TaskProvider";

const TaskControls = () => {
  const { toastInfo } = UseToast();

  const { setFilterTask, tasks, filterTask, setTasks } =
    useContext(TaskContext);


  return (
    <Box display="flex" flexWrap="nowrap" margin="20px 0 50px">
      {/* Boucle pour générer les boutons de filtre */}
      <Box w="100%">
        {filtersForButton.map(({ label, value }) => (
          <Button
            size="sm"
            key={value}
            marginRight="15px"
            onClick={() => setFilterTask(value)}
            backgroundColor={filterTask === value && "green"}
            color={filterTask === value ? "white" : "black"}
          >
            {label}
          </Button>
        ))}
      </Box>

      <Box w="20%">
        {/* Bouton pour télécharger les tâches */}
        <Tooltip label="télécharger votre liste de tâches">
          <Button
            marginRight="10px"
            size="sm"
            onClick={() => downloadJsonFile(tasks, toastInfo)}
          >
            <Icons.MdCloudDownload />
          </Button>
        </Tooltip>

        {/* Bouton pour déclencher l'upload */}
        <Tooltip label="ajouter une liste des tâches">
          <Button
            size="sm"
            onClick={() => document.querySelector(".file").click()}
          >
            <Icons.MdUploadFile />
          </Button>
        </Tooltip>
        <Input
          display="none"
          type="file"
          accept=".json"
          className="file"
          onChange={(e) => jsonFileUpload(e, tasks, setTasks, toastInfo)}
        />
      </Box>
    </Box>
  );
};

export default TaskControls;
