import {СhooseYourBreakfast} from "../Main/СhooseYourBreakfast/СhooseYourBreakfast";
import { Search } from "../Main/Search/Search";
// import {PreviewCategories} from "./PreviewCategories/PreviewCategories";
import {
  Container,
   ContainerHero,TextMain, TextSub,
  //   ImageWrap, Image, ImageTopLeftSpinach,
  // ImageTopTriangle ,
  //    ImageTopRightSpinach
  } from "./MainPage.styled"
import { Selected } from "./СhooseYourBreakfast/СhooseYourBreakfast.styled";

export const MainPage = () => {
    return ( 
      <>
      <ContainerHero>
      {/* <ImageWrap>
      <Image src={require("../../images/mainPage/vegetable-plate-mob.png")} alt="image" />
      </ImageWrap>
        <ImageTopLeftSpinach src={require("../../images/spinach/mobile/spinach-top-left-mob.png")}></ImageTopLeftSpinach>
        <ImageTopRightSpinach src={require("../../images/spinach/mobile/spinach-top-right-mob.png")} ></ImageTopRightSpinach>
        <ImageTopTriangle src={require("../../images/mainPage/triangle_bg2.png")}></ImageTopTriangle> */}
    <TextMain><Selected>So</Selected>Yummy</TextMain>
    <TextSub>"What to cook?" is not only a recipe app, it is, in fact, your cookbook. You can add your own recipes to save them for the future.</TextSub>  
      <Container><СhooseYourBreakfast/></Container>
      <Container><Search/></Container>
      </ContainerHero>
      {/* <Container><PreviewCategories/></Container> */}
      </>
      
      )
}