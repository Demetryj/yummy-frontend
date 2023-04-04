// import { Container } from './AppBar.styled';

// export default function AppBar({ mode }) {
//   return (
//     <Container mode={mode}>
//       <h1>AppBar</h1>
//     </Container>
//   );
// }

const navItems = [
  { href: '/', text: 'Main' },
  { href: 'categories', text: 'Categories' },
  { href: 'addRecipes', text: 'AddRecipes' },
  { href: 'myRecipes', text: 'MyRecipes' },
  { href: 'favorites', text: 'Favorites' },
  { href: 'shoppingList', text: 'ShoppingList' },
  { href: 'search', text: 'Search' },
];

import { Box } from '../Box';
import { NavItem } from './AppBar.styled';

export const AppBar = () => {
  return (
    <Box>
      <Box></Box>
    </Box>
  );
};
