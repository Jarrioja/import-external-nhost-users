import { nhost } from "../config/nhost.adapter";
import { User } from "./execute";

export const resetPassword = async (user: User) => {
  const { email } = user;
  try {
    const resetPasswordResponse = await nhost.auth.resetPassword({
      email,
    });
    console.log("Password reset email sent to user:", email);
  } catch (error) {
    console.error("Error processing user:", error);
  }
};
