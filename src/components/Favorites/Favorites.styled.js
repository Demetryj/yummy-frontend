import styled from 'styled-components';

export const ContentWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media screen and (${p => p.theme.media.medium}) {
    gap: 40px;
  }

  @media screen and (${p => p.theme.media.large}) {
    gap: 50px;
  }
`;

export const Wrapper = styled.div`
  padding-bottom: 100px;

  @media screen and (${p => p.theme.media.medium}) {
    padding-bottom: 200px;
  }

  @media screen and (${p => p.theme.media.large}) {
    padding-bottom: 100px;
  }
`;
