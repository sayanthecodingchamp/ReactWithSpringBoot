
import React from 'react';
import { Link } from 'react-router-dom';

const WelcomePage: React.FC = () => {
  return (
    <div>
      <h1>Welcome to Suntel Global !!</h1>
      <Link to="/signup">Signup</Link>
      <br />
      <Link to="/login">Login</Link>
    </div>
  );
};

export default WelcomePage;
