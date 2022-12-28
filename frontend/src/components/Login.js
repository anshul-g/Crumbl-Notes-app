import { useState, useContext } from 'react';
import AuthContext from '../utils/AuthContext.js';
import { Link } from 'react-router-dom';
import '../styles/Button.css';

function Login() {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const { loginUser } = useContext(AuthContext);
  
  const handleUsername = (e) => setUsername(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(username, password);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="center"
      style={{
        width: '20vw',
        border: '1px solid white',
        padding: '2rem',
        textAlign: 'center',
        borderRadius: '4px',
      }}
    >
      <h2 style={{ marginBottom: '0.25rem' }}>Login</h2>
      <div
        style={{
          height: '5px',
          background: 'rgb(180,64,255)',
          marginBottom: '2rem',
        }}
      ></div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginBottom: '1rem',
          textAlign: 'left',
        }}
      >
        <label id="username">Username</label>
        <input
          style={{
            backgroundColor: '#202124',
            fontFamily: 'Poppins',
            padding: '0.5rem 1rem',
            marginBottom: '1rem',
            border: '1px solid white',
            borderRadius: '4px',
            color: 'white',
          }}
          type="text"
          placeholder="username"
          onChange={handleUsername}
        />
        <label id="password">Password</label>
        <input
          style={{
            backgroundColor: '#202124',
            fontFamily: 'Poppins',
            padding: '0.5rem 1rem',
            marginBottom: '2rem',
            border: '1px solid white',
            borderRadius: '4px',
            color: 'white',
          }}
          type="password"
          placeholder="Password"
          onChange={handlePassword}
        ></input>
        <button className={'primaryBtn'} type="submit">
          Submit
        </button>
      </div>
      <Link style={{ color: 'white', textDecoration: 'none' }} to="/register">
        Create An Account
      </Link>
    </form>
  );
}

export default Login;
