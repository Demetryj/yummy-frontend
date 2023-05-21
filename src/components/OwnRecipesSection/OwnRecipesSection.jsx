import { useSelector } from 'react-redux';
import { selectTheme } from 'redux/theme/selectors';
import { Container } from 'components/Container';
import { EmptyPagePlug } from 'components/EmptyPagePlug';
import { ContentWrapper, Wrapper } from 'components/Favorites/Favorites.styled';
import { Loader } from 'components/Loader';
import { PaginationComp } from 'components/Pagination';
import { RecipeItem } from 'components/Recipe';
import { MainTitle } from 'components/MainTitle';

export const OwnRecipesSection = ({
  recipes,
  location,
  titleText,
  emptyPageText,
  img,
  total,
  page,
  limit,
  handleChange,
  isLoading,
}) => {
  const theme = useSelector(selectTheme);

  return (
    <Wrapper>
      <Container>
        <MainTitle title={titleText} />
        {isLoading && <Loader />}
        <>
          {recipes && recipes.length > 0 ? (
            <ContentWrapper>
              {recipes.map(item => {
                return (
                  <li key={item._id}>
                    <RecipeItem
                      location={location}
                      id={item._id}
                      img={item.preview ?? img}
                      title={item.title ?? 'No name'}
                      text={<span>{item.description ?? 'No description'}</span>}
                      time={item.time ? `${item.time} min` : ''}
                      mode={theme}
                    />
                  </li>
                );
              })}
            </ContentWrapper>
          ) : (
            <EmptyPagePlug location={location} text={emptyPageText} />
          )}
          {recipes && recipes.length > 0 && (
            <PaginationComp
              count={Math.ceil(total / limit)}
              page={page}
              handleChange={handleChange}
            />
          )}
        </>
      </Container>
    </Wrapper>
  );
};
