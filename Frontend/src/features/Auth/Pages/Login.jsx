import React, { useState } from "react";
import "../auth.style.scss";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { loading, handleLogin } = useAuth();

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleLogin({ email, password });
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
      <h1>Login</h1>

      <form
        action="/login"
        method="post"
        className="login-form"
        onSubmit={handleSubmit}
      >
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
            name="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            placeholder="Enter password"
          />
        </div>
        <button type="submit" className="button primary-button">
          Login
        </button>
      </form>
      <p>
        Don't have an account? <Link to={"/register"}>Register</Link>
      </p>
    </main>
  );
};

export default Login;
