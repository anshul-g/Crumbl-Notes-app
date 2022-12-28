const NavStyle = {
    padding: '1rem',
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
            <span>Notes App</span>
            <div>
                <span>Hello User!</span>
                <img style={{marginLeft: '1rem'}} src="" alt="AVI" />
            </div>
        </div>
    )
}

export default NavBar;