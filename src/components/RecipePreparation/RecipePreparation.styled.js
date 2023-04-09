import styled from 'styled-components';

export const ImageBlock = styled.div`
  & img {
    border-radius: ${p => p.theme.radii.normal};
    width: 100%;
    height: 220px;
    object-fit: cover;

    @media screen and (min-width: 768px) {
      height: 332px;
    }

    @media screen and (min-width: 1440px) {
      width: 664px;
    }
  }
`;
