import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { login } from "@store/userSlice";

const LoginPage = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = event => {
    event.preventDefault();
    dispatch(login({ id: 1, name: 'John Doe', token: '123456' }));
    navigate('/home');
  }

  return (
    <div className='center-page'>
      <div className='card bordered shadowed'>
        <div className="section">
          <h3>Please log in</h3>
        </div>
        <hr />
        <div className='section'>
          <form className='input-group vertical' style={{ width: '300px', margin: '0 auto' }}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" autoFocus />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
            <button className='button primary' onClick={handleLogin}>Log in</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
