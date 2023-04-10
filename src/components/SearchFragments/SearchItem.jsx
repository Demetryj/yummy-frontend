import { ImgDesc, ImgDescWrapper, ImgWrapper } from './SearchFragments.styled';

export const SearchItem = ({ title, img }) => {
  return (
    <ImgWrapper>
      <img src={img} alt="title" />
      <ImgDescWrapper>
        <ImgDesc>{title}</ImgDesc>
      </ImgDescWrapper>
    </ImgWrapper>
  );
};
