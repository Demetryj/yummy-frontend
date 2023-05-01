import styled from 'styled-components';

export const PaginationWrapper = styled.div`
  position: relative;
  max-width: ${p => p.theme.spacing(137.5)};
  height: ${p => p.theme.spacing(25.5)};
  width: fit-content;

  box-sizing: border-box;
  margin: 0 auto;
  margin-top: ${p => p.theme.spacing(20)};
  padding: 12px 15px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;

  background-color: ${p => p.theme.colors.paginationBgColor};
  box-shadow: ${p => p.theme.shadows.pagination};
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
    margin-top: ${p => p.theme.spacing(25)};
  }

  & .MuiPagination-ul {
    margin-top: 0;
    display: flex;
    justify-content: center;
    max-width: 100%;
    flex-wrap: nowrap;
    gap: 0px;
    color: ${p => p.theme.colors.paginationColor};
  }

  & .MuiPaginationItem-page {
    color: ${p => p.theme.colors.paginationColor};
    padding: 0;
    min-width: ${p => p.theme.spacing(13.5)};
  }

  & .MuiPaginationItem-icon {
    fill: ${p => p.theme.colors.paginationColor};
  }

  & .MuiPaginationItem-ellipsis {
    color: ${p => p.theme.colors.paginationColor};
  }

  & .MuiPaginationItem-page.Mui-selected {
    background-color: ${p => p.theme.colors.footerLogoBgColor};
    transition: ${p => p.theme.transitions.main};
    color: ${p => p.theme.colors.yummyColor};
    width: ${p => p.theme.spacing(13.5)};
    height: ${p => p.theme.spacing(13.5)};

    &:hover,
    &:focus {
      background-color: ${p => p.theme.colors.footerLogoBgColor};
      color: ${p => p.theme.colors.yummyColor};
    }
  }
`;
