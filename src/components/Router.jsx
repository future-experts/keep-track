import ProjectsPage from '@projects/ProjectsPage';
import ProjectPage from '@projects/ProjectPage';
import HomePage from '@home/HomePage';
import LoginPage from '@auth/LoginPage';
import PrivateRoute from './PrivateRoute';
import { Routes, Route, useLocation } from 'react-router';

function Router() {
  const location = useLocation();
  return (
    <div className='container'>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path='/projects' element={<ProjectsPage />} />
          <Route path='/projects/:id' element={<ProjectPage />} />
        </Route>
        <Route index element={<HomePage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='*' element={<h1 className='center-page'>404 Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default Router;