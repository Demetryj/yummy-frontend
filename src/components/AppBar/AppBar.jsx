import { Box } from '../Box';
import { NavItem, List, ListItem, Avatar } from './AppBar.styled';
import { BiRestaurant } from 'react-icons/bi';
import { FiSearch, FiUser } from 'react-icons/fi';
import { BsToggleOff, BsToggleOn } from 'react-icons/bs';
import { display } from 'styled-system';

const navItems = [
  { href: 'categories', item: 'Categories' },
  { href: 'add', item: 'Add recipes' },
  { href: 'my', item: 'My recipes' },
  { href: 'favorite', item: 'Favorites' },
  { href: 'shopping-list', item: 'Shopping List' },
  { href: 'search', item: <FiSearch /> },
];

export const AppBar = () => {
  return (
    <Box as="section" border="1px solid blue" px="100px">
      <Box as="header" bg="grey" display="flex" justifyContent="space-between">
        <Box border="1px solid red" display="flex" alignItems="center">
          <NavItem to={'/'}>{<BiRestaurant size={32} color="red" />}</NavItem>
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
          <Box display="flex">
            {/* <Avatar alt="Avatar" src="" /> */}
            <FiUser size={24} />
            <p>User</p>
          </Box>
          <Box>
            <BsToggleOff size={32} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
