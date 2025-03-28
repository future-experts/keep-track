import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const PrivateRoute = () => {
  const { token } = useSelector(state => state.user);
  return token ? <Outlet /> : <Navigate to="login" />;
}

export default PrivateRoute;