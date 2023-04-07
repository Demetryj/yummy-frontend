import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const SearchForm = styled(Form)`
  @media screen and ${p => p.theme.media.medium} {
    margin-left: auto;
    margin-right: auto;
    border: 1px solid red;
    display: flex;
    width: ${p => p.theme.spacing(221)};
    overflow: hidden;
  }
  @media screen and ${p => p.theme.media.large} {
    margin-left: 0;
    margin-right: 0;
    display: block;
    width: 339px;
  }
`;

export const Label = styled.label`
  display: block;
  width: 100%;
  padding: ${props => `${props.theme.space[1]}px`};
`;

export const Input = styled(Field)`
  display: flex;
  /* display: block; */
  /* align-items: center; */
  /* justify-content: center; */
  /* width: 204px; */
  margin-left: auto;
  margin-right: auto;
  background-color: transparent;
  color: ${p => p.theme.colors.whiteColor};
  width: ${p => p.theme.spacing(102)};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes.x};
  line-height: 100%;
  letter-spacing: -0.02em;

  border-radius: ${p => p.theme.radii.light};
  padding-top: ${p => p.theme.spacing(5)};
  padding-bottom: ${p => p.theme.spacing(5)};
  margin-bottom: ${p => p.theme.spacing(4)};
  padding-left: ${p => p.theme.spacing(21)};
  padding-right: ${p => p.theme.spacing(21)};

  border-top-style: #fafafa;
  border-right-style: #fafafa;
  border-left-style: #fafafa;
  border-bottom-style: #fafafa;

  /* border: 1px solid '#fafafa'; */
  /* border: none; */
  outline: none;

  @media screen and ${p => p.theme.media.medium} {
    margin-bottom: ${p => p.theme.spacing(0)};
    width: 100%;
    margin-right: ${p => p.theme.spacing(6)};
    margin-left: 0;
  }
`;

export const Error = styled(ErrorMessage)`
  color: ${props => props.theme.colors.red};
  margin-bottom: ${props => `${props.theme.space[2]}px`};
`;
