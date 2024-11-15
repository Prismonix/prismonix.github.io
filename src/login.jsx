// src/components/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import './login.css'; // Import CSS for styling

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add authentication logic here (e.g., API call to login)
    console.log('Email:', email, 'Password:', password);
  };

  return (
    <section className="login">
      <div className="login-container">
        <div className="login-content">
          <h2 className="heading2">Prismonix</h2>
          <p>Let's get you back on track. Please enter your credentials.</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter your password"
              />
            </div>
            <button type="submit" className="login-button">Log In</button>
          </form>
          <div className="signup-link">
            <p>Don't have an account? <a href="/signup">Sign Up</a></p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
