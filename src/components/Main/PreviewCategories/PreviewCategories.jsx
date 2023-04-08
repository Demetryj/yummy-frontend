import { useSelector } from 'react-redux';
import {selectRecipes,selectRecipesPopular} from '../../../redux/recipes/selectors';
import {selectUser} from '../../../redux/auth/selectors';
// import { RecipeGalleryItem } from 'components/';
// import { Gallery } from './PreviewCategories.styled';

// const categoriesPopular = ["Breakfast", "Miscellaneous", "Vegan", "Dessert"];

export const PreviewCategories = () => {
  // const dispatch = useDispatch();
const user = useSelector(selectUser);
console.log("Hello from component PreviewCategories ");
console.log("user: ", user);

const items = useSelector(selectRecipes);
console.log("Hello from component PreviewCategories ");
console.log("items: ", items);

const recipesPopular = useSelector(selectRecipesPopular);
console.log("Hello from component PreviewCategories ");
console.log("recipesPopular: ", recipesPopular);
  return (<>
  <p>Hello from PreviewCategories</p>
    {/* <Gallery>
    </Gallery> */}
    </>
  );
};

// return (
//   <List>
//     {filter
//       ? visibleContacts.map(contact => (
//           <li key={contact.id}>
//             <ContactListItem contact={contact} />
//           </li>
//         ))
//       : contacts.map(contact => (
//           <li key={contact.id}>
//             <ContactListItem contact={contact} />
//           </li>
//         ))}
//   </List>
// );
// };