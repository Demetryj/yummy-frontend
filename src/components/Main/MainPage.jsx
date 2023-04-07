import {СhooseYourBreakfast} from "../Main/СhooseYourBreakfast/СhooseYourBreakfast";
import { Search } from "../Main/Search/Search";
// import {PreviewCategories} from "./PreviewCategories/PreviewCategories";
import {Container,TextMain, TextSub, ImageWrap, Image} from "./MainPage.styled"
import { Selected } from "./СhooseYourBreakfast/СhooseYourBreakfast.styled";

export const MainPage = () => {
    return ( 
      <>
    <TextMain><Selected>So</Selected>Yummy</TextMain>
    <TextSub>"What to cook?" is not only a recipe app, it is, in fact, your cookbook. You can add your own recipes to save them for the future.</TextSub>
    <ImageWrap>
    <Image src={require("../../images/mainPage/vegetable-plate-mob.png")} alt="image" />
      </ImageWrap>
      <Container><СhooseYourBreakfast/></Container>
      <Container><Search/></Container>
      {/* <Container><PreviewCategories/></Container> */}
      </>
      
      )
}