import { useState } from 'react';
import { Box } from '../Box';
import { NavItem, List, ListItem } from './MobileMenu.styled';
import logoDark from '../../images/logo/logoDark.png';
import cross from '../../images/logo/cross-header.svg';
import switchBodyOff from '../../images/logo/switch-body-off.png';
import switchOff from '../../images/logo/switch-off.png';
import { FiSearch } from 'react-icons/fi';

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

export const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  const toggleModal = () => {
    setOpen(!open);
  };

  return (
    <Box
      mx="auto"
      width={{ xs: 375, md: '100%' }}
      px={{ xs: 16, md: 32 }}
      py={{ xs: 18 }}
      display="flex"
      flexDirection="column"
      height="100vh"
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box
          onClick={toggleModal}
          width={{ xs: 40, md: 44 }}
          height={{ xs: 40, md: 44 }}
          borderRadius={12}
          bg="greenBgColor"
        >
          <NavItem to={'/'}>{<img src={logoDark} alt="logoDark" />}</NavItem>
        </Box>

        <Box onClick={toggleModal} width={{ xs: 13 }} height={{ xs: 13 }}>
          {<img src={cross} alt="cross" />}
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
      <Box width={{ xs: 61 }} height={{ xs: 27 }} position="relative">
        {<img src={switchBodyOff} alt="switchBodyOff" />}
        <Box
          width={{ xs: 28 }}
          height={{ xs: 28 }}
          position="absolute"
          left={{ xs: '5%', md: '0%' }}
          right={{ xs: '60%', md: '0%' }}
          top={{ xs: '3%', md: '0%' }}
          bottom={{ xs: '11.11%', md: '0%' }}
        >
          {<img src={switchOff} alt="switchOff" />}
        </Box>
      </Box>
    </Box>
  );
};
