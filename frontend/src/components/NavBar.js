import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
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
    const {user} = useContext(AuthContext);
    return(
        <div style={NavStyle}>
            <span>Crumbl.</span>
            <div>
                <span style={{marginRight: '1rem'}}>Hello {user?.username}</span>
                <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
            </div>
        </div>
    )
}

export default NavBar;