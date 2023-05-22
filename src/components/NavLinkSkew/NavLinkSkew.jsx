import { NavLinkSkewStyled } from './NavLinkSkew.styled';

export const NavLinkSkew = ({ navigate, text, styled, location, mode }) => {
  return (
    <NavLinkSkewStyled
      location={location}
      styled={styled}
      to={navigate}
      mode={mode}
    >
      {text}
    </NavLinkSkewStyled>
  );
};
