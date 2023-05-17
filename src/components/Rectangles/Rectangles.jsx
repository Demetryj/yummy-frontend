import { useSelector } from 'react-redux';
import { selectTheme } from 'redux/theme/selectors';
import { RectOne, RectTwo, RectThree } from './Rectangles.styled';

export const Rectangles = () => {
  const theme = useSelector(selectTheme);

  return (
    <>
      <RectOne />
      <RectTwo mode={theme} />
      <RectThree />
    </>
  );
};
