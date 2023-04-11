import { RotatingLines } from 'react-loader-spinner';

export const LoaderSmall = () => {
  return (
    <RotatingLines
      strokeColor="black"
      strokeWidth="5"
      animationDuration="0.75"
      width="14"
      visible={true}
    />
  );
};
