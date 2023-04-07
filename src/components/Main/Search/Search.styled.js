import styled from 'styled-components';

export const SearchFormContainer = styled.div`
height: 52px;
padding-left: 40px;
padding-right: 40px;

@media (min-width: 768px) {
    background-color: orange;
  }
`
export const SearchForm = styled.form`
position: relative;
// margin-top: 115px;
height: 52px;
`
export const Input = styled.input`
display: inline-block;
box-sizing: border-box;
width: 100%;

clip-path: inset(25% 0 25% 0 round 15% 35% 15% 30%);
padding: 50px 42px;

border: none;
outline: none;
background-color: #FAFAFA;
border: 1px solid #F0F0F0;

font-weight: 400;
font-size: 12px;
line-height: 18px;

&::placeholder {
font: inherit;
font-size: 12px;
color: #BDBDBD;
}
`

export const Button = styled.button`
position: absolute;
right: 0;
top: 0;

clip-path: inset(25% 0 25% 0 round 15% 35% 15% 30%);
padding: 50px 42px;

font-weight: 400;
font-size: 14px;
line-height: 21px;
text-align: center;

color: #FAFAFA;
background: #22252A;

cursor: pointer;
border: none;
outline: none;
&:hover {
    background: #8BAA36;
}
`
