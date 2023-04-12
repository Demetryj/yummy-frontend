import { Title } from 'components/MainTitle/MainTitle.styled';
import styled from 'styled-components';

export const TitleStyled = styled(Title)`
  color: ${p => p.theme.colors.titleTextColor};
`;
export const TitleWrapper = styled.div`
  width: 100%;
  padding: 50px 0;
  @media screen and ${p => p.theme.media.large} {
    padding: 100px 0;
  }
`;
