import ContentLoader from 'react-content-loader';

export const RecipeImageLoader = ({ viewBox }) => (
  <ContentLoader
    speed={5}
    viewBox={`0 0 ${viewBox} ${viewBox}`}
    backgroundColor="#8baa36"
    foregroundColor="#ecebeb"
    backgroundOpacity={0.5}
    title="Recipe"
    style={{
      borderRadius: '8px',
    }}
  >
    <rect
      x="0"
      y="0"
      rx="2"
      ry="2"
      width={`${viewBox}`}
      height={`${viewBox}`}
    />
  </ContentLoader>
);
