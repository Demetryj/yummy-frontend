import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const SearchForm = styled(Form)`
  @media screen and ${p => p.theme.media.medium} {
    margin-left: auto;
    margin-right: auto;
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
  margin-left: auto;
  margin-right: auto;
  background-color: transparent;
  color: ${p => p.theme.colors.whiteColor};
  width: ${p => p.theme.spacing(102)};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes.x};
  line-height: 100%;
  letter-spacing: -0.02em;
  padding-top: ${p => p.theme.spacing(5)};
  padding-bottom: ${p => p.theme.spacing(5)};
  margin-bottom: ${p => p.theme.spacing(4)};
  padding-left: ${p => p.theme.spacing(21)};
  padding-right: ${p => p.theme.spacing(21)};
  border-radius: ${p => p.theme.radii.light};
  border-color: ${p => p.theme.colors.whiteColor};
  outline: none;
  opacity: 0.5;

  @media screen and ${p => p.theme.media.medium} {
    margin-bottom: ${p => p.theme.spacing(0)};
    width: 100%;
    margin-right: ${p => p.theme.spacing(6)};
    margin-left: 0;
  }

  @media screen and ${p => p.theme.media.large} {
    width: 100%;
    margin-bottom: ${p => p.theme.spacing(8)};
    padding-top: ${p => p.theme.spacing(9)};
    padding-bottom: ${p => p.theme.spacing(9)};
    font-size: ${p => p.theme.fontSizes.xm};
  }
`;

export const Error = styled(ErrorMessage)`
  color: ${props => props.theme.colors.red};
  margin-bottom: ${props => `${props.theme.space[2]}px`};
`;
