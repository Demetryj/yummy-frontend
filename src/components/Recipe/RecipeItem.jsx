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
    ButtonClose,
    Top,
} from './RecipeItem.styled';

import { CgTrash } from 'react-icons/cg';


export const RecipeItem = ({ img, title, description, instructions, time}) => {
     const dispatch = useDispatch();
  return (
    <Card>
        <Image
          src={img}
          alt={title}
          width="100"
        />
      <Information>
         <Top>
        <Title>{title}</Title>
        <ButtonClose>
            <CgTrash size='huge'></CgTrash>
        </ButtonClose>
          </Top>
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
  );
}


