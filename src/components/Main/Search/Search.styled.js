import styled from 'styled-components';

export const SearchFormContainer = styled.div`
  position: relative;
  width:  ${p => p.theme.spacing(147.5)};
  height: ${p => p.theme.spacing(26)};
  background-color: ${p => p.theme.colors.whiteTextColor};
  border-top-left-radius: ${p => p.theme.radii.modalProfile};
  border-top-right-radius: 80px;
  border-bottom-left-radius: 80px;
  border-bottom-right-radius: ${p => p.theme.radii.modalProfile};
  margin: ${p => p.theme.spacing(0)} ${p => p.theme.spacing(12)} ${p => p.theme.spacing(41.5)};
  border: ${p => p.theme.colors.whiteTextColor};
  color: ${p => p.theme.colors.greyTextColor};
  font-weight:${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: ${p => p.theme.spacing(9)};

  @media (${p => p.theme.media.medium}) {
    width: ${p => p.theme.spacing(184.5)};
    height: ${p => p.theme.spacing(29.5)};
    font-size: ${p => p.theme.fontSizes.m};
    line-height: ${p => p.theme.spacing(12)};
    margin: ${p => p.theme.spacing(0)} ${p => p.theme.spacing(0)} ${p => p.theme.spacing(97.5)};
  }

  @media (${p => p.theme.media.large}) {
    width: ${p => p.theme.spacing(255)};
    height: ${p => p.theme.spacing(35.5)};
    font-size:${p => p.theme.fontSizes.m};
    line-height:${p => p.theme.spacing(12)};
  }`

export const SearchForm = styled.form`
  display: flex;
  justify-content: flex-end;
  border-radius: 30px, 80px;
  height: 100%;`

export const Input = styled.input`
  width: 100%;
  border-top-left-radius: ${p => p.theme.radii.modalProfile};
  border-bottom-left-radius: 80px;
  border: ${p => p.theme.borders.none};
  background-color: transparent;
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: ${p => p.theme.spacing(9)};
  padding-left: ${p => p.theme.spacing(16)};
  color: ${p => p.theme.colors.greyTextColor};
  @media (${p => p.theme.media.medium}) {
    font-weight: ${p => p.theme.fontWeights.regular};
    font-size:${p => p.theme.fontSizes.m};
    line-height:${p => p.theme.spacing(12)};
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
    line-height: ${p => p.theme.spacing(9)};
    color: ${p => p.theme.colors.greyTextColor};
    @media (${p => p.theme.media.medium}){
        font-size: ${p => p.theme.fontSizes.m};
        line-height: ${p => p.theme.spacing(12)};
    }
  }`

export const Button = styled.button`
position: absolute;
display: block;
width:${p => p.theme.spacing(56.5)};
height: ${p => p.theme.spacing(26)};
top: -0.5px;
right: -0.5px;

border-top-left-radius: ${p => p.theme.radii.modalProfile};
border-top-right-radius: 80px;
border-bottom-left-radius: 80px;
border-bottom-right-radius: ${p => p.theme.radii.modalProfile};

font-weight: ${p => p.theme.fontWeights.regular};
font-size: ${p => p.theme.fontSizes.s};
line-height:${p => p.theme.spacing(10.5)};
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
      width:${p => p.theme.spacing(80.5)};
      height:${p => p.theme.spacing(29.5)};
      font-size: ${p => p.theme.fontSizes.m};
      line-height:${p => p.theme.spacing(12)};
    }
  }

  @media (${p => p.theme.media.large}) {
    {
      width: ${p => p.theme.spacing(80.5)};
      height: ${p => p.theme.spacing(35)};
    }
  }
`
