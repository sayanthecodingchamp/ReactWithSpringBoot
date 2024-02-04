
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../AuthService';

const LogoutButton: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    console.log("Log out Done !!")
    alert("Logged Out Successfully!!")
    navigate('/login');
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;

