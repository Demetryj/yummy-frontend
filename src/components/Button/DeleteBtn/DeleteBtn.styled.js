import styled from 'styled-components';

export const DeleteBtnWrapper = styled.button`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  padding: 5px;
  cursor: pointer;

  border-radius: ${p => p.theme.radii.btnIcon};
  background-color: ${p =>
    p.location === 'recipes'
      ? p.theme.colors.greenTextColor
      : p.theme.colors.paginationBg};
  transition: ${p => p.theme.transitions.main};

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.btnDarckBgColor};
  }

  &:hover svg,
  &:focus svg {
    stroke: ${p => p.theme.colors.bcgWhiteColor};
  }

  @media screen and (${p => p.theme.media.medium}) {
    width: 38px;
    height: 38px;
    padding: 8px;
  }

  @media screen and (${p => p.theme.media.large}) {
    width: 44px;
    height: 44px;
    padding: 10px;
  }

  & svg {
    stroke: ${p =>
      p.location === 'recipes'
        ? p.theme.colors.bcgWhiteColor
        : p.theme.colors.mainTextColor};
    width: 14px;
    height: 14px;

    @media screen and (${p => p.theme.media.medium}) {
      width: 22px;
      height: 22px;
    }

    @media screen and (${p => p.theme.media.large}) {
      width: 24px;
      height: 24px;
    }
  }
`;
