
import React from 'react';
import LogoutButton from './LogoutButton';

const LoginSuccessPage: React.FC = () => {
  return (
    <div>
      <h1>Login Successful!</h1>
      <p>Welcome to the Login Success Page.</p>
      <LogoutButton/>
    </div>
  );
};

export default LoginSuccessPage;
