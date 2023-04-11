import { ImgDesc, ImgDescWrapper, ImgWrapper, Img } from './SearchFragments.styled';

export const SearchItem = ({ title, img }) => {
  return (
    <ImgWrapper>
      <Img src={img} alt="title" />
      <ImgDescWrapper>
        <ImgDesc>{title}</ImgDesc>
      </ImgDescWrapper>
    </ImgWrapper>
  );
};
