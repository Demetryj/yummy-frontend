import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from 'styles';

export const ImageItemLink = styled(NavLink)`
  position: relative;
`;
export const Image = styled.img`
  display: block;
  border-radius: ${p => theme.radii.normal};
  width: 100%;
  min-height: 300px;
  background-color: #8baa3655;
`;

export const Lable = styled.div`
  position: absolute;
  bottom: 15%;
  left: 50%;
  transform: translateX(-50%);
  width: 85%;
  padding: ${p => theme.spacing(8)};
  border-radius: ${p => theme.radii.normal};
  background-color: ${p => p.theme.colors.bcgWhiteColor};

  font-family: 'Poppins';
  font-style: normal;
  font-weight: ${p => theme.fontWeights.m};
  font-size: ${p => theme.fontSizes.m};
  line-height: 20px;
  letter-spacing: -0.24px;
  color: #3e4462;
`;

export const PhotosList = styled.ul`
  margin: 0 auto;
  list-style: none;
  display: grid;
  gap: ${p => theme.spacing(14)};
  max-width: 100%;
  @media screen and (max-width: 767.98px) {
    & > li:first-child {
      padding-top: ${p => theme.spacing(25)};
    }
    & > li:last-child {
      padding-bottom: ${p => theme.spacing(50)};
    }
  }
  @media screen and ${p => p.theme.media.medium} {
    grid-template-columns: repeat(2, 336px);
    gap: ${p => theme.spacing(16)};
    padding-top: ${p => theme.spacing(25)};
    padding-bottom: ${p => theme.spacing(75)};
  }

  @media screen and ${p => p.theme.media.large} {
    grid-template-columns: repeat(4, 300px);
    gap: ${p => theme.spacing(7)};
    padding-bottom: ${p => theme.spacing(75)};
    & > li {
      padding: ${p => theme.spacing(25)} 0;
    }
  }
`;
