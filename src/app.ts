import { processCSV } from "./functions/processCSV";
import { envs } from "./config/envs";
const { CSV_FILE_PATH } = envs;
processCSV(CSV_FILE_PATH);
