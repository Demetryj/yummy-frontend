export const RecipePageHero = ({
  time,
  title,
  description,
  favorites,
  owner,
}) => {
  const hasFavorites = favorites.includes(owner);
  return (
    <container>
      <h2>{title}</h2>
      <p>{description}</p>
      <button>
        {hasFavorites
          ? 'Remove from favorites receipes'
          : 'Add to favorite receipes'}
      </button>
      <p>{time}</p>
    </container>
  );
};
