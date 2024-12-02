import { useState, FormEvent, ChangeEvent } from "react";

import Auth from '../utils/auth';
import { login } from "../api/authAPI";

const Login = () => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });

  const [errorMessage, setErrorMessage] = useState<string | null>(null); // State for error message

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value
    });
    setErrorMessage(null); // Clear error message when user starts typing
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const data = await login(loginData);
      Auth.login(data.token); // Log in and save the token
    } catch (err: unknown) {
      if (err instanceof Error) {
        // If the error is an instance of JavaScript's Error
        setErrorMessage(err.message || 'An error occurred. Please try again.');
      } else {
        // Fallback for unknown error types
        setErrorMessage('An unexpected error occurred.');
      }
    }
  };
  

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Login</h1>
        {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Display error message */}
        <label>Username</label>
        <input 
          type="text"
          name="username"
          value={loginData.username || ''}
          onChange={handleChange}
        />
        <label>Password</label>
        <input 
          type="password"
          name="password"
          value={loginData.password || ''}
          onChange={handleChange}
        />
        <button type="submit">Submit Form</button>
      </form>
    </div>
  );
};

export default Login;
