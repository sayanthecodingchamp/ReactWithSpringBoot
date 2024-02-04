
import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const goToSignUpPage = () => {
    navigate('/signup');
  };

  return (
    <div className='align-items-center'>
      <h1 >Welcome to the Home Page</h1>
      <button onClick={goToSignUpPage}>Go to SignUp</button>
    </div>
  );
};

export default HomePage;

