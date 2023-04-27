import styled from 'styled-components';

export const PaginationWrapper = styled.div`
  position: relative;
  max-width: 275px;
  height: 51px;
  width: fit-content;

  box-sizing: border-box;
  margin: 0 auto;
  margin-top: 40px;
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
    width: ${p => (p.location === 'favorite' ? '436px' : '324px')};
    height: ${p => (p.location === 'favorite' ? '55px' : '55px')};
    max-width: 324px;
    height: 55px;
    padding: 14px 24px;
    margin-top: 50px;
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
    min-width: 27px;
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
    width: 27px;
    height: 27px;

    &:hover,
    &:focus {
      background-color: ${p => p.theme.colors.footerLogoBgColor};
      color: ${p => p.theme.colors.yummyColor};
    }
  }
`;
