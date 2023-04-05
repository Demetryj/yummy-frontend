import { Box } from '../Box';
import { NavItem, List, ListItem, Avatar, Paragraph } from './AppBar.styled';
import { BiRestaurant } from 'react-icons/bi';
import { FiSearch, FiUser } from 'react-icons/fi';
import { BsToggleOff, BsToggleOn } from 'react-icons/bs';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';

const navItems = [
  { href: 'categories', item: 'Categories' },
  { href: 'add', item: 'Add recipes' },
  { href: 'my', item: 'My recipes' },
  { href: 'favorite', item: 'Favorites' },
  { href: 'shopping-list', item: 'Shopping List' },
  { href: 'search', item: <FiSearch /> },
];

// const MobileMenu = () => {
//   return (
//     <Box width={1} height={1} bg="red">
//       <h2>Mobile Menu</h2>
//     </Box>
//   );
// };

export const AppBar = () => {
  const handleMenuOpen = () => {
    console.log('Menu Open');
  };

  return (
    <Box as="section" border="1px solid blue" px={{ xs: 16 }} mt={{ xs: 18 }}>
      <Box
        as="header"
        display="flex"
        justifyContent="space-between"
        py={{ xs: '3px' }}
      >
        <Box
          border="1px solid red"
          display="flex"
          justifyContent="center"
          alignItems="center"
          width={{ xs: 40 }}
          height={{ xs: 40 }}
          borderRadius={12}
          bg="#EBF3D4"
        >
          <NavItem to={'/'}>{<BiRestaurant size={32} color="red" />}</NavItem>
        </Box>
        <Box
          as="nav"
          border="1px solid yellow"
          display={{ xs: 'none', md: 'flex' }}
        >
          <List>
            {navItems.map(({ href, item }) => (
              <ListItem key={href}>
                <NavItem to={href}>{item}</NavItem>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box border="1px solid green" display="flex" alignItems="center">
          <Box
            display="flex"
            border="1px solid green"
            alignItems="center"
            mr={{ xs: 24 }}
          >
            <Box
              mr={{
                xs: 14,
              }}
              border="1px solid orange"
              borderRadius="50%"
              width={{ xs: 34 }}
              height={{ xs: 34 }}
              overflow="hidden"
            >
              <FiUser size={34} />
              {/* <Avatar alt="Avatar" src="" /> */}
            </Box>
            <Box>
              <Paragraph>User</Paragraph>
            </Box>
          </Box>
          <Box border="1px solid red" display={{ xs: 'none', md: 'flex' }}>
            <BsToggleOff size={32} />
          </Box>
          <Box
            onClick={handleMenuOpen}
            border="1px solid red"
            display={{ xs: 'flex', md: 'none' }}
          >
            <HiOutlineMenuAlt2 size={28} />
          </Box>
        </Box>
      </Box>
      {/* <MobileMenu /> */}
    </Box>
  );
};
