import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';
import PlugIsEmptyDesktop from 'images/searchPage/search_desk_tab@2x.png';
import PlugIsEmptyMobile from 'images/searchPage/search_mob@2x.png';

export const Container = styled.section`
  padding-top: ${p => p.theme.spacing(26)};
  padding-bottom: ${p => p.theme.spacing(62)};

  @media screen and ${p => p.theme.media.medium} {
    padding-top: ${p => p.theme.spacing(37)};
    padding-bottom: ${p => p.theme.spacing(125)};
  }

  @media screen and ${p => p.theme.media.large} {
    padding-top: ${p => p.theme.spacing(51)};
    padding-bottom: ${p => p.theme.spacing(118)};
  }
`;

export const Panel = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${p => p.theme.spacing(5)};
  margin-top: ${p => p.theme.spacing(25)};
  background-color: ${p => p.theme.colors.greenTextColor};
  border-radius: ${p => p.theme.radii.normal};
  @media screen and ${p => p.theme.media.medium} {
    margin-top: ${p => p.theme.spacing(36)};
    padding: ${p => p.theme.spacing(8)} ${p => p.theme.spacing(10)};
  }
  @media screen and ${p => p.theme.media.large} {
    padding: ${p => p.theme.spacing(8)} ${p => p.theme.spacing(20)};
  }
`;

export const PanelСontrol = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${p => p.theme.spacing(12)};
  @media screen and ${p => p.theme.media.medium} {
    gap: ${p => p.theme.spacing(39)};
  }
  @media screen and ${p => p.theme.media.large} {
    gap: ${p => p.theme.spacing(71)};
  }
`;

export const Title = styled.div`
  font-weight: ${p => p.theme.fontWeights.semiBold};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 1.5;
  color: ${p => p.theme.colors.whiteTextColor};
  @media screen and ${p => p.theme.media.medium} {
    font-size: ${p => p.theme.fontSizes.xm};
  }
  @media screen and ${p => p.theme.media.large} {
    line-height: 1.44;
  }
`;

export const ShoppingList = styled.ul`
  position: relative;
  display: grid;
  text-align: center;
  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: repeat(1, 1fr);
  margin: ${p => p.theme.spacing(0)} auto;
  margin-top: ${p => p.theme.spacing(16)};
  gap: ${p => p.theme.spacing(25)};

  @media screen and ${p => p.theme.media.medium} {
    margin-top: ${p => p.theme.spacing(25)};
    gap: ${p => p.theme.spacing(45)};
  }
`;

export const Wrapper = styled.div`
  margin-top: ${p => p.theme.spacing(25)};
  @media screen and ${p => p.theme.media.medium} {
    margin-top: ${p => p.theme.spacing(50)};
  }
`;

export const IsEmptyText = styled.div`
  font-size: ${p => p.theme.spacing(7)};
  text-align: center;
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: 1;
  letter-spacing: -0.02em;
  margin-bottom: ${p => p.theme.spacing(50)};
  opacity: 0.5;
  @media screen and ${p => p.theme.media.medium} {
    font-size: ${p => p.theme.spacing(12)};
  }
`;

export const IsEmptyImage = styled.div`
  width: ${p => p.theme.spacing(104)};
  height: ${p => p.theme.spacing(66)};
  margin: auto;
  background-image: url(${PlugIsEmptyMobile});
  background-size: contain;
  margin-bottom: ${p => p.theme.spacing(16)};
  @media screen and ${p => p.theme.media.medium} {
    width: ${p => p.theme.spacing(208)};
    height: ${p => p.theme.spacing(133)};
    background-image: url(${PlugIsEmptyDesktop});
  }
`;

export const ClickToUp = styled.button`
  display: flex;
  position: fixed;
  bottom: ${p => p.theme.spacing(35)};
  right: ${p => p.theme.spacing(15)};
  color: ${p => p.theme.colors.greenColor};
  background-color: transparent;
  animation: 10s ${keyframes`${bounce}`} infinite;
`;
