import { SearchItem, SearchItemNotFound } from '.';
import { List } from './SearchFragments.styled';

export const SearchList = ({ recipes }) => {
  console.log('recipes:', recipes);

  return (
    <div>
      {recipes.length > 0 ? (
        <List>
          {recipes.map(({ _id, title, thumb }) => {
            return (
              <li key={_id}>
                <SearchItem title={title} img={thumb} />
              </li>
            );
          })}
        </List>
      ) : (
        <SearchItemNotFound />
      )}
    </div>
  );
};
