import { UseToast } from "../../hooks/useToast";

export const useTaskControl = () => {
  const { toastInfo } = UseToast();

  //Filter task to know complete or not
  const filtersForButton = [
    { label: "All Tasks", value: "all" },
    { label: "Completed Tasks", value: "completed" },
    { label: "Incomplete Tasks", value: "incomplete" },
  ];

  /**
   * Function to download the tasks
   * @param {object} element list of tasks created
   */
  const downloadJsonFile = (element) => {
    if (element.length === 0) {
      toastInfo(
        "la liste est vide, il n'y a rien à télécharger",
        "top",
        "warning",
        3000
      );
      return;
    }
    const elementToDownload = JSON.stringify(element);
    let blob = new Blob([elementToDownload], { type: "application/json" });
    let url = URL.createObjectURL(blob);
    let link = document.createElement("a");
    link.download = "tasks.json";
    link.href = url;
    link.click();
    URL.revokeObjectURL(url);
  };

  /**
   * Function to upload new tasks
   * @param {event} element list of tasks created
   */
  const jsonFileUpload = (e,tasks, setTasks) => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = (e) => {
      const data = JSON.parse(e.target.result);
      const existingIds = new Set(tasks.map((task) => task.id));
      const uniqueData = data.filter((task) => !existingIds.has(task.id));
      if (uniqueData.length === 0) {
        toastInfo("Votre fichier téléchargé est vide ou déjà présent", "top", "warning", 3000);
      }
      else {
        setTasks([...tasks, ...uniqueData]);
        toastInfo("Fichier télécharger avec succès", "top", "success", 3000);
      }
    };
    let resetFile = document.querySelector(".file");
    resetFile.value = "";
  };

  return {
    downloadJsonFile,
    jsonFileUpload,
    filtersForButton,
  };
};
