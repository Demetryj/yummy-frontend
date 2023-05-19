import React from 'react';
import { useSelector } from 'react-redux';
import { selectTheme } from 'redux/theme/selectors';
import { Title } from './MainTitle.styled';

export const MainTitle = ({ title }) => {
  const theme = useSelector(selectTheme);

  return (
    <>
      <Title mode={theme}>{title}</Title>
    </>
  );
};
