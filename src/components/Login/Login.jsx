import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

const Login = () => {
  const [action, setAction] = useState("Sign Up");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSignUp = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/user/signup', formData, {
  headers: {
    'Content-Type': 'application/json',
  },
});


      if (response.status === 200) {
        alert("success")
        console.log('Sign Up successful');
      } else {
        alert("Failed")
        console.error('Sign Up failed');
      }
    } catch (error) {
      alert("Failed")
      console.error('Error during Sign Up', error);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/user/login', formData, {
  headers: {
    'Content-Type': 'application/json',
  },
});


      if (response.status === 200) {
        alert("success")
        console.log('Login successful');
      } else {
        alert("login failed")
        console.error('Login failed');
      }

    } catch (error) {
      alert("Login Failed")
      console.error('Error during Login', error);
    }
  };

  return (
    <div className='container'>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? (
          <></>
        ) : (
          <div className="input">
            <img src="/person.png" alt="" />
            <input
              type="text"
              name="name"
              placeholder='Name'
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
        )}

        <div className="input">
          <img src="/email.png" alt="" />
          <input
            type="email"
            name="email"
            placeholder='Email Id'
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="input">
          <img src="/password.png" alt="" />
          <input
            type="password"
            name="password"
            placeholder='Password'
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        {action === "Sign Up" ? (
          <></>
        ) : (
          <div className="forgot">Forgot Password</div>
        )}
        <div className="s-container">
          <div
            className={action === "Login" ? "buttons gray" : "buttons"}
            onClick={() => {
              setAction("Sign Up");
              handleSignUp();
            }}
          >
            Sign Up
          </div>
          <div
            className={action === "Sign Up" ? "buttons gray" : "buttons"}
            onClick={() => {
              setAction("Login");
              handleLogin();
            }}
          >
            Login
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
