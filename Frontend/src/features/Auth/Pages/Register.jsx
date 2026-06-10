import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Register = () => {
  const { loading, handleRegister } = useAuth();
  const navigate = useNavigate()

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleRegister({ username, email, password });
    navigate("/")
  };

  if (loading) {
    return (
      <main>
        <h1>Loading...</h1>
      </main>
    );
  }

  return (
    <main className="login">
      <h1>Register</h1>

      <form
        action="/register"
        method="post"
        className="login-form"
        onSubmit={handleSubmit}
      >
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            required
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            placeholder="Enter username"
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            placeholder="Enter email"
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            name="password"
            required
            placeholder="Enter password"
          />
        </div>
        <button type="submit" className="button primary-button">
          Register
        </button>
      </form>
      <p>
        Already have an account? <Link to={"/login"}>Login</Link>
      </p>
    </main>
  );
};

export default Register;
