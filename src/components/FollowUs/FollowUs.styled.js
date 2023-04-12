import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const FollowUsContainer = styled.div`
  display: none;
  padding-bottom: ${p => p.theme.spacing(50)};

  @media screen and (${p => p.theme.media.large}) {
    /* display: run-in; */
    display: block;
  }
`;

// export const Social = styled.ul`
//   display: flex;
//   gap: 20px;
// `;
// export const Links = styled.li`
//   width: 25px;
//   height: 25px;
// `;

export const BoxTitle = styled.h2`
  display: inline-block;
  font-weight: ${p => p.theme.fontWeights.semibold};
  font-size: ${p => p.theme.fontSizes.l};
  line-height: 24px;
  padding-bottom: 40px;
`;

export const IconList = styled.ul`
  display: flex;
  margin-top: 0;
  margin-bottom: 0;
  gap: ${p => p.theme.spacing(7)};
  @media screen and (${p => p.theme.media.medium}) {
    gap: ${p => p.theme.spacing(9)};
  }
`;
export const IconItem = styled.li``;

export const NavItem = styled(NavLink)`
  color: ${p => p.theme.colors.whiteColor};
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.greenTextColor};
  }
`;
