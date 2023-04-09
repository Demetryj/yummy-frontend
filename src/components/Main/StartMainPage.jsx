import { СhooseYourBreakfast } from "./СhooseYourBreakfast/СhooseYourBreakfast";
import { Search } from "./Search/Search";
import { PreviewCategories } from "./PreviewCategories/PreviewCategories";
import {
Container,
ContainerHero,
TextMain,
TextSub,
} from "./StartMainPage.styled"
import { Selected } from "./СhooseYourBreakfast/СhooseYourBreakfast.styled";

export const StartMainPage = () => {
    return ( 
      <>
      <ContainerHero>
      <TextMain><Selected>So</Selected>Yummy</TextMain>
      <TextSub>"What to cook?" is not only a recipe app, it is, in fact, your cookbook. You can add your own recipes to save them for the future.</TextSub>  
      <Container><СhooseYourBreakfast/></Container>
      <Container><Search/></Container>
      </ContainerHero>
      <Container>
        <PreviewCategories/>
        </Container>
      </> 
      )
}