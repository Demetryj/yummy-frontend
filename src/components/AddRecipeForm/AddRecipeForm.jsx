import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {
  AboutRecipe,
  Input,
  TextArea,
  InputSelect,
  SelectCategory,
  SelectCooking,
  FormImageContainer,
  TextAreaContainer,
  BoxTitle,
  Form,
  PageTitle,
  AddRecipePage,
  AddRecipeWrap,
  FollowSPopular,
  ButtonAdd,
} from './AddRecipeForm.styled';
import FollowUs from 'components/FollowUs/FollowUs';
import PopularRecipe from 'components/PopularRecipe/PopularRecipe';
import plug from 'images/addRecipesPages/green-plug-desk.png';
import IngredientsFilter from 'components/IngredientsFilter/IngredientsFilter';
import { selectIngredients } from 'redux/ingredients/selectors';
import { fetchIngredients } from 'redux/ingredients/operations';
const AddRecipeForm = () => {
  const cookingTime = [
    { value: '10' },
    { value: '20' },
    { value: '30' },
    { value: '40' },
    { value: '50' },
    { value: '60' },
    { value: '80' },
    { value: '90' },
    { value: '100' },
    { value: '110' },
    { value: '120' },
  ];

  // const [category, setCategory] = useState();
  const [preview, setPreview] = useState(plug);
  // const [ingredient, setIngredient] = useState()
  // const [selectedFile, setselectedFile] = useState(null)

  const dispatch = useDispatch();

  const ingredient = useSelector(selectIngredients);

  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    // dispatch();
    // register({
    //   name: form.elements.name.value,
    //   email: form.elements.email.value,
    //   password: form.elements.password.value,
    // })
    form.reset();
  };

  const handleChangePhoto = event => {
    const fileUploaded = event.target.files[0];
    const file = new FormData();
    const objectUrl = URL.createObjectURL(fileUploaded);
    setPreview(objectUrl);
    file.append(`recipeImgUrl`, fileUploaded);
  };

  return (
    <AddRecipePage>
      <div>
        <PageTitle>Add recipe</PageTitle>

        <AddRecipeWrap>
          <Form onSubmit={handleSubmit} autoComplete="off">
            <FormImageContainer>
              <div>
                <label htmlFor="file-input">
                  <img
                    src={preview}
                    alt="Receipe img"
                    style={{
                      maxWidth: '350px',
                      maxHeight: '340px',
                    }}
                  />
                </label>
                <input
                  id="file-input"
                  type="file"
                  accept="image/*"
                  onChange={handleChangePhoto}
                  style={{
                    display: 'none',
                    width: '350px',
                    height: '340px',
                  }}
                />
              </div>

              <AboutRecipe>
                <Input type="text" placeholder="Enter item title" />
                <Input type="text" placeholder="Enter about recipe" />
                <InputSelect>
                  <div>Category</div>
                  <SelectCategory name="" id="">
                    {ingredient.map(({ _id, ttl }) => (
                      <option key={_id}>{ttl}</option>
                    ))}
                  </SelectCategory>
                </InputSelect>
                <InputSelect>
                  <div>Cooking time</div>
                  <SelectCooking name="" id="">
                    {cookingTime.map(({ value }) => {
                      return <option key={value}>{value}</option>;
                    })}
                  </SelectCooking>
                </InputSelect>
              </AboutRecipe>
            </FormImageContainer>

            <IngredientsFilter />

            <TextAreaContainer>
              <BoxTitle>Recipe Preparation</BoxTitle>
              <TextArea
                name=""
                id=""
                placeholder="Enter recipe"
                scroll={true}
              ></TextArea>
            </TextAreaContainer>
            <ButtonAdd type="submit">Add</ButtonAdd>
          </Form>
          <FollowSPopular>
            <FollowUs />

            <PopularRecipe />
          </FollowSPopular>
        </AddRecipeWrap>
      </div>
    </AddRecipePage>
  );
};
export default AddRecipeForm;
