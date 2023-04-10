import styled from 'styled-components';

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${p => p.theme.colors.whiteColor};
  background: ${p => p.theme.colors.greenColor};
  width: 100%;
  padding-top: ${p => p.theme.spacing(7)};
  padding-bottom: ${p => p.theme.spacing(7)};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontWeights.s};
  line-height: 129%;
  text-align: center;
  border-radius: ${p => p.theme.radii.light};
`;
