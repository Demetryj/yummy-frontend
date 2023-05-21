import styled from 'styled-components';

export const Product = styled.li`
  display: flex;
  justify-content: space-between;
  position: relative;
  &::after {
    content: '';
    display: block;
    width: 100%;
    position: absolute;
    border-bottom: ${p => p.theme.borders.normal} #e0e0e0;
    bottom: -45%;
  }
  @media screen and (max-width: 767px) {
    align-items: center;
  }
  @media screen and ${p => p.theme.media.medium} {
    align-items: top;
  }
`;

export const ProductPicture = styled.img`
  width: ${p => p.theme.spacing(30)};
  height: ${p => p.theme.spacing(30)};
  background: ${p => p.theme.colors.footerLogoBgColor};
  border-radius: ${p => p.theme.radii.light};
  padding: ${p => p.theme.spacing(3)};
  margin-right: ${p => p.theme.spacing(0)};
  margin-left: ${p => p.theme.spacing(4)};
  @media screen and ${p => p.theme.media.medium} {
    width: ${p => p.theme.spacing(46)};
    height: ${p => p.theme.spacing(48)};
    border-radius: ${p => p.theme.radii.normal};
    padding: ${p => p.theme.spacing(4)} ${p => p.theme.spacing(3)};
    margin-left: ${p => p.theme.spacing(0)};
  }
  @media screen and ${p => p.theme.media.large} {
    margin-left: ${p => p.theme.spacing(20)};
  }
`;

export const ProductName = styled.p`
  margin-left: ${p => p.theme.spacing(5)};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 1.2;
  color: ${p =>
    p.mode === 'light'
      ? p.theme.colors.subtitleTextColor
      : p.theme.colors.whiteTextColor};

  @media screen and ${p => p.theme.media.medium} {
    margin-left: ${p => p.theme.spacing(8)};
    font-size: ${p => p.theme.fontSizes.m};
    line-height: 1.5;
  }
`;

export const ProductQuantity = styled.div`
  min-width: ${p => p.theme.spacing(18)};
  height: ${p => p.theme.spacing(11)};
  margin-left: auto;
  padding: ${p => p.theme.spacing(0)} ${p => p.theme.spacing(3)};
  background: ${p => p.theme.colors.greenTextColor};
  border-radius: ${p => p.theme.radii.superLight};
  text-align: center;
  line-height: 2.3;
  font-weight: ${p => p.theme.fontWeights.semiBold};
  font-size: ${p => p.theme.fontSizes.x};
  text-align: center;
  color: ${p => p.theme.colors.whiteTextColor};
  @media screen and ${p => p.theme.media.medium} {
    min-width: ${p => p.theme.spacing(34)};
    height: ${p => p.theme.spacing(17)};
    font-size: ${p => p.theme.fontSizes.xm};
    line-height: 1.9;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: ${p => p.theme.borders.none};
  margin-right: ${p => p.theme.spacing(15)};
  margin-left: ${p => p.theme.spacing(25)};
  @media screen and ${p => p.theme.media.medium} {
    width: ${p => p.theme.spacing(6)};
    height: ${p => p.theme.spacing(6)};
    margin-top: ${p => p.theme.spacing(0)};
    margin-right: ${p => p.theme.spacing(25)};
    margin-left: ${p => p.theme.spacing(57)};
  }
  @media screen and ${p => p.theme.media.large} {
    margin-right: ${p => p.theme.spacing(36)};
    margin-left: ${p => p.theme.spacing(89)};
  }
`;
