import { Link } from 'react-router-dom';
import {
      Text,
      TextBox,
      Button, 
      Selected, 
      } from "./СhooseYourBreakfast.styled"
import {BsArrowRight}  from "react-icons/bs";
  
  export const СhooseYourBreakfast = () => {
      return (
      <>
      <TextBox>
        <Text><Selected>Delicious and healthy</Selected> way to enjoy a variety of fresh ingredients in one satisfying meal</Text>
        <Link to='/categories/breakfast'>
        <Button>See recipes<BsArrowRight></BsArrowRight></Button>
        </Link>
        </TextBox>
      </>   
      )
  }