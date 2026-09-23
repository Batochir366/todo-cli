import { createTask, getTaskList } from "./todo_controllers.js";
import { fileExists } from "./utils.js";

export const commandBuilder = async (keyWord) => {
  const fileStatus = await fileExists();
  if (!fileStatus.isExists) {
    return;
  }
  const selectedController = keyWord[0];
  switch (selectedController) {
    case "add":
      createTask(keyWord[1]);
      break;
    case "delete":
      console.log("you selected delete");
      break;
    case "update":
      console.log("you selected update");
      break;
    case "mark-in-progress":
      console.log("you selected mark-in-progress");
      break;
    case "mark-done":
      console.log("you selected mark-done");
      break;
    case "list":
      getTaskList();
      break;
    default:
      console.log("please enter a valid keyword");
      break;
  }
};
