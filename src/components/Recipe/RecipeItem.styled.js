import styled from 'styled-components';



export const Image = styled.img`
  border-radius: 2px;
  padding: 40px;
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
        @media screen and ${(p) => p.theme.media.medium} {
            width: 704px;
            heigth: 288px;
        }
    
        @media screen and ${(p) => p.theme.media.large} {
             width: 1240px;
             heigth: 404px;
        }
`;

export const Information = styled.div`
margin: 14px 0px;
        @media screen and ${(p) => p.theme.media.medium} {
            margin: 28px 0px;
        }
    
        @media screen and ${(p) => p.theme.media.large} {
            margin: 40px 0px;
        }
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

export const Paragraph = styled.p`
  font-weight: 400;
  color: ${p => p.theme.colors.mainTextColor};
  width: 173px;
  margin-top: 14px;
  font-size: 8px;
  line-height: 10px;
  letter-spacing: -0.02em;
        @media screen and ${(p) => p.theme.media.medium} {
            width: 298px;
            margin-top: 28px;
            font-size: ${p => p.theme.fontSizes.s};
            line-height: 18px;
        }
        @media screen and ${(p) => p.theme.media.large} {
            width: 679px;
            margin-top: 40px;
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
`;

