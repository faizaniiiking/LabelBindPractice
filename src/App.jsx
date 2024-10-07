// src/App.js
import React from 'react';
import './App.css'; // Import App-specific styles
import 'font-awesome/css/font-awesome.min.css';


const App = () => {
  return (
    <div className="login-container "> {/* Container for the login form */}
      <div className="login-card"> {/* Card for the login form */}
        <input 
          type="text" 
          placeholder="Username" 
          className="login-input" /> {/* Username input */}
        <input 
          type="password" 
          placeholder="Password" 
          className="login-input" /> {/* Password input */}
        <button className="login-button">Login</button> {/* Login button */}
        <p className="forgot-password">
          <a href="#">Forgot Password</a> {/* Link to forgot password */}
        </p>
      </div>

      <ThisisNewFIle />
    </div>
  );
};

export default App;
