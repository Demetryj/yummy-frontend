import { useSelector } from 'react-redux';
import { selectTheme } from 'redux/theme/selectors';
import { Container, Desc, Img } from './SearchedItemNotFound.styled';

import NotFoundDesk1x from 'images/searchPage/search_desk_tab.png';
import NotFoundMob1x from 'images/searchPage/search_mob.png';
import NotFoundDesk2x from 'images/searchPage/search_desk_tab@2x.png';
import NotFoundMob2x from 'images/searchPage/search_mob@2x.png';

export const SearchedItemNotFound = () => {
  const theme = useSelector(selectTheme);

  return (
    <Container>
      <picture>
        <source
          srcSet={`${NotFoundDesk1x} 1x, ${NotFoundDesk2x} 2x`}
          media="(min-width: 768px)"
        />
        <source
          srcSet={`${NotFoundMob1x} 1x, ${NotFoundMob2x} 2x`}
          media="(max-width: 767px)"
        />
        <Img
          src="images/searchPage/search_mob.png"
          alt="Vegetables falling out of the basket"
        />
      </picture>
      <Desc mode={theme}>Try looking for something else.. </Desc>
    </Container>
  );
};
