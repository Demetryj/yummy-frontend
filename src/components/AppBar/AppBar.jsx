import * as React from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Box } from '../Box';
import { NavItem, List, ListItem, CrossContainer } from './AppBar.styled';
import { FiSearch } from 'react-icons/fi';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { HeaderModal } from '../HeaderModal';
import logoDark from '../../images/logo/logoDark.png';
import cross from '../../images/logo/cross-header.svg';
import { TogglerTheme } from 'components/TogglerTheme';
// import switchBodyOff from '../../images/logo/switch-body-off.png';
// import switchOff from '../../images/logo/switch-off.png';
import { Rectangles } from '../Rectangles';
import { UserLogo } from '../UserLogo';
import { ToastContainer } from 'react-toastify';

const navItems = [
  { href: 'categories/Beef', item: 'Categories' },
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
  const location = useLocation();

  const routesArr = [
    'categories',
    'add',
    'favorites',
    'my',
    'search',
    'shopping-list',
    '*',
  ];

  const isImgPage = routesArr.some(route => location.pathname.includes(route));

  const toggleModal = () => {
    setOpen(!open);
  };

  return (
    <Box as="section">
      <Box
        as="header"
        zIndex={'10'}
        position="relative"
        display="flex"
        justifyContent="space-between"
        py={{ xs: 18 }}
        px={{ xs: 16, md: 32, lg: 100 }}
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
          <NavItem to={'/'}>{<img src={logoDark} alt="logoDark" />}</NavItem>
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
          <UserLogo />
          <TogglerTheme device="desktop" />
          <Box
            onClick={toggleModal}
            display={{ xs: 'flex', lg: 'none' }}
            ml={{ xs: 14, md: 50 }}
          >
            <HiOutlineMenuAlt2 size={28} cursor="pointer" />
          </Box>
        </Box>
        {isImgPage && <Rectangles />}
      </Box>
      {open && (
        <HeaderModal onClose={toggleModal}>
          <Box
            mx="auto"
            maxWidth={{ xs: '100%' }}
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
              width="100%"
            >
              <Box
                onClick={toggleModal}
                width={{ xs: 40, md: 44 }}
                height={{ xs: 40, md: 44 }}
                borderRadius={12}
                bg="greenBgColor"
              >
                <NavItem to={'/'}>
                  {<img src={logoDark} alt="logoDark" />}
                </NavItem>
              </Box>

              <CrossContainer onClick={toggleModal}>
                {<img src={cross} alt="cross" />}
              </CrossContainer>
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
            <TogglerTheme device="mobile" />
          </Box>
        </HeaderModal>
      )}
      <ToastContainer />
    </Box>
  );
};
