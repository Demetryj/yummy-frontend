import styled from 'styled-components';

export const ContentWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(9)};
  margin-block-start: 0;
  margin-block-end: 0;
  margin-bottom: ${p => p.theme.spacing(20)};
  padding-top: ${p => p.theme.spacing(25)};

  @media screen and (${p => p.theme.media.medium}) {
    gap: ${p => p.theme.spacing(20)};
    margin-bottom: ${p => p.theme.spacing(25)};
    padding-top: ${p => p.theme.spacing(50)};
  }

  @media screen and (${p => p.theme.media.large}) {
    gap: ${p => p.theme.spacing(25)};
    padding-top: ${p => p.theme.spacing(50)};
  }
`;

export const Wrapper = styled.div`
  padding-bottom: ${p => p.theme.spacing(50)};
  height: 100%;

  @media screen and (${p => p.theme.media.medium}) {
    padding-bottom: ${p => p.theme.spacing(100)};
  }

  @media screen and (${p => p.theme.media.large}) {
    padding-bottom: ${p => p.theme.spacing(100)};
  }
`;
