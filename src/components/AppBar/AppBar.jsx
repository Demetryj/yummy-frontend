import { useState } from 'react';
import { Box } from '../Box';
import { NavItem, List, ListItem, Paragraph } from './AppBar.styled';
import { BiRestaurant } from 'react-icons/bi';
import { FiSearch, FiUser } from 'react-icons/fi';
import { BsToggleOff,
  //  BsToggleOn
   } from 'react-icons/bs';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { HeaderModal } from '../HeaderModal';
import { RxCrossCircled } from 'react-icons/rx';


const navItems = [
  { href: 'categories', item: 'Categories' },
  { href: 'add', item: 'Add recipes' },
  { href: 'my', item: 'My recipes' },
  { href: 'favorites', item: 'Favorites' },
  { href: 'shopping-list', item: 'Shopping List' },
  {
    href: 'search',
    item: (
      <Box display="flex" alignItems="center">
        <Box display="flex" alignItems="center" mr={'8px'}>
          <FiSearch size={20} />
        </Box>
        <Box display={{ lg: 'none' }} alignItems="center">
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

    <Box as="section">
      <Box
        as="header"
        display="flex"
        justifyContent="space-between"
        py={{ xs: '3px' }}
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          width={{ xs: 40, md: 44 }}
          height={{ xs: 40, md: 44 }}
          borderRadius={12}
          bg="greenBgColor"
        >
          <NavItem to={'/'}>
            {<BiRestaurant color="whiteColor" size={30} />}
          </NavItem>
        </Box>
        <Box as="nav" display={{ xs: 'none', lg: 'flex' }}>
          <List>
            {navItems.map(({ href, item }) => (
              <ListItem key={href}>
                <NavItem to={href}>{item}</NavItem>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box display="flex" alignItems="center">
          <Box display="flex" alignItems="center" mr={{ xs: 24, md: 50 }}>
            <Box
              mr={{
                xs: 14,
              }}
              borderRadius="50%"
              width={{ xs: 34 }}
              height={{ xs: 34 }}
              overflow="hidden"
              bg="greenBgColor"
            >
              <FiUser size={{ xs: 34, md: 44 }} />
              {/* <Avatar alt="Avatar" src="" /> */}
            </Box>
            <Box>
              <Paragraph>User</Paragraph>
            </Box>
          </Box>
          <Box display={{ xs: 'none', lg: 'flex' }}>
            <BsToggleOff size={32} />
          </Box>
          <Box onClick={toggleModal} display={{ xs: 'flex', lg: 'none' }}>
            <HiOutlineMenuAlt2 size={28} />
          </Box>
        </Box>
      </Box>
      {open && (
        <HeaderModal onClose={toggleModal}>
          <Box
            mx="auto"
            width={{ xs: 375, md: '100%' }}
            px={{ xs: 16, md: 32 }}
            py={{ xs: 18 }}
            display="flex"
            flexDirection="column"
            height="100vh"
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box
                onClick={toggleModal}
                display="flex"
                alignItems="center"
                justifyContent="center"
                width={{ xs: 40, md: 44 }}
                height={{ xs: 40, md: 44 }}
                borderRadius={12}
                bg="greenBgColor"
              >
                <NavItem to={'/'}>
                  {<BiRestaurant color="whiteColor" />}
                </NavItem>
              </Box>

              <Box onClick={toggleModal}>
                <RxCrossCircled size={32} />
              </Box>
            </Box>
            <Box
              as="nav"
              flexGrow={1}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <List>
                {navItems.map(({ href, item }) => (
                  <ListItem key={href} onClick={toggleModal}>
                    <NavItem to={href}>{item}</NavItem>
                  </ListItem>
                ))}
              </List>
            </Box>
            <Box>
              <BsToggleOff size={32} />
            </Box>
          </Box>
        </HeaderModal>
      )}
    </Box>

  );
};
