import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectIsLoading,
  selectError,
} from 'redux/auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  const isLoading = useSelector(selectIsLoading);
  const errorMessage = useSelector(selectError);

  return {
    isLoggedIn,
    isRefreshing,
    user,
    isLoading,
    errorMessage,
  };
};
