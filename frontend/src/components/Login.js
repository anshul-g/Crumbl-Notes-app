import '../styles/Button.css';
import { Link } from 'react-router-dom';

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form
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
        <label>Email</label>
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
          type="email"
          placeholder="name@email.com"
        />
        <label>Password</label>
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
        ></input>
        <button className={'primaryBtn'} type="submit" onClick={handleSubmit}>
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
