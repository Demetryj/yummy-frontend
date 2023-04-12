import { TitleStyled, TitleWrapper } from './Title.styled';

export const Title = ({ title }) => {
  return (
    <TitleWrapper>
      <TitleStyled>{title}</TitleStyled>
    </TitleWrapper>
  );
};
