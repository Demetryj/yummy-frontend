import styled from 'styled-components';
import { Field } from 'formik';

// export const Input = styled(Field)`
//   color: tomato;
// `;

export const Input = styled.input`
  border: 1px solid red;
  width: 100%;
  height: 48px;
  border-radius: ${p => p.theme.radii.light};
  outline: none;
  height: ${p => p.theme.spacing(24)};
  margin-bottom: ${p => p.theme.spacing(12)};
  margin-top: ${p => p.theme.spacing(27)};
`;

export const Label = styled.label`
  border: 1px solid green;
`;

export const P = styled.p`
  font-size: ${p => p.theme.fontSizes.l};
  cursor: pointer;
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 21px;
  padding-bottom: 21px;
  gap: 8px;

  width: 100%;
  height: 49px;
  left: 24px;
  top: 246px;

  background: #8baa36;
  border-radius: 6px;

  font-weight: 400;
  font-size: 14px;
  line-height: 18px;

  display: flex;
  align-items: center;
  text-align: center;

  color: #fafafa;
`;
