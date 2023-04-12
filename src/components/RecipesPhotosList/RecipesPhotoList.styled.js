import styled from 'styled-components';

export const Image = styled.img`
  display: block;
  border-radius: 4px;
  width: 100%;
  height: auto;
`;

export const PhotosList = styled.ul`
  margin: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(343px, 1fr));
  gap: 28px;
  & > li:first-child {
    padding-top: 50px;
  }
  & > li:last-child {
    padding-bottom: 100px;
  }

  @media screen and ${p => p.theme.media.medium} {
    gap: 14px;
    padding-bottom: 150px;
    max-width: 768px;
    & > li {
      padding: 50px 0;
    }
  }

  @media screen and ${p => p.theme.media.large} {
    gap: 14px;
    padding-bottom: 150px;
    max-width: 1440px;
    & > li {
      padding: 50px 0;
    }
  }
`;
