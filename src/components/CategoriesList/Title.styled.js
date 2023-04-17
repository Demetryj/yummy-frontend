import { Title } from 'components/MainTitle/MainTitle.styled';
import styled from 'styled-components';

export const TitleStyled = styled(Title)`
  letter-spacing: -0.02em;
  @media screen and ${p => p.theme.media.medium} {
    line-height: 32px;
  }

  @media screen and ${p => p.theme.media.large} {
    line-height: 44px;
  }
`;

