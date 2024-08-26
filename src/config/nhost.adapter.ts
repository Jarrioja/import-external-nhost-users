import { NhostClient } from "@nhost/nhost-js";
import { envs } from "./envs";

const { NHOST_SUBDOMAIN, NHOST_REGION, NHOST_ADMIN_SECRET } = envs;
// Create a new Nhost client from subdomain and region.
export const nhost = new NhostClient({
  subdomain: NHOST_SUBDOMAIN,
  region: NHOST_REGION,
  adminSecret: NHOST_ADMIN_SECRET,
});
