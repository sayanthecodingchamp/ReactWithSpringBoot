
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './WelcomePage';
import SignupPage from './components/SignUpPage';
import LoginPage from './components/LoginPage';
import LogoutButton from './components/LogoutButton';
import LoginSuccessPage from './components/LogInSuccess'; // Import the new component
import { isAuthenticated } from './AuthService';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={isAuthenticated() ? <WelcomePage /> : <LoginPage />} /> */}
        <Route path='/' element={<WelcomePage/>}/>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        {isAuthenticated() && (
          <>
            <Route path="/logout" element={<LogoutButton />} />
            <Route path="/login-success" element={<LoginSuccessPage />} />
          </>
        )}
      </Routes>
    </Router>
  );
};

export default App;






