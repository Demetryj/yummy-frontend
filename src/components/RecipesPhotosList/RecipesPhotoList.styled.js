import styled from 'styled-components';

export const ImageItem = styled.li`
  position: relative;
`;
export const Image = styled.img`
  display: block;
  border-radius: 8px;
  width: 100%;
  height: auto;
`;
export const Lable = styled.div`
  position: absolute;
  bottom: 20%;
  left: 50%;
  transform: translateX(-50%);
  width: 85%;
  padding: 16px;
  border-radius: 8px;
  background-color: ${p => p.theme.colors.bcgWhiteColor};

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.24px;
  color: #3e4462;
`;

export const PhotosList = styled.ul`
  margin: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(343px, 1fr));
  gap: 28px;
  &:first-child {
    padding-top: 50px;
  }
  &:last-child {
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
