import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Navbar.css"
import logo from '../assets/logo.png'
import { useAuthentication } from '../auth'

const Navbar = () => {

  const { isAuthorized, logout } = useAuthentication();

  const handleLogout = () => {
    return logout();
  }


  return (
    <div className='navbar'>
      <Link to={'/'} className='navbar-logo-link'>
        <img src={logo} alt="Logo" className="navbar-logo" />
      </Link>

      <ul className='navbar-menu-right'>
        {isAuthorized ? (
          <li>
            <Link onClick={handleLogout} to="/logout" className="button-link">Logout</Link>
          </li>
        ) : (
          <>
            <li>
              <Link to="/login" className="button-link-login">Log In</Link>
            </li>
            <li>
              <Link to="/register" className="button-link">Register</Link>
            </li>
          </>
        )}
     </ul>

    </div>
  )
}

export default Navbar
