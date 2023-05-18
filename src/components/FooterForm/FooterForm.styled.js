import styled from 'styled-components';
import { Form, Field } from 'formik';
import { FiMail } from 'react-icons/fi';

export const SearchForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (${p => p.theme.media.medium}) {
    margin-left: auto;
    margin-right: auto;
    flex-direction: row;
    width: ${p => p.theme.spacing(230)};
    overflow: hidden;
  }
  @media screen and (${p => p.theme.media.large}) {
    margin-left: 0;
    margin-right: 0;
    display: block;
    width: 338px;
  }
`;

export const WrapperInput = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const ErrorText = styled.p`
  position: absolute;
  top: ${p => p.theme.spacing(1)};
  left: ${p => p.theme.spacing(5)};
  font-size: ${p => p.theme.fontSizes.xxs};
  color: #e74a3b;

  @media screen and (${p => p.theme.media.medium}) {
    top: ${p => p.theme.spacing(2)};
    font-size: ${p => p.theme.fontSizes.x};
  }

  @media screen and (${p => p.theme.media.large}) {
    font-size: ${p => p.theme.fontSizes.xs};
  }
`;

export const Label = styled.label`
  display: block;
  width: 100%;
  padding: ${props => `${props.theme.space[1]}px`};
`;

export const InputContainer = styled.div`
  position: relative;
  border: 1px solid;
  border-color: white;
  opacity: 0.5;
  display: flex;
  border-radius: ${p => p.theme.radii.light};
  width: ${p => p.theme.spacing(102)};
  height: ${p => p.theme.spacing(19)};
  margin-bottom: ${p => p.theme.spacing(4)};

  @media screen and (${p => p.theme.media.medium}) {
    width: ${p => p.theme.spacing(130)};
    height: ${p => p.theme.spacing(25)};
    margin-right: ${p => p.theme.spacing(6)};
    margin-bottom: ${p => p.theme.spacing(0)};
  }

  @media screen and (${p => p.theme.media.large}) {
    width: 100%;
    height: ${p => p.theme.spacing(30)};
    margin-right: ${p => p.theme.spacing(0)};
    margin-bottom: ${p => p.theme.spacing(8)};
  }
`;

export const Input = styled(Field)`
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 100%;
  letter-spacing: -0.02em;
  color: ${p => p.theme.colors.whiteColor};
  opacity: 0.8;

  background-color: transparent;
  width: 100%;
  padding-left: ${p => p.theme.spacing(21)};
  padding-top: ${p => p.theme.spacing(5)};
  padding-bottom: ${p => p.theme.spacing(5)};
  outline: none;
  ::placeholder {
    font-weight: ${p => p.theme.fontWeights.regular};
    font-size: ${p => p.theme.fontSizes.x};
    line-height: 100%;
    letter-spacing: -0.02em;
    color: ${p => p.theme.colors.whiteTextColor};
    opacity: 0.8;

    @media screen and (${p => p.theme.media.medium}) {
      font-size: ${p => p.theme.fontSizes.s};
    }

    @media screen and (${p => p.theme.media.large}) {
      font-size: ${p => p.theme.fontSizes.xm};
    }
  }

  @media screen and (${p => p.theme.media.medium}) {
    margin-bottom: ${p => p.theme.spacing(0)};
    margin-right: ${p => p.theme.spacing(6)};
    margin-left: 0;
  }

  @media screen and (${p => p.theme.media.large}) {
    padding-top: ${p => p.theme.spacing(9)};
    padding-left: ${p => p.theme.spacing(32)};
    padding-bottom: ${p => p.theme.spacing(9)};
    margin-right: ${p => p.theme.spacing(0)};
    font-size: ${p => p.theme.fontSizes.xm};
  }
`;

export const IconMail = styled(FiMail)`
  position: absolute;
  color: ${p => p.theme.colors.whiteColor};
  opacity: 1;
  size: 12;
  top: 10px;
  left: 13px;

  @media screen and (${p => p.theme.media.medium}) {
    top: 15px;
    left: 14px;
  }
  @media screen and (${p => p.theme.media.large}) {
    size: 24px;
    top: 22px;
    left: 24px;
  }
`;

// export const Error = styled(ErrorMessage)`
//   color: ${props => props.theme.colors.red};
//   margin-bottom: ${props => `${props.theme.space[2]}px`};
// `;
