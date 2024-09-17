//Filter task to know complete or not
export const filtersForButton = [
  { label: "Toutes les tâches", value: "all" },
  { label: "Tâches complètes", value: "completed" },
  { label: "Tâches à faire", value: "incomplete" },
];

/**
 * Function to download the tasks
 * @param {object} element list of tasks created
 */
export const downloadJsonFile = (element) => {
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
export const jsonFileUpload = (e, tasks) => {
  const fileReader = new FileReader();
  return new Promise((resolve, reject) => {
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = (e) => {
      try {
        const data = JSON.parse(e.target.result);
        const existingIds = new Set(tasks.map((task) => task.id));
        const uniqueData = data.filter((task) => !existingIds.has(task.id));
        resolve(uniqueData);
      } catch (error) {
        reject(error);
      }
    };
    let resetFile = document.querySelector(".file");
    resetFile.value = "";
  });
};
