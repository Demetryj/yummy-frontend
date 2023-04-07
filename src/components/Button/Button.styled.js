import styled from 'styled-components';

export const StyledButton = styled.button`
  display: block;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  width: 204px;
  padding-top: ${p => p.theme.spacing(5)};
  padding-bottom: ${p => p.theme.spacing(5)};
  background-color: ${p => p.theme.colors.greenColor};
  color: ${p => p.theme.colors.whiteColor};
  font-weight: ${p => p.theme.fontSizes.regular};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 114%;
  border-radius: ${p => p.theme.radii.light};
`;
