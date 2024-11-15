// src/components/SignUp.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import './signUp.css'; // Import CSS for styling

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation: Check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Add registration logic here (e.g., API call to register the user)
    console.log('Email:', email, 'Password:', password);
  };

  return (
    <section className="signup">
      <div className="signup-container">
        <div className="signup-content">
          <h2>Create Your Account</h2>
          <p>Join Prismonix and be part of something amazing!</p>
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
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                placeholder="Confirm your password"
              />
            </div>
            <button type="submit" className="signup-button">Sign Up</button>
          </form>
          <div className="login-link">
            <p>Already have an account? <a href="/login">Login</a></p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
