import { useSelector } from 'react-redux';
import { selectLogIn, selectIsRefreshing } from '../redux/selector';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggidIn = useSelector(selectLogIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const shouldRedirect = !isLoggidIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
