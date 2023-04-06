import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavItem = styled(NavLink)`
  /* display: flex; */
`;

export const List = styled.ul`
  /* justify-content: space-between; */
  /* alignitems: center; */

  @media screen and ${p => p.theme.media.medium} {
    display: flex;
  }
`;

export const ListItem = styled.li`
  &:not(:last-child) {
    margin-right: ${p => p.theme.spacing(15)};
  }
`;

export const Avatar = styled.img``;

export const Paragraph = styled.p`
  font-size: ${p => p.theme.fontSizes.xs};
  font-family: 'Poppins';
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.semiBold};
  line-height: 170%;
`;

/* media: {
    medium: '(min-width: 768px)',
    large: '(min-width: 1440px)',
  }, */
