import { useEffect } from "react";
import { useNavigate } from "react-router";

const LoginPage = () => {

  const navigate = useNavigate();

  const login = event => {
    event.preventDefault();
    localStorage.setItem('keep user', 'John Doe');
    navigate('/home');
  }

  useEffect(() => {
    localStorage.removeItem('keep user');
  }, []);

  return (
    <div className='center-page'>
      <div className='card bordered shadowed'>
        <div className="section">
          <h3>Please log in</h3>
        </div>
        <hr />
        <div className='section'>
          <form className='input-group vertical' style={{ width: '300px', margin: '0 auto'}}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" autoFocus />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
            <button className='button primary' onClick={login}>Log in</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
