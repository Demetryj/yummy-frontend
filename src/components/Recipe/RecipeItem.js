import { useDispatch } from 'react-redux';
import React from 'react';
import {
    Image,
    Information,
    Card,
    NavLink,
    List,
    Item,
    Button,
    Paragraph,
    Title,
} from './RecipeItem.styled';



export const RecipeItem = ({ img, title, description, instructions, time}) => {
     const dispatch = useDispatch();
  return (
    <>
    <Card>
        <Image
          src={img}
          alt={title}
          width="100"
        />
    <Information>
        <Title>{title}</Title>
        <Paragraph>{description}</Paragraph>
        <Paragraph>{instructions}</Paragraph>
    <List>
        <Item>
          <Paragraph>{time}</Paragraph>
        </Item>
        <Item>
          <Button
            onClick={() => dispatch()}
            as={NavLink}
            to="/"
          >
            See recipe
          </Button>
        </Item>
    </List>
    </Information>
    </Card>
    </>
  );
}


