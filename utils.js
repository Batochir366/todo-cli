import { access, readFile } from "fs/promises";
export const taskPath = "./tasks.json";

export const fileExists = async () => {
  try {
    await access(taskPath);
    return { isExists: true, message: "File exists" };
  } catch {
    console.log({ isExists: false, message: "File does not exist" });
    return { isExists: false, message: "File does not exist" };
  }
};

// export const createSeedFile = () => {
//   try {

//   } catch (error) {}
// };

export const taskFileInformation = async () => {
  try {
    const rawData = (await readFile(taskPath, "utf-8")).trim();
    if (!rawData) {
      return {
        isEmpty: true,
        message: `${taskPath} is empty`,
        task: undefined,
      };
    }
    const tasks = JSON.parse(rawData);

    if (rawData === "" || rawData === "[]" || rawData === "{}") {
      return { isEmpty: true, message: "you got 0 task", task: tasks };
    }

    return {
      isEmpty: false,
      message: `you got ${tasks.length} tasks`,
      task: tasks,
    };
  } catch (error) {
    return error;
  }
};

export const getCurrentTime = new Date().toLocaleString("mn-MN", {
  timeZone: "Asia/Ulaanbaatar",
  dateStyle: "medium",
  timeStyle: "medium",
});

export const createAnUniqueId = () => {};
