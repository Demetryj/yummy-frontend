import styled from 'styled-components';

export const Container = styled.div`
  margin-right: 14px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  width: 34px;
  height: 34px;

  @media screen and ${p => p.theme.media.medium} {
    width: 44px;
    height: 44px;
  }
`;
