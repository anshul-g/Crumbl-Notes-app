import { createContext, useState } from 'react';
import jwt_decode from "jwt-decode";
import axios from 'axios';

const AuthContext = createContext();
export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authTokens, setAuthTokens] = useState(null);

  const loginUser = async (userName, pass) => {
    const data = {
      username: userName, 
      password: pass 
    };

    console.log(data.body);
    const response = await axios.post('http://localhost:8000/api/token/', data);

    if (response.status===200){
      setAuthTokens(response.data);
      setUser(jwt_decode(response.data.access))
    }
  };

  const contextData = {
    user: user,
    loginUser: loginUser,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
