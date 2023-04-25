import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
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
import { selectCategories } from 'redux/recipes/selectors';
import { fetchCategoriesList } from 'redux/recipes';
import { addRecipe } from 'redux/recipes/operations';
import { selectUser } from 'redux/auth/selectors';
import cookingTime from '../AddRecipeForm/data/cookingTime.json'
const AddRecipeForm = () => {
  

  const [preview, setPreview] = useState(plug);
  const [recipes, setRecipes] = useState({
    title: '',
    description: '',
    category: '',
    time: '',
    instructions: '',
    ingredients: [],
  });
// console.log(recipes)
  const { _id } = useSelector(selectUser);

  const dispatch = useDispatch();

  const categories = useSelector(selectCategories);
  useEffect(() => {
    dispatch(fetchCategoriesList());
  }, [dispatch]);

  const handleChangePhoto = event => {
    const fileUploaded = event.target.files[0];
    const file = new FormData();
    const objectUrl = URL.createObjectURL(fileUploaded);
    setPreview(objectUrl);
    file.append(`recipeImgUrl`, fileUploaded);
  };
  const handleChange = event => {
    const uuidId = uuidv4();
    const name = event.target.name;
    const value = event.target.value;

    setRecipes(values => ({ ...values, preview, uuidId, [name]: value }));
  };

  const resetForm = () => {
    setRecipes('');
    setPreview(plug);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addRecipe({ recipes, _id }));
    resetForm();
  };

  return (
    <AddRecipePage>
      <div>
        <PageTitle>Add recipe</PageTitle>

        <AddRecipeWrap>
          <Form autoComplete="off" onSubmit={handleSubmit}>
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
                <Input
                  type="text"
                  name="title"
                  value={recipes.title || ''}
                  placeholder="Enter item title"
                  onChange={handleChange}
                />
                <Input
                  type="text"
                  placeholder="Enter about recipe"
                  name="description"
                  onChange={handleChange}
                  value={recipes.description || ''}
                />
                <InputSelect>
                  <div>Category</div>
                  <SelectCategory
                    name="category"
                    onChange={handleChange}
                    value={recipes.category || ''}
                  >
                    <option></option>

                    {categories.map(category => (
                      <option key={category}>{category}</option>
                    ))}
                  </SelectCategory>
                </InputSelect>
                <InputSelect>
                  <div>Cooking time</div>
                  <SelectCooking
                    name="time"
                    value={recipes.time || ''}
                    onChange={handleChange}
                  >
                    {cookingTime.map(({ value }) => {
                      return <option key={value}>{value}</option>;
                    })}
                  </SelectCooking>
                </InputSelect>
              </AboutRecipe>
            </FormImageContainer>

            <IngredientsFilter setRecipes={setRecipes} recipes={recipes} />

            <TextAreaContainer>
              <BoxTitle>Recipe Preparation</BoxTitle>
              <TextArea
                name="instructions"
                value={recipes.instructions || ''}
                placeholder="Enter recipe"
                scroll={true}
                onChange={handleChange}
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
