import ContentLoader from 'react-content-loader';

export const ImageLoader = ({ w, h }) => (
  <ContentLoader
    speed={6}
    width={w}
    height={h}
    viewBox="0 0 320 340"
    backgroundColor="#8baa367e"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="60" rx="2" ry="2" width="320" height="320" />
  </ContentLoader>
);

export default ImageLoader;
