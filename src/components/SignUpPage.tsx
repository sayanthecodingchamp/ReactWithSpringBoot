
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signup } from '../AuthService';

const SignupPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '', 
    lastName: '',
    email: 'example@gmail.com', //Default MailId
    password: 'admin', // Default Passoword
  });
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await signup(formData);
      console.log("Sign-Up Sucessful !")
      alert("Sign Up Successful")
      navigate('/login');
    } catch (error) {
      // Handle signup failure
      console.error('Signup failed:', error);
    }
  };

  return (
    <div>
      <h1>Signup Page</h1>
      <label>
        First Name:
        <input type="text" value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} />
      </label>
      <br />
      <label>
        Last Name:
        <input type="text" value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} />
      </label>
      <br />
      <label>
        Email:
        <input type="text" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
      </label>
      <br />
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
};

export default SignupPage;
