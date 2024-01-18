// UserForm.js (Adding Users)
import React, { useState } from 'react';

const UserForm = ({ addUser }) => {
  const [user, setUser] = useState({ name: '', email: '' });

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(user);
    setUser({ name: '', email: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={user.name} onChange={handleInputChange} placeholder="Name" />
      <input type="email" name="email" value={user.email} onChange={handleInputChange} placeholder="Email" />
      <button type="submit">Add User</button>
    </form>
  );
};

export default UserForm;
