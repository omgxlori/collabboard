import axios from "axios"; // No need to import AxiosError
import { UserLogin } from "../interfaces/UserLogin";

// Login function to send user credentials and receive a JWT token
const login = async (userInfo: UserLogin): Promise<{ token: string }> => {
  try {
    // Make a POST request to the login route
    const response = await axios.post("/auth/login", userInfo);

    // Return the token from the server's response
    return response.data;
  } catch (error: unknown) {
    // Type guard to check if the error is an AxiosError
    if (axios.isAxiosError(error)) {
      console.error("Login error:", error.response?.data || error.message);

      // Throw an error message based on the server's response
      throw new Error(
        error.response?.data?.message || "An error occurred during login"
      );
    } else {
      console.error("Unexpected error:", error);
      throw new Error("Unexpected error occurred");
    }
  }
};

export { login };
