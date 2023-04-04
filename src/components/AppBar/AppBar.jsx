import { Box } from '../Box';
import { NavItem, List, ListItem } from './AppBar.styled';

const navItems = [
  { href: 'categories', item: 'Categories' },
  { href: 'add', item: 'Add recipes' },
  { href: 'my', item: 'My recipes' },
  { href: 'favorite', item: 'Favorites' },
  { href: 'shopping-list', item: 'Shopping List' },
  { href: 'search', item: 'Search' },
];

export const AppBar = () => {
  return (
    <Box as="section" border="1px solid blue" px="100px">
      <Box as="header" bg="grey" display="flex" justifyContent="space-between">
        <Box border="1px solid red" display="flex" alignItems="center">
          <NavItem to={'/'}>{'MainPage'}</NavItem>
        </Box>
        <Box as="nav" border="1px solid yellow">
          <List>
            {navItems.map(({ href, item }) => (
              <ListItem key={href}>
                <NavItem to={href}>{item}</NavItem>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box border="1px solid green" display="flex" alignItems="center">
          <Box>User Profile</Box>
          <Box>Mode Toggle</Box>
        </Box>
      </Box>
    </Box>
  );
};
