import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const [user, setUser] = useState({});
  const [error, setError] = useState();
  const Navigate = useNavigate()
  const API_URL = import.meta.env.VITE_API_URL;
  const handleSubmit = async () => {
    try {
      const url = `${API_URL}/api/users/login`;
      const result = await axios.post(url, user);
      setError("Welcome");
      Navigate("/")
    } catch (err) {
      console.log(err);
      setError("Something went wrong");
    }
  };
  return (
    <div>
      <h2>Login Form</h2>
      {error}
      <p>
        <input
          type="text"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="Email address"
        />
      </p>
      <p>
        <input
          type="password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="Password"
        />
      </p>
      <button onClick={handleSubmit}>Submit</button>
      <hr />
      <Link to="/register">Create Account</Link>
    </div>
  );
}
