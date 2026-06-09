import React from "react";
import "../auth.style.scss";
import { Link } from "react-router";

const Login = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
  };

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
