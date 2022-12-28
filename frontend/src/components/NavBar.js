import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

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
    return(
        <div style={NavStyle}>
            <span>Crumbl.</span>
            <div>
                <span style={{marginRight: '1rem'}}>Hello User!</span>
                <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
            </div>
        </div>
    )
}

export default NavBar;