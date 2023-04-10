// import { useDispatch } from 'react-redux';
// import { register } from 'redux/auth/authOperations';

import { useState } from 'react';
import {
  AboutRecipe,
  Input,
  TextArea,
  InputSelect,
  Select,
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

import IngredientsFilter from 'components/IngredientsFilter/IngredientsFilter';
import plug from 'images/addRecipesPages/green-plug-desk.png';
const AddRecipeForm = () => {
  const [preview, setPreview] = useState(plug);
  // const [file, setFile] = useState();
  // const [selectedFile, setselectedFile] = useState(null)

  // const dispatch = useDispatch();

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
                      // display: 'none',
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
                  <Select name="" id="">
                    <option value="">fdsagvdsg</option>
                    <option value="">creahv</option>
                  </Select>
                </InputSelect>
                <InputSelect>
                  <div>Cooking time</div>
                  <Select name="" id="">
                    <option value="">fdsagvdsg</option>
                    <option value="">creahv</option>
                  </Select>
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
