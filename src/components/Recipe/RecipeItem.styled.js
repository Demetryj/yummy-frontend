import styled from 'styled-components';



export const Image = styled.img`
  border-radius: ${p => p.theme.spacing(1)};
  width: ${p => p.theme.spacing(62)};
  heigth: ${p => p.theme.spacing(62)};
        @media screen and ${(p) => p.theme.media.medium} {
            width: ${p => p.theme.spacing(114)};
            heigth: ${p => p.theme.spacing(116)};
        }
    
        @media screen and ${(p) => p.theme.media.large} {
             width: ${p => p.theme.spacing(159)};
             heigth: ${p => p.theme.spacing(162)};
        }
`;

export const Card = styled.div`
  display: flex;
  background-color: ${p => p.theme.colors.whiteColor};
  width: ${p => p.theme.spacing(172)};
  heigth: ${p => p.theme.spacing(76)};
  padding: ${p => p.theme.spacing(7)} ${p => p.theme.spacing(5)};

        @media screen and ${(p) => p.theme.media.medium} {
            width: ${p => p.theme.spacing(352)};
            heigth: ${p => p.theme.spacing(144)};
            padding: ${p => p.theme.spacing(14)} ${p => p.theme.spacing(12)};
        }
    
        @media screen and ${(p) => p.theme.media.large} {
             width: ${p => p.theme.spacing(620)};
             heigth: ${p => p.theme.spacing(202)};
             padding: ${p => p.theme.spacing(20)} ${p => p.theme.spacing(20)};
        }
`;

export const Information = styled.div`
  margin-left: ${p => p.theme.spacing(7)};
        @media screen and ${(p) => p.theme.media.medium} {
              margin-left: ${p => p.theme.spacing(12)};
        }
    
        @media screen and ${(p) => p.theme.media.large} {
              margin-left: ${p => p.theme.spacing(27)};
        }
`;

export const Top = styled.image`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h3`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: 2.4;
  color: ${p => p.theme.colors.middleGreyTextColor};
  font-size: ${p => p.theme.fontSizes.s};
        @media screen and ${(p) => p.theme.media.medium} {
            font-size: ${p => p.theme.fontSizes.l};
        }
    
        @media screen and ${(p) => p.theme.media.large} {
            font-size: ${p => p.theme.fontSizes.l};
        }
`;

export const ButtonClose = styled.button`
  cursor: pointer;
  width: ${p => p.theme.spacing(12)};
  height: ${p => p.theme.spacing(12)};
  border-radius: ${p => p.theme.radii.superLight};
  padding: ${p => p.theme.spacing(2)};
     @media screen and ${(p) => p.theme.media.medium} {
            width: ${p => p.theme.spacing(19)};
            height: ${p => p.theme.spacing(19)};
            padding: ${p => p.theme.spacing(4)};
        }
    
     @media screen and ${(p) => p.theme.media.large} {
            width: ${p => p.theme.spacing(22)};
            height: ${p => p.theme.spacing(22)};
            padding: ${p => p.theme.spacing(5)};
        }
`;

export const Paragraph = styled.p`
  font-weight: ${p => p.theme.fontWeights.regular};
  color: ${p => p.theme.colors.mainTextColor};
  width: ${p => p.theme.spacing(87)};
  margin-top: ${p => p.theme.spacing(7)};
  font-size: ${p => p.theme.fontSizes.xxs};
  line-height: ${p => p.theme.spacing(5)};
  letter-spacing: -0.02em;
        @media screen and ${(p) => p.theme.media.medium} {
            width: ${p => p.theme.spacing(149)};
            margin-top: ${p => p.theme.spacing(14)};
            font-size: ${p => p.theme.fontSizes.s};
            line-height: ${p => p.theme.spacing(9)};
        }
        @media screen and ${(p) => p.theme.media.large} {
            width: ${p => p.theme.spacing(340)};
            margin-top: ${p => p.theme.spacing(20)};
            font-size: ${p => p.theme.fontSizes.xm};
            line-height: 2${p => p.theme.spacing(12)};
        }
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding: ${p => p.theme.spacing(0)};
  margin: ${p => p.theme.spacing(0)};
`;

export const Item = styled.li`
  margin-top: auto;
`;

export const Button = styled.button`
  cursor: pointer;
  text-align: center;
  font-weight: ${p => p.theme.fontWeights.regular};
  border-radius: ${p => p.theme.spacing(18)} ${p => p.theme.spacing(35)};
  width: ${p => p.theme.spacing(44)};
  height: ${p => p.theme.spacing(14)};
  padding: ${p => p.theme.spacing(3)} ${p => p.theme.spacing(7)};
  font-size: ${p => p.theme.fontSizes.x};
        @media screen and ${(p) => p.theme.media.medium} {
            width: ${p => p.theme.spacing(69)};
            height: ${p => p.theme.spacing(22)};
            padding: ${p => p.theme.spacing(6)} ${p => p.theme.spacing(16)};
            font-size: ${p => p.theme.fontSizes.s};
        }
        @media screen and ${(p) => p.theme.media.large} {
            width: ${p => p.theme.spacing(86)};
            height: ${p => p.theme.spacing(30)};
            padding: ${p => p.theme.spacing(9)} ${p => p.theme.spacing(22)};
            font-size: ${p => p.theme.fontSizes.m};
        }

`;






