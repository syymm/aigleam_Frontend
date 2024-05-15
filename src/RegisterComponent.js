import React, { useState } from 'react';
import './RegisterComponent.css';

function RegisterComponent() {
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    // Implement your register logic here
    console.log(email, verificationCode, password, confirmPassword);
  };

  return (
    <div className="register-component">
      <div className="register-image">
        {/* 图片将在这里添加 */}
      </div>
      <div className="register-form">
        <h1>Register Now✍️</h1>
        <form onSubmit={handleRegister}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Verification Code"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button type="submit">Register</button>
        </form>
        <p>
          Already have an account? <a href="#">Login now.</a>
        </p>
      </div>
    </div>
  );
}

export default RegisterComponent;
