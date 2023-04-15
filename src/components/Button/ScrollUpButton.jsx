import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import { ButtonScrSt } from './ScrollUpButton.styled';

export const ScrollUpButton = ({ handleClick }) => (
  <ButtonScrSt onClick={handleClick} type="button">
    <HiOutlineChevronDoubleUp />
  </ButtonScrSt>
);
