import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectLogIn } from 'redux/selector';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectLogIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
