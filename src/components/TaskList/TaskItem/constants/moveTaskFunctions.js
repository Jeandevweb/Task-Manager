/**
 * Function to moveup the current task
 * @param {number} index current index of the task
 */
export function moveTaskUp(index, element, setter) {
  if (index > 0) {
    const newArrayOfTasks = [...element];
    [newArrayOfTasks[index], newArrayOfTasks[index - 1]] = [
      newArrayOfTasks[index - 1],
      newArrayOfTasks[index],
    ];
    setter(newArrayOfTasks);
  }
}

/**
 * Function to movedown the current task
 * @param {number} index current index of the task
 */
export function moveTaskDown(index, element, setter) {
  if (index < element.length - 1) {
    const newArrayOfTasks = [...element];
    [newArrayOfTasks[index], newArrayOfTasks[index + 1]] = [
      newArrayOfTasks[index + 1],
      newArrayOfTasks[index],
    ];
    setter(newArrayOfTasks);
  }
}
