import styled from 'styled-components';



export const Image = styled.img`
  border-radius: 2px;
  width: 124px;
  heigth: 124px;
        @media screen and ${(p) => p.theme.media.medium} {
            width: 228px;
            heigth: 232px;
        }
    
        @media screen and ${(p) => p.theme.media.large} {
             width: 318px;
             heigth: 324px;
        }
`;

export const Card = styled.div`
  display: flex;
  background-color: ${p => p.theme.colors.whiteColor};
  width: 343px;
  heigth: 152px;
  padding: ${p => p.theme.spacing(7)} ${p => p.theme.spacing(5)};

        @media screen and ${(p) => p.theme.media.medium} {
            width: 704px;
            heigth: 288px;
            padding: ${p => p.theme.spacing(14)} ${p => p.theme.spacing(12)};
        }
    
        @media screen and ${(p) => p.theme.media.large} {
             width: 1240px;
             heigth: 404px;
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
  width: 24px;
  height: 24px;
  border-radius: ${p => p.theme.radii.superLight};
  padding: ${p => p.theme.spacing(2)};
     @media screen and ${(p) => p.theme.media.medium} {
            width: 38px;
            height: 38px;
            padding: ${p => p.theme.spacing(4)};
        }
    
     @media screen and ${(p) => p.theme.media.large} {
            width: 44px;
            height: 44px;
            padding: ${p => p.theme.spacing(5)};
        }
`;

export const Paragraph = styled.p`
  font-weight: 400;
  color: ${p => p.theme.colors.mainTextColor};
  width: 173px;
  margin-top: ${p => p.theme.spacing(7)};
  font-size: ${p => p.theme.fontSizes.xxs};
  line-height: 10px;
  letter-spacing: -0.02em;
        @media screen and ${(p) => p.theme.media.medium} {
            width: 298px;
            margin-top: ${p => p.theme.spacing(14)};
            font-size: ${p => p.theme.fontSizes.s};
            line-height: 18px;
        }
        @media screen and ${(p) => p.theme.media.large} {
            width: 679px;
            margin-top: ${p => p.theme.spacing(20)};
            font-size: ${p => p.theme.fontSizes.xm};
            line-height: 24px;
        }
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding: 0px;
  margin: 0px;
`;

export const Item = styled.li`
  margin-top: auto;
`;

export const Button = styled.button`
  cursor: pointer;
  text-align: center;
  font-weight: ${p => p.theme.fontWeights.regular};
  border-radius: 35px 70px;
  width: 87px;
  height: 27px;
  padding: ${p => p.theme.spacing(3)} ${p => p.theme.spacing(7)};
  font-size: ${p => p.theme.fontSizes.x};
        @media screen and ${(p) => p.theme.media.medium} {
            width: 138px;
            height: 45px;
            padding: ${p => p.theme.spacing(6)} ${p => p.theme.spacing(16)};
            font-size: ${p => p.theme.fontSizes.s};
        }
        @media screen and ${(p) => p.theme.media.large} {
            width: 172px;
            height: 59px;
            padding: ${p => p.theme.spacing(9)} ${p => p.theme.spacing(22)};
            font-size: ${p => p.theme.fontSizes.m};
        }

`;






