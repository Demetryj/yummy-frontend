import {
  RecipeContainer,
  ImageBlock,
  Label,
  TextContainer,
  IngName,
  IngDescr,
  IngQuantity,
} from './RecipeIngredientItem.styled';
export const RecipeIngredientItem = ({ ingredient }) => {
  console.log(ingredient);
  const { thb, ttl, measure, _id, desc } = ingredient;
  return (
    <RecipeContainer>
      <Label>
        <ImageBlock>
          <img src={thb} alt="poster" />
        </ImageBlock>
        <TextContainer>
          <IngName>{ttl}</IngName>
          <IngDescr>{desc}</IngDescr>
        </TextContainer>
        <IngQuantity>{measure}</IngQuantity>
        <input
          type="checkbox"
          name="ingridient"
          value={ttl}
          id="ingridient"
          // onChange={handleToggle}
        />
      </Label>
    </RecipeContainer>
  );
};
