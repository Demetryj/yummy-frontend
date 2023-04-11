import { Link } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <>
      <Link to="/register">Registration</Link>
      <Link to="/signin">Sign in</Link>
    </>
  );
};
