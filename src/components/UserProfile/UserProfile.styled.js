import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  border-radius: ${p => p.theme.radii.light};
  outline: none;
  height: ${p => p.theme.spacing(24)};
  margin-bottom: ${p => p.theme.spacing(12)};
  margin-top: ${p => p.theme.spacing(27)};
`;

export const P = styled.p`
  font-size: ${p => p.theme.fontSizes.l};
  cursor: pointer;
`;
