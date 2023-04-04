import styled from 'styled-components';



export const Image = styled.img`
  border-radius: 2px;
  padding: 40px;
        @media screen and (min-width: 440px) {
            width: 124px;
            heigth: 124px;
        }
    
        @media screen and (min-width: 768px) {
            width: 228px;
            heigth: 232px;
        }
    
        @media screen and (min-width: 1440px) {
             width: 318px;
             heigth: 324px;
        }
`;

export const Card = styled.div`
  display: flex;
  background-color: ${p => p.theme.colors.whiteColor};
        @media screen and (min-width: 440px) {
            width: 343px;
            heigth: 152px;
        }
    
        @media screen and (min-width: 768px) {
            width: 704px;
            heigth: 288px;
        }
    
        @media screen and (min-width: 1440px) {
             width: 1240px;
             heigth: 404px;
        }
`;

export const Information = styled.div`

`;

export const Title = styled.h3`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: 2.4;
  color: ${p => p.theme.colors.middleGreyTextColor};
  @media screen and (min-width: 440px) {
            font-size: ${p => p.theme.fontSize.l};
            margin-top: 14px;
        }
    
        @media screen and (min-width: 768px) {
            font-size: ${p => p.theme.fontSize.l};
            margin-top: 28px;
        }
    
        @media screen and (min-width: 1440px) {
            font-size: ${p => p.theme.fontSize.s};
            margin-top: 40px;
        }
`;

export const Paragraph = styled.p`
  font-weight: 400;
  color: ${p => p.theme.colors.mainTextColor};
        @media screen and (min-width: 440px) {
            width: 173px;
            margin-top: 14px;
            font-size: ${p => p.theme.fontSize.xs};
            line-height: 1;
        }
    
        @media screen and (min-width: 768px) {
            width: 298px;
            margin-top: 28px;
            font-size: ${p => p.theme.fontSize.s};
            line-height: 2.4;
        }
    
        @media screen and (min-width: 1440px) {
            width: 298px;
            margin-top: 40px;
            font-size: ${p => p.theme.fontSize.xm};
            line-height: 2.4;
        }
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding-left: 0px;
`;

export const Item = styled.li`
  margin-top: auto;
`;

export const Button = styled.li`
  cursor: pointer;
`;

