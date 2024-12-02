import { jwtDecode, JwtPayload } from "jwt-decode";

class AuthService {
  // Decode the token to get user profile information
  getProfile(): JwtPayload | null {
    const token = this.getToken(); // Retrieve the token from localStorage
    return token ? jwtDecode<JwtPayload>(token) : null; // Decode the token or return null
  }

  // Check if the user is logged in
  loggedIn(): boolean {
    const token = this.getToken(); // Retrieve the token
    return !!token && !this.isTokenExpired(token); // Check if token exists and is not expired
  }

  // Check if the token is expired
  isTokenExpired(token: string): boolean {
    try {
      const decoded = jwtDecode<JwtPayload>(token);
      return decoded.exp ? decoded.exp * 1000 < Date.now() : false; // Compare expiration time to current time
    } catch {
      return true; // If decoding fails, consider the token expired
    }
  }

  // Retrieve the token from localStorage
  getToken(): string | null {
    return localStorage.getItem("jwt"); // Safely retrieve the token or return null
  }

  // Save the token to localStorage and redirect to the home page
  login(idToken: string): void {
    localStorage.setItem("jwt", idToken); // Save the token in localStorage
    window.location.assign("/"); // Redirect to the home page
  }

  // Remove the token from localStorage and redirect to the login page
  logout(): void {
    localStorage.removeItem("jwt"); // Remove the token
    window.location.assign("/"); // Redirect to the login page
  }
}

export default new AuthService();
