import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import axios from 'axios';

const AuthContext = createContext();
export default AuthContext;

export const AuthProvider = ({ children }) => {
  
  const navigate = useNavigate();
  const [user, setUser] = useState(localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null);
  const [authTokens, setAuthTokens] = useState(localStorage.getItem('authTokens') ? localStorage.getItem('authTokens') : null);

  const loginUser = async (userName, pass) => {
    const data = {
      username: userName, 
      password: pass 
    };

    const response = await axios.post('http://localhost:8000/api/token/', data);

    if (response.status===200){
      setAuthTokens(response.data);
      setUser(jwt_decode(response.data.access));
      localStorage.setItem('authTokens', JSON.stringify(response.data));
      navigate("/");
    }
  };

  const logoutUser = async () => {
    setUser(null);
    setAuthTokens(null);
    localStorage.removeItem('authTokens');
    navigate("/login");
  }

  const contextData = {
    user: user,
    authTokens: authTokens,
    loginUser: loginUser,
    logoutUser: logoutUser,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
