// UserForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserForm = ({ onLogin }) => {
  const [admin, setAdmin] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };

  const handleAdminLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/admin/adminLogin', admin, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        alert("Admin Login successful");
        // Assuming onLogin function handles the successful admin login
        if (onLogin) {
          onLogin();
        }

        setAdmin({ email: '', password: '' });

        // Navigate to the panel page
        navigate('/panel');
      } else {
        alert("Admin Login failed");
        console.error('Admin Login failed');
      }
    } catch (error) {
      alert("Admin Login failed");
      console.error('Error during Admin Login', error);
    }
  };

  return (
    <div>
      <input
        type="email"
        name="email"
        value={admin.email}
        onChange={handleInputChange}
        placeholder="Email"
      />
      <input
        type="password"
        name="password"
        value={admin.password}
        onChange={handleInputChange}
        placeholder="Password"
      />
      <button type="button" onClick={handleAdminLogin}>
        Admin Login
      </button>
    </div>
  );
};

export default UserForm;
