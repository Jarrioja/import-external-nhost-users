import { nhost } from "../config/nhost.adapter";
import {
  GET_USER_BY_EMAIL,
  UPDATE_USER_METADATA,
  CREATE_USER,
} from "../helpers/queries";
import { User } from "../functions/processCSV";

export const createOrUpdate = async (user: User, newMetadata: object) => {
  const { email, displayName } = user;
  try {
    const existingUserResponse = await nhost.graphql.request(
      GET_USER_BY_EMAIL,
      {
        email,
      }
    );

    const existingUser = existingUserResponse.data?.users[0];

    if (existingUser) {
      console.log("User exists:", existingUser.email);
      const updatedResponse = await nhost.graphql.request(
        UPDATE_USER_METADATA,
        {
          id: existingUser.id,
          metadata: { ...existingUser.metadata, ...newMetadata },
        }
      );
      return console.log(
        "User metadata updated:",
        updatedResponse.data.updateUser
      );
    } else {
      const newUser = {
        displayName,
        email,
        locale: "es", // Default locale or adjust as needed
        metadata: newMetadata,
      };

      const createdUserResponse = await nhost.graphql.request(CREATE_USER, {
        user: newUser,
      });
      console.log("User created:", createdUserResponse.data.insertUser);
    }
  } catch (error) {
    console.error("Error processing user:", error);
  }
};
