import { nhost } from "../config/nhost.adapter";
import { User } from "./execute";

export const resetPassword = async (
  user: User,
  recoveryPasswordUrl: string
) => {
  const { email } = user;
  try {
    const resetPasswordResponse = await nhost.auth.resetPassword({
      email,
      options: {
        redirectTo: recoveryPasswordUrl,
      },
    });
    console.log("Password reset email sent to user:", email);
  } catch (error) {
    console.error("Error processing user:", error);
  }
};
