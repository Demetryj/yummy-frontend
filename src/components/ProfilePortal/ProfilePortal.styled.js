import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const P = styled.p`
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 160%;
  color: ${p => p.theme.colors.mainTextColor};
  cursor: pointer;
`;
