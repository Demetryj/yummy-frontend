import styled from 'styled-components';

export const SearchFormContainer = styled.div`
  position: relative;
  width: 295px;
  height: 52px;
  background-color: ${p => p.theme.colors.whiteTextColor};
  border-top-left-radius: 30px;
  border-top-right-radius: 80px;
  border-bottom-left-radius: 80px;
  border-bottom-right-radius: 30px;
  margin: 0 24px 83px;
  border: ${p => p.theme.colors.whiteTextColor};
  color: ${p => p.theme.colors.greyTextColor};
  font-weight:${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 18px;

  @media (${p => p.theme.media.medium}) {
    width: 369px;
    height: 59px;
    font-size: ${p => p.theme.fontSizes.m};
    line-height: 24px;
    margin: 0 0 195px;
  }

  @media (${p => p.theme.media.large}) {
    width: 510px;
    height: 71px;
    font-size:${p => p.theme.fontSizes.m};
    line-height: 24px;
  }`

export const SearchForm = styled.form`
  display: flex;
  justify-content: flex-end;
  border-radius: 30px, 80px;
  height: 100%;`

export const Input = styled.input`
  width: 100%;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 80px;
  border: ${p => p.theme.borders.none};
  background-color: transparent;
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 18px;
  padding-left: 32px;
  color: ${p => p.theme.colors.greyTextColor};
  @media (${p => p.theme.media.medium}) {
    font-weight: ${p => p.theme.fontWeights.regular};
    font-size:${p => p.theme.fontSizes.m};
    line-height: 24px;
  }

  &:hover {
    border: ${p => p.theme.borders.none};
    outline: ${p => p.theme.borders.none};
  }
  &:active {
    border: ${p => p.theme.borders.none};
    outline: ${p => p.theme.borders.none};
  }
  &:focus {
    border: ${p => p.theme.borders.none};
    outline: ${p => p.theme.borders.none};
  }

  &::placeholder {
    font-weight: ${p => p.theme.fontWeights.regular};
    font-size:${p => p.theme.fontSizes.xs};
    line-height: 18px;
    color: ${p => p.theme.colors.greyTextColor};
    @media (${p => p.theme.media.medium}){
        font-size: ${p => p.theme.fontSizes.m};
        line-height: 24px;
    }
  }`

export const Button = styled.button`
position: absolute;
display: block;
width: 113px;
height: 52px;
top: -0.5px;
right: -0.5px;

border-top-left-radius: 30px;
border-top-right-radius: 80px;
border-bottom-left-radius: 80px;
border-bottom-right-radius: 30px;

font-weight: ${p => p.theme.fontWeights.regular};
font-size: ${p => p.theme.fontSizes.s};
line-height: 21px;
text-align: center;

color:${p => p.theme.colors.whiteTextColor};
background:${p => p.theme.colors.footerDarckTextColor};

cursor: pointer;
border: ${p => p.theme.borders.none};
outline: ${p => p.theme.borders.none};
&:hover {
    background:${p => p.theme.colors.greenTextColor};
}
  @media (${p => p.theme.media.medium}) {
    {
      width: 161px;
      height: 59px;
      font-size: ${p => p.theme.fontSizes.m};
      line-height: 24px;
    }
  }

  @media (${p => p.theme.media.large}) {
    {
      width: 161px;
      height: 70px;
    }
  }
`
