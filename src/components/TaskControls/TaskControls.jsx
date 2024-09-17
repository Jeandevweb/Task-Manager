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

  /**
   * Function to download tasks array and manage toast information
   */
  const handleDownloadJsonFile = () => {
    if (tasks.length === 0) {
      toastInfo(
        "La liste est vide, il n'y a rien à télécharger",
        "top",
        "warning",
        3000
      );
      return;
    }
    downloadJsonFile(tasks);
  };

  /**
   * Function to upload new tasks and manage toast information
   * @param {event} element list of tasks created
   */
  const handleJsonFileUpload = async (e) => {
    const uniqueData = await jsonFileUpload(e, tasks);
    if (uniqueData.length === 0) {
      toastInfo(
        "Votre fichier téléchargé est vide ou déjà présent",
        "top",
        "warning",
        3000
      );
    } else {
      setTasks([...tasks, ...uniqueData]);
      toastInfo("Fichier télécharger avec succès", "top", "success", 3000);
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      flexWrap="nowrap"
      margin="20px 0 50px"
    >
      {/* Boucle pour générer les boutons de filtre */}
      <Box>
        {filtersForButton.map(({ label, value }) => (
          <Button
            size="sm"
            borderRadius="3px"
            key={value}
            marginRight="15px"
            onClick={() => setFilterTask(value)}
            colorScheme={filterTask === value ? "purple" : "blue"}
          >
            {label}
          </Button>
        ))}
      </Box>

      <Box>
        {/* Bouton pour télécharger les tâches */}
        <Tooltip label="Exporter en JSON">
          <Button
            colorScheme="blue"
            borderRadius="3px"
            marginRight="10px"
            size="sm"
            onClick={handleDownloadJsonFile}
          >
            <Icons.MdCloudDownload />
          </Button>
        </Tooltip>

        {/* Bouton pour déclencher l'upload */}
        <Tooltip label="Importer JSON">
          <Button
            colorScheme="blue"
            borderRadius="3px"
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
          onChange={handleJsonFileUpload}
        />
      </Box>
    </Box>
  );
};

export default TaskControls;
