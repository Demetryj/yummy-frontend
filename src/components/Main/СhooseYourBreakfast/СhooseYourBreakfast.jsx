import { Link } from 'react-router-dom';
import {
  Text,
  TextBox,
  Button,
  Selected,
  ArrowRight,
} from './СhooseYourBreakfast.styled';

export const СhooseYourBreakfast = () => {
  return (
    <>
      <TextBox>
        <Text>
          <Selected>Delicious and healthy</Selected> way to enjoy a variety of
          fresh ingredients in one satisfying meal
        </Text>
        <Link to="/categories/Breakfast">
          <Button>
            See recipes <ArrowRight />
          </Button>
        </Link>
      </TextBox>
    </>
  );
};
