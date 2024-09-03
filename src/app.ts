import { execute } from "./functions/execute";
import { envs } from "./config/envs";

const { CSV_FILE_PATH, ACTION } = envs;

execute(CSV_FILE_PATH, ACTION);
