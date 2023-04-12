import {
  Img,
  ImgDesc,
  ImgDescWrapper,
  ImgWrapper,
} from './SearchedRecipesItem.styled';

export const SearchedRecipesItem = ({ title, img }) => {
  return (
    <ImgWrapper>
      <Img src={img} alt="title" />
      <ImgDescWrapper>
        <ImgDesc>{title}</ImgDesc>
      </ImgDescWrapper>
    </ImgWrapper>
  );
};
