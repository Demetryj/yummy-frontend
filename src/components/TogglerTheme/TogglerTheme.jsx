import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from 'redux/theme/themeSlice';
import { selectTheme } from 'redux/theme/selectors';
import { Switcher, Checkbox, Label, Ball } from './TogglerTheme.styled';

export const TogglerTheme = ({ device }) => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);

  const onChangeTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';

    dispatch(toggleTheme(newTheme));
  };

  return (
    <Switcher device={device}>
      <Checkbox
        type="checkbox"
        checked={theme === 'dark'}
        id="theme-switcher"
        onChange={onChangeTheme}
      />
      <Label mode={theme} htmlFor="theme-switcher">
        <Ball />
      </Label>
    </Switcher>
  );
};
