import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { selectTheme } from 'redux/theme/selectors';
import {
  AboutRecipe,
  Input,
  TextArea,
  InputSelect,
  InputSelectTitle,
  SelectCategory,
  SelectCooking,
  FormImageContainer,
  TextAreaContainer,
  BoxTitle,
  Form,
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
import cookingTime from './data/cookingTime.json';
import { MainTitle } from 'components/MainTitle';

const getFormValues = () => {
  const storedValues = localStorage.getItem('form');
  if (!storedValues)
    return {
      title: '',
      description: '',
      category: '',
      time: '',
      instructions: '',
      ingredients: [],
    };
  return JSON.parse(storedValues);
};

const AddRecipeForm = () => {
  const [fileUploaded, setFileUploaded] = useState();
  const [initialList, setInitialList] = useState(false);
  const [gettingFilterData, setGettingFilterData] = useState(false);
  const [preview, setPreview] = useState(plug);
  const [recipes, setRecipes] = useState(getFormValues);

  const theme = useSelector(selectTheme);

  useEffect(() => {
    localStorage.setItem('form', JSON.stringify(recipes));
  }, [recipes]);

  const { _id } = useSelector(selectUser);

  const dispatch = useDispatch();

  const categories = useSelector(selectCategories);
  useEffect(() => {
    dispatch(fetchCategoriesList());
  }, [dispatch]);

  const getFilterData = arr => {
    setRecipes(values => ({
      ...values,
      ingredients: arr.map(({ id, ttl, thb, size, service }) => ({
        id,
        ttl,
        thb,
        measure: size + service,
      })),
    }));
  };

  const handleChangePhoto = event => {
    const fileUpl = event.target.files[0];
    setFileUploaded(fileUpl);
    const objectUrl = window.URL.createObjectURL(fileUpl);
    setPreview(objectUrl);
  };
  const handleChange = event => {
    setGettingFilterData(false);
    setInitialList(false);
    const name = event.target.name;
    const value = event.target.value;
    setRecipes(values => ({ ...values, [name]: value }));
  };

  const resetForm = () => {
    setRecipes('');
    setPreview(plug);
    setInitialList(true);
  };
  const handleSubmit = e => {
    e.preventDefault();
    setGettingFilterData(true);
    const formData = new FormData();
    if (fileUploaded !== undefined) {
      formData.append('preview', fileUploaded);
    }
    const ingredientsToJson = JSON.stringify(recipes.ingredients);
    Object.keys(recipes).map(key =>
      key === 'ingredients'
        ? formData.append(key, ingredientsToJson)
        : formData.append(key, recipes[key])
    );
    dispatch(addRecipe({ formData, _id }));
    resetForm();
  };

  return (
    <AddRecipePage>
      <MainTitle mode={theme} title="Add recipe" />
      <AddRecipeWrap>
        <Form autoComplete="off" onSubmit={handleSubmit} id="resipeForm">
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
                mode={theme}
              />

              <Input
                type="text"
                placeholder="Enter about recipe"
                name="description"
                onChange={handleChange}
                value={recipes.description || ''}
                mode={theme}
              />

              <InputSelect mode={theme}>
                <InputSelectTitle mode={theme}>Category</InputSelectTitle>
                <SelectCategory
                  name="category"
                  onChange={handleChange}
                  value={recipes.category || ''}
                >
                  {categories.map(category => (
                    <option key={category}>{category}</option>
                  ))}
                </SelectCategory>
              </InputSelect>

              <InputSelect mode={theme}>
                <InputSelectTitle mode={theme}>Cooking time</InputSelectTitle>
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

          <IngredientsFilter
            getFilterData={getFilterData}
            setInitialList={initialList}
            gettingFilterData={gettingFilterData}
            recipes={recipes}
            mode={theme}
          />

          <TextAreaContainer>
            <BoxTitle mode={theme}>Recipe Preparation</BoxTitle>
            <TextArea
              name="instructions"
              value={recipes.instructions || ''}
              placeholder="Enter recipe"
              scroll={true}
              onChange={handleChange}
              mode={theme}
            ></TextArea>
          </TextAreaContainer>
          <ButtonAdd type="submit" mode={theme}>
            Add
          </ButtonAdd>
        </Form>
        <FollowSPopular>
          <FollowUs mode={theme} />

          <PopularRecipe mode={theme} />
        </FollowSPopular>
      </AddRecipeWrap>
    </AddRecipePage>
  );
};
export default AddRecipeForm;

// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect, useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';
// import {
//   AboutRecipe,
//   Input,
//   TextArea,
//   InputSelect,
//   SelectCategory,
//   SelectCooking,
//   FormImageContainer,
//   TextAreaContainer,
//   BoxTitle,
//   Form,
//   PageTitle,
//   AddRecipePage,
//   AddRecipeWrap,
//   FollowSPopular,
//   ButtonAdd,
// } from './AddRecipeForm.styled';
// import FollowUs from 'components/FollowUs/FollowUs';
// import PopularRecipe from 'components/PopularRecipe/PopularRecipe';
// import plug from 'images/addRecipesPages/green-plug-desk.png';
// import IngredientsFilter from 'components/IngredientsFilter/IngredientsFilter';
// import { selectCategories } from 'redux/recipes/selectors';
// import { fetchCategoriesList } from 'redux/recipes';
// import { addRecipe } from 'redux/recipes/operations';
// import { selectUser } from 'redux/auth/selectors';
// const AddRecipeForm = () => {
//   const cookingTime = [
//     { value: '' },
//     { value: '10' },
//     { value: '20' },
//     { value: '30' },
//     { value: '40' },
//     { value: '50' },
//     { value: '60' },
//     { value: '80' },
//     { value: '90' },
//     { value: '100' },
//     { value: '110' },
//     { value: '120' },
//   ];

//   const [preview, setPreview] = useState(plug);
//   const [recipes, setRecipes] = useState({
//     title: '',
//     description: '',
//     category: '',
//     time: '',
//     instructions: '',
//     ingredients: [],
//   });

//   const { _id } = useSelector(selectUser);

//   const dispatch = useDispatch();

//   const categories = useSelector(selectCategories);
//   useEffect(() => {
//     dispatch(fetchCategoriesList());
//   }, [dispatch]);

// const handleChangePhoto = event => {
//   const fileUploaded = event.target.files[0];
//   const file = new FormData();
//   const objectUrl = URL.createObjectURL(fileUploaded);
//   setPreview(objectUrl);
//   file.append(fileUploaded);
// };
//   const handleChange = event => {
//     const uuidId = uuidv4();
//     const name = event.target.name;
//     const value = event.target.value;

//     setRecipes(values => ({ ...values, preview, uuidId, [name]: value }));
//   };

//   const resetForm = () => {
//     setRecipes('');
//     setPreview(plug);
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
// dispatch(addRecipe({ recipes, _id }));
//     resetForm();
//   };

//   return (
//     <AddRecipePage>
//       <div>
//         <PageTitle>Add recipe</PageTitle>
//         <AddRecipeWrap>
//           <Form autoComplete="off" onSubmit={handleSubmit}>
//             <FormImageContainer>
//               <div>
//                 <label htmlFor="file-input">
//                   <img
//                     src={preview}
//                     alt="Receipe img"
//                     style={{
//                       maxWidth: '350px',
//                       maxHeight: '340px',
//                     }}
//                   />
//                 </label>
//                 <input
//                   id="file-input"
//                   type="file"
//                   accept="image/*"
//                   onChange={handleChangePhoto}
//                   style={{
//                     display: 'none',
//                     width: '350px',
//                     height: '340px',
//                   }}
//                 />
//               </div>
//               <AboutRecipe>
//                 <Input
//                   type="text"
//                   name="title"
//                   value={recipes.title || ''}
//                   placeholder="Enter item title"
//                   onChange={handleChange}
//                 />
//                 <Input
//                   type="text"
//                   placeholder="Enter about recipe"
//                   name="description"
//                   onChange={handleChange}
//                   value={recipes.description || ''}
//                 />
//                 <InputSelect>
//                   <div>Category</div>
//                   <SelectCategory
//                     name="category"
//                     onChange={handleChange}
//                     value={recipes.category || ''}
//                   >
//                     <option></option>

//                     {categories.map(category => (
//                       <option key={category}>{category}</option>
//                     ))}
//                   </SelectCategory>
//                 </InputSelect>
//                 <InputSelect>
//                   <div>Cooking time</div>
//                   <SelectCooking
//                     name="time"
//                     value={recipes.time || ''}
//                     onChange={handleChange}
//                   >
//                     {cookingTime.map(({ value }) => {
//                       return <option key={value}>{value}</option>;
//                     })}
//                   </SelectCooking>
//                 </InputSelect>
//               </AboutRecipe>
//             </FormImageContainer>

//             <IngredientsFilter setRecipes={setRecipes} recipes={recipes} />

//             <TextAreaContainer>
//               <BoxTitle>Recipe Preparation</BoxTitle>
//               <TextArea
//                 name="instructions"
//                 value={recipes.instructions || ''}
//                 placeholder="Enter recipe"
//                 scroll={true}
//                 onChange={handleChange}
//               ></TextArea>
//             </TextAreaContainer>
//             <ButtonAdd type="submit">Add</ButtonAdd>
//           </Form>
//           <FollowSPopular>
//             <FollowUs />

//             <PopularRecipe />
//           </FollowSPopular>
//         </AddRecipeWrap>
//       </div>
//     </AddRecipePage>
//   );
// };
// export default AddRecipeForm;
