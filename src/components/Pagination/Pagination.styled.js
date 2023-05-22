import styled from 'styled-components';

export const PaginationWrapper = styled.div`
  position: relative;
  max-width: ${p => p.theme.spacing(137.5)};
  height: ${p => p.theme.spacing(25.5)};
  width: fit-content;

  box-sizing: border-box;
  margin: 0 auto;

  padding: 12px 15px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;

  background-color: ${p =>
    p.mode === 'light'
      ? p.theme.colors.paginationBgColor
      : p.theme.colors.bgModalDark};
  box-shadow: ${p =>
    p.mode === 'light' ? p => p.theme.shadows.pagination : 'none'};
  border-radius: ${p => p.theme.radii.pagination};

  & nav {
    max-width: 100%;
  }

  @media screen and (${p => p.theme.media.medium}) {
    width: ${p =>
      p.location === 'favorite' ? p.theme.spacing(218) : p.theme.spacing(162)};
    height: ${p =>
      p.location === 'favorite'
        ? p.theme.spacing(27.5)
        : p.theme.spacing(27.5)};
    max-width: ${p => p.theme.spacing(162)};
    height: ${p => p.theme.spacing(27.5)};
    padding: 14px 24px;
  }

  & .MuiPagination-ul {
    margin-top: 0;
    display: flex;
    justify-content: center;
    max-width: 100%;
    flex-wrap: nowrap;
    gap: 8px;
    color: ${p => p.theme.colors.paginationColor};
  }

  & .MuiPaginationItem-page {
    color: ${p =>
      p.mode === 'light'
        ? p.theme.colors.paginationColor
        : p.theme.colors.whiteColor};
    padding: 0;
    transition: ${p => p.theme.transitions.main};

    &:hover,
    &:focus {
      background-color: ${p =>
        p.mode === 'light'
          ? p.theme.colors.footerLogoBgColor
          : p.theme.colors.greenBgColor};
    }
  }

  & .MuiPaginationItem-previousNext {
    transition: ${p => p.theme.transitions.main};

    &:hover,
    &:focus {
      background-color: ${p =>
        p.mode === 'light'
          ? p.theme.colors.footerLogoBgColor
          : p.theme.colors.greenBgColor};
    }
  }

  & .MuiPaginationItem-icon {
    fill: ${p =>
      p.mode === 'light'
        ? p.theme.colors.paginationColor
        : p.theme.colors.whiteColor};
  }

  & .MuiPaginationItem-ellipsis {
    color: ${p => p.theme.colors.paginationColor};
  }

  & .MuiPaginationItem-page.Mui-selected {
    background-color: ${p =>
      p.mode === 'light'
        ? p.theme.colors.footerLogoBgColor
        : p.theme.colors.greenBgColor};

    color: ${p =>
      p.mode === 'light'
        ? p.theme.colors.yummyColor
        : p.theme.colors.whiteColor};

    transition: ${p => p.theme.transitions.main};

    &:hover,
    &:focus {
      background-color: ${p =>
        p.mode === 'light'
          ? p.theme.colors.footerLogoBgColor
          : p.theme.colors.greenBgColor};
    }
  }
`;
