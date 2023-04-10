import {
  RecipeContainer,
  ImageBlock,
  Label,
  TextContainer,
  IngName,
  IngDescr,
  IngQuantity,
  CustomCheckbox,
  RealCheckbox,
} from './RecipeIngredientItem.styled';
import sprite from '../../images/symbol-defs.svg';
export const RecipeIngredientItem = ({ ingredient }) => {
  console.log(ingredient);
  const { thb, ttl, measure, _id, desc } = ingredient;
  return (
    <RecipeContainer>
      <Label>
        <ImageBlock>
          <img src={thb} alt="poster" />
        </ImageBlock>
        {/* <TextContainer> */}
        <IngName>{ttl}</IngName>
        {/* <IngDescr>{desc}</IngDescr> */}
        {/* </TextContainer> */}
        <IngQuantity>{measure}</IngQuantity>
        <RealCheckbox
          type="checkbox"

          // onChange={handleToggle}
        />
        {/* //    <RealCheckbox
      //   type="checkbox"
      //   onChange={addToShoppingList}
      //   checked={obj.inShoppingList}
      // /> */}

        <CustomCheckbox>
          <svg>
            <use href={sprite + '#icon-checkbox'} />
          </svg>
        </CustomCheckbox>
      </Label>
    </RecipeContainer>
  );
};
