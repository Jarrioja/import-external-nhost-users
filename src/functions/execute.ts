import fs from "fs";
import csvParser from "csv-parser";
import { createOrUpdate } from "./createOrUpdate";
import { resetPassword } from "./resetPassword";

export interface User {
  displayName: string;
  email: string;
}

// Leer el archivo CSV y procesar los usuarios
export const execute = (filePath: string, action: string) => {
  if (!action) throw new Error("Missing action");
  const users: User[] = [];

  fs.createReadStream(filePath)
    .pipe(csvParser())
    .on("data", (row) => {
      // Asumimos que el CSV tiene las columnas displayName y email
      const { displayName, email } = row;
      if (email) {
        users.push({ displayName, email });
      }
    })
    .on("end", () => {
      console.log("CSV file successfully processed.");
      // Llamar a createOrUpdate para cada usuario
      users.forEach((user) => {
        if (action === "createOrUpdate") {
          createOrUpdate(user, { elite: true });
        }
        if (action === "resetPassword") {
          resetPassword(user);
        }
      });
    });
};
