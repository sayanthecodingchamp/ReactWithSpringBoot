
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8090/api/v1/auth'; 

interface SignupData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface LoginData {
  email: string;
  password: string;
}

export const signup = async (data: SignupData): Promise<void> => {
  // Client-side Sign Up validation
  if (!data.firstName || !data.lastName || !data.email || !data.password) {
    alert("Keep Patience and Input All Details Please !!")
    throw new Error('All fields are required');
  }
  
  try {
    await axios.post(`${API_BASE_URL}/signup`, data);
  } catch (error) {
    console.error('Signup failed:', error);
    throw error;
  }
};

export const login = async (data: LoginData): Promise<string | null> => {
  // Client-side Log In validation
  if (!data.email || !data.password) {
    alert("Email and password are required")
    throw new Error('Email and password are required');
  }

  try {
    const response = await axios.post(`${API_BASE_URL}/authenticate`, data);
    const token = response.data.token;
    console.log(token)
    console.log("Login Successful")
    alert("Login Success !!")
    localStorage.setItem('token', token);
    
    return token;
  } catch (error) {
    alert("Invalid User Details !!  Please Check Email or Password")
    console.error('Login failed:', error);
    return null;
  }
};

export const logout = (): void => {
  localStorage.removeItem('token');
};

export const isAuthenticated = (): boolean => {
  const token = localStorage.getItem('token');
  return !!token;
};
