import { getCurrentTime, taskFileInformation, taskPath } from "./utils.js";
import { writeFile } from "fs/promises";
export const createTask = async (task) => {
  try {
    const tasks = await getTaskList();
    tasks.task.push({
      id: 1,
      description: task,
      status: "todo",
      createdAt: getCurrentTime,
      updatedAt: getCurrentTime,
    });
    writeFile(taskPath, JSON.stringify(tasks.task));
    return;
  } catch (error) {
    return error;
  }
};

export const getTaskList = async () => {
  try {
    const information = await taskFileInformation();
    console.log(information);
    return information;
  } catch (error) {
    return error;
  }
};
