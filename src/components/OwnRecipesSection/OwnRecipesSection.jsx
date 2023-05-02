import { Container } from 'components/Container/Container';
import { EmptyPagePlug } from 'components/EmptyPagePlug/EmptyPagePlug';
import { ContentWrapper, Wrapper } from 'components/Favorites/Favorites.styled';
import { Loader } from 'components/Loader';
import { PaginationComp } from 'components/Pagination/Pagination';
import { RecipeItem } from 'components/Recipe/RecipeItem';
import { Title } from 'components/Title/Title';

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
}) => (
  <Wrapper>
    <Container>
      <Title>{titleText}</Title>
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
