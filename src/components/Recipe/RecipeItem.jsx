import {
  Image,
  Information,
  Card,
  Description,
  Title,
  TitleWrapper,
  TimeWrapper,
  Time,
} from './RecipeItem.styled';
import { NavLinkSkew } from 'components/NavLinkSkew';

import { DeleteBtn } from 'components/Button/DeleteBtn';
import { useMedia } from 'hooks/useMedia';
import { useNavigate } from 'react-router-dom';

export const RecipeItem = ({ img, title, text, time, location, id, mode }) => {
  const { isTablet } = useMedia();
  const navigate = useNavigate();
  const onClick = id => navigate(`/recipe/${id}`, { replace: true });

  return (
    <Card location={location} mode={mode}>
      {!isTablet && location === 'favorite' ? (
        <Image location={location} onClick={() => onClick(id)}>
          <img src={img} alt={title} />
        </Image>
      ) : (
        <Image location={location} onClick={() => onClick(id)}>
          <img src={img} alt={title} />
        </Image>
      )}

      <Information location={location}>
        <TitleWrapper location={location}>
          <Title mode={mode}>{title}</Title>

          {location === 'favorite' && (
            <DeleteBtn
              location={location}
              id={id}
              navigate={`/favorites`}
              mode={mode}
            />
          )}
          {location === 'recipes' && (
            <DeleteBtn
              location={location}
              id={id}
              navigate={`/my`}
              mode={mode}
            />
          )}
        </TitleWrapper>

        <Description location={location} mode={mode}>
          {text.length > 80 ? `${text.substring(0, 80)}...` : text}
        </Description>

        <TimeWrapper>
          <Time mode={mode}>{time}</Time>

          <NavLinkSkew
            navigate={`/recipe/${id}`}
            location={location}
            text="See recipe"
            mode={mode}
          />
        </TimeWrapper>
      </Information>
    </Card>
  );
};
