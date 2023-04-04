// import styled from '@emotion/styled';

// export const Container = styled.div`
//   padding: 25px;
//   background-color: ${({ mode, theme }) => {
//     switch (mode) {
//       case 'light':
//         return theme.colors.light;
//       case 'dark':
//         return theme.colors.dark;
//       default:
//         return theme.colors.default;
//     }
//   }};
//   color: ${(props) => props.theme.colors.primary};
// `;

import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavItem = styled(NavLink)`
  display: flex;
`;
