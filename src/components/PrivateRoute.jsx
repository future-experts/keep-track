import { Navigate, Outlet } from "react-router";

const PrivateRoute = () => {
  const user = localStorage.getItem('keep user');
  return user ? <Outlet /> : <Navigate to="login" />;
}

export default PrivateRoute;