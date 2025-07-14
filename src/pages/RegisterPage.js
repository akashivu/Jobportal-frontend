
import React, { useState } from 'react';
import { registerUser } from '../service/AuthService';

const RegisterForm = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(user);
      alert('Registered successfully!');
    } catch (error) {
      alert('Registration failed!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
