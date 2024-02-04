
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../AuthService';

const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleLogin = async () => {
    const token = await login(formData);
    if (token) {
      navigate('/login-success');
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
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
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
