import { UseToast } from "../../hooks/useToast";

export const useTaskControl = (tasks, setTasks) => {
  const { toastInfo } = UseToast();

  //Filter task to know complete or not
  const filtersForButton = [
    { label: "All", value: "all" },
    { label: "Completed", value: "completed" },
    { label: "Incomplete", value: "incomplete" },
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
  const jsonFileUpload = (e) => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = (e) => {
      const data = JSON.parse(e.target.result);
      setTasks([...tasks, ...data]);
      if (data.length === 0) {
        toastInfo("Votre fichier téléchargé est vide", "top", "warning", 3000);
      } else {
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
