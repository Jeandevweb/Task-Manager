import { Box, Button, Input } from "@chakra-ui/react";
import { useTaskControl } from "./useTaskControl";

const TaskControls = ({ setFilterTask, tasks }) => {
  const { downloadJsonFile, jsonFileUpload, filtersForButton } = useTaskControl(
    setFilterTask,
    tasks
  );

  return (
    <Box>
      {/* Boucle pour générer les boutons de filtre */}
      {filtersForButton.map(({ label, value }) => (
        <Button key={value} onClick={() => setFilterTask(value)}>
          {label}
        </Button>
      ))}

      {/* Bouton pour télécharger les tâches */}
      <Button onClick={() => downloadJsonFile(tasks)}>
        Download un fichier
      </Button>

      {/* Bouton pour déclencher l'upload */}
      <Button onClick={() => document.querySelector(".file").click()}>
        Upload un fichier
      </Button>
      <Input
        display="none"
        type="file"
        accept=".json"
        className="file"
        onChange={jsonFileUpload}
      />
    </Box>
  );
};

export default TaskControls;
