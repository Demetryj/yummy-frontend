import styled from 'styled-components';
export const FormImageContainer = styled.div`
  display: flex;
  gap: 50px;
  padding-bottom: 100px;
`;
export const PageTitle = styled.h1`
  display: inline-block;
  padding-bottom: 100px;
`;

export const Form = styled.form`
  max-width: 800px;
`;
export const AboutRecipe = styled.div`
  display: flex;
  gap: 40px;
  flex-direction: column;
  width: 400px;
`;

export const Input = styled.input`
  padding-bottom: 15px;
  decoration: none;
  border: none;
  border-bottom: 1px solid black;
  width: 100%;
`;

export const BoxTitle = styled.h2`
  padding-bottom: 30px;
`;
export const InputSelect = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid black;
  padding-bottom: 15px;
`;
export const Select = styled.select`
  border: none;
  margin-left: 30px;
`;

export const TextAreaContainer = styled.div`
  max-width: 500px;
  padding-bottom: 30px;
`;
export const TextArea = styled.textarea`
  padding: 15px;
  resize: none;
  width: 100%;
  height: 230px;
  scroll-behavior: auto;
`;
