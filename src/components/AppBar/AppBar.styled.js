import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavItem = styled(NavLink)`
  /* display: flex; */
`;

export const List = styled.ul`
  display: flex;
  /* justify-content: space-between; */
  /* alignitems: center; */
`;

export const ListItem = styled.li`
  &:not(:last-child) {
    margin-right: ${p => p.theme.spacing(15)};
  }
`;

export const Avatar = styled.img``;
