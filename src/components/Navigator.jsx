import logo from '@images/logo.png';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router';

function Navigator() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(localStorage.getItem('keep user'));
  }, [user]);

  return (
    <header className="sticky shadowed">
      <span className="logo">
        <img src={logo} alt="logo" />
      </span>
      <NavLink to="/home" className="button bordered rounded">
        <span className='icon-home' /> Home
      </NavLink>
      <NavLink to="/projects" className="button bordered rounded">
        Projects
      </NavLink>
      <NavLink to="/login" className="button bordered rounded">
        <span className='icon-user' />&nbsp;
        {user ? 'Log out' : 'Log in' }
      </NavLink>
    </header>
  );
}

export default Navigator;