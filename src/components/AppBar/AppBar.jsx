import { useState } from 'react';
import { Box } from '../Box';
import { NavItem, List, ListItem, Avatar, Paragraph } from './AppBar.styled';
import { BiRestaurant } from 'react-icons/bi';
import { FiSearch, FiUser } from 'react-icons/fi';
import { BsToggleOff, BsToggleOn } from 'react-icons/bs';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { HeaderModal } from '../HeaderModal';
import { RxCrossCircled } from 'react-icons/rx';

const navItems = [
  { href: 'categories', item: 'Categories' },
  { href: 'add', item: 'Add recipes' },
  { href: 'my', item: 'My recipes' },
  { href: 'favorite', item: 'Favorites' },
  { href: 'shopping-list', item: 'Shopping List' },
  // { href: 'search', item: <FiSearch /> },
  {
    href: 'search',
    item: (
      <Box display="flex" alignItems="center">
        <Box display="flex" alignItems="center">
          <FiSearch size={20} />
        </Box>
        <Box display={{ md: 'none' }} alignItems="center">
          Search
        </Box>
      </Box>
    ),
  },
];

export const AppBar = () => {
  const [open, setOpen] = useState(false);

  const toggleModal = () => {
    setOpen(!open);
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
            onClick={toggleModal}
            border="1px solid red"
            display={{ xs: 'flex', md: 'none' }}
          >
            <HiOutlineMenuAlt2 size={28} />
          </Box>
        </Box>
      </Box>
      {open && (
        <HeaderModal onClose={toggleModal}>
          <Box px={{ xs: 16 }} py={{ xs: 18 }}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              border="1px solid blue"
            >
              <Box onClick={toggleModal}>
                <NavItem to={'/'}>
                  {<BiRestaurant size={32} color="red" />}
                </NavItem>
              </Box>

              <Box onClick={toggleModal}>
                <RxCrossCircled size={32} />
              </Box>
            </Box>
            <Box as="nav" border="1px solid red" display={{ xs: 'block' }}>
              <List>
                {navItems.map(({ href, item }) => (
                  <ListItem key={href} onClick={toggleModal}>
                    <NavItem to={href}>{item}</NavItem>
                  </ListItem>
                ))}
              </List>
            </Box>
            <Box border="1px solid red" display={{ xs: 'flex' }}>
              <BsToggleOff size={32} />
            </Box>
          </Box>
        </HeaderModal>
      )}
    </Box>
  );
};
