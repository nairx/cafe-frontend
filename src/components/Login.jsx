import React from "react";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div>
      <h2>Login Form</h2>
      <p>
        <input type="text" />
      </p>
      <p>
        <input type="password" />
      </p>
      <button>Submit</button>
      <hr />
    </div>
  );
}
