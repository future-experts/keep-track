import logo from '@images/logo.png';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router';
import { logout } from '@store/userSlice';

function Navigator() {

  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  return (
    <header className="sticky shadowed">
      <span className="logo">
        <img src={logo} alt="logo" />
      </span>

      <div className='right'>
        <NavLink to="/home" className="button bordered rounded">
          <span className='icon-home' /> Home
        </NavLink>
        <NavLink to="/projects" className="button bordered rounded">
          Projects
        </NavLink>

        {user.id ?
          <>
            <span className='user'><strong><span className='icon-user' />&nbsp;{user.name}</strong></span>
            <NavLink to="#" className="button bordered rounded" onClick={() => dispatch(logout())}>
              log out
            </NavLink>
          </>
          :
          <NavLink to="/login" className="button bordered rounded">
            <span className='icon-lock' />&nbsp;Log in
          </NavLink>
        }
      </div>
    </header >
  );
}

export default Navigator;