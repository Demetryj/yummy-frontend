import styled from 'styled-components';

export const SearchSection = styled.section`
  padding-top: ${p => p.theme.spacing(25)};

  @media screen and (${p => p.theme.media.medium}) {
    padding-top: ${p => p.theme.spacing(36)};
  }

  @media screen and (${p => p.theme.media.large}) {
    padding-top: ${p => p.theme.spacing(52)};
  }
`;

export const ListSection = styled.section`
  margin-top: ${p => p.theme.spacing(25)};
  padding-bottom: ${p => p.theme.spacing(50)};

  @media screen and (${p => p.theme.media.medium}) {
    padding-bottom: ${p => p.theme.spacing(100)};
  }

  @media screen and (${p => p.theme.media.large}) {
    margin-top: ${p => p.theme.spacing(40)};
  }
`;
