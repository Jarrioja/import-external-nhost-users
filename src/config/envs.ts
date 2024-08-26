import "dotenv/config";
import { get } from "env-var";

export const envs = {
  NHOST_SUBDOMAIN: get("NHOST_SUBDOMAIN").required().asString(),
  NHOST_REGION: get("NHOST_REGION").required().asString(),
  NHOST_ADMIN_SECRET: get("NHOST_ADMIN_SECRET").required().asString(),
  CSV_FILE_PATH: get("CSV_FILE_PATH").required().asString(),
};
