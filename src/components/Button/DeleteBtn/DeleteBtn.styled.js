import styled from 'styled-components';

export const DeleteBtnWrapper = styled.button`
  width: ${p => p.theme.spacing(12)};
  height: ${p => p.theme.spacing(12)};
  display: flex;
  justify-content: center;
  align-items: center;

  padding: ${p => p.theme.spacing(2.5)};
  cursor: pointer;

  border-radius: ${p => p.theme.radii.btnIcon};

  background-color: ${p => p.theme.colors.greenTextColor};
  transition: ${p => p.theme.transitions.main};

  &:hover,
  &:focus {
    background-color: ${p =>
      p.mode === 'light'
        ? p.theme.colors.btnDarckBgColor
        : p.theme.colors.bcgWhiteColor};
  }

  @media screen and (${p => p.theme.media.medium}) {
    width: ${p => p.theme.spacing(19)};
    height: ${p => p.theme.spacing(19)};
    padding: ${p => p.theme.spacing(4)};
  }

  @media screen and (${p => p.theme.media.large}) {
    width: ${p => p.theme.spacing(22)};
    height: ${p => p.theme.spacing(22)};
    padding: ${p => p.theme.spacing(5)};
  }

  & svg {
    width: ${p => p.theme.spacing(7)};
    height: ${p => p.theme.spacing(7)};
    fill: ${p => p.theme.colors.whiteColor};
    transition: ${p => p.theme.transitions.main};

    @media screen and (${p => p.theme.media.medium}) {
      width: ${p => p.theme.spacing(11)};
      height: ${p => p.theme.spacing(11)};
    }

    @media screen and (${p => p.theme.media.large}) {
      width: ${p => p.theme.spacing(12)};
      height: ${p => p.theme.spacing(12)};
    }
  }

  &:hover > svg,
  &:focus > svg {
    fill: ${p => p.mode !== 'light' && p.theme.colors.greenColor};
  }
`;
