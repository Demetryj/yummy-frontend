import {
    // TextMain, TextSub,
       Text, TextBox, Button, 
       Selected, 
      //  ImageWrap,
      //  Image
      } from "./СhooseYourBreakfast.styled"
  
  export const СhooseYourBreakfast = () => {
      return (
      <>
      {/* <TextMain><Selected>So</Selected>Yummy</TextMain>
      <TextSub>"What to cook?" is not only a recipe app, it is, in fact, your cookbook. You can add your own recipes to save them for the future.</TextSub>
      <ImageWrap>
      <Image src={require("../../../images/mainPage/vegetable-plate-mob.png")} alt="image" />
        </ImageWrap> */}
      <TextBox><Text><Selected>Delicious and healthy</Selected> way to enjoy a variety of fresh ingredients in one satisfying meal</Text>
      <Button>See recipes</Button></TextBox>
      </>   
      )
  }