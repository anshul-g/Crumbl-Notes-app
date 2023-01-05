import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import AuthContext from '../utils/AuthContext.js';

const NavStyle = {
    padding: '1rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontWeight: '600',
    background: 'rgb(180,64,255)',
    fontSize: '1.2rem'
}

function NavBar() {
    const {user, logoutUser} = useContext(AuthContext);
    console.log(user);
    return(
        <div style={NavStyle}>
            <span>Crumbl.</span>
            <div>
                <span style={{marginRight: '1rem'}}>Hello {user.username}</span>
                <FontAwesomeIcon style={{marginRight: '0.5rem'}} icon={faUser}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faSignOut} onClick={logoutUser}></FontAwesomeIcon>
            </div>
        </div>
    )
}

export default NavBar;