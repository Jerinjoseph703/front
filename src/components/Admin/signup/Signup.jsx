// UserForms.js
import React, { useState } from 'react';
import axios from 'axios';

function UserForms({ onClick }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleRegister() {
    try {
      // Assuming you have an API endpoint for user registration
      await axios.post('http://localhost:8000/api/admin/createAdmin', { email, password });


      // Clear the form
      setEmail('');
      setPassword('');
      alert("success")

      // Call the onClick function (passed as a prop) for additional handling if needed
      if (onClick) {
        onClick();
      }
    } catch (error) {
      console.error('Error during registration:', error);
      // Handle the error here if needed
    }
  }

  return (
    <div>
      <input
        type="text"
        className="form-control"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        className="form-control"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="button" className="btn btn-primary mt-3" onClick={handleRegister}>
        Register
      </button>
    </div>
  );
}

export default UserForms;
