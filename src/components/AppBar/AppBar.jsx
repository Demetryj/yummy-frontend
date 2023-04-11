import * as React from 'react';
import { useState } from 'react';
import { Box } from '../Box';
import { NavItem, List, ListItem, Paragraph } from './AppBar.styled';
import { FiSearch, FiUser } from 'react-icons/fi';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { HeaderModal } from '../HeaderModal';
import logoDark from '../../images/logo/logoDark.png';
import cross from '../../images/logo/cross-header.svg';
import switchBodyOff from '../../images/logo/switch-body-off.png';
import switchOff from '../../images/logo/switch-off.png';
import { UserLogoModal } from '../UserLogoModal';
import { UserInfoModal } from '../UserInfoModal';
import { LogoutModal } from '../LogoutModal';
import { useSelector, useDispatch } from 'react-redux';
import { openLogo } from '../../redux/modal';

const navItems = [
  { href: 'categories', item: 'Categories' },
  { href: 'add', item: 'Add recipes' },
  { href: 'my', item: 'My recipes' },
  { href: 'favorite', item: 'Favorites' },
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
  const isOpenLogo = useSelector(state => state.modal.isOpenLogo);
  const isOpenInfo = useSelector(state => state.modal.isOpenInfo);
  const isOpenLogout = useSelector(state => state.modal.isOpenLogout);
  const dispatch = useDispatch();

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
        <Box width={{ xs: 40, md: 44 }} height={{ xs: 40, md: 44 }}>
          <NavItem to={'/'}>{<img src={logoDark} alt="logoLight" />}</NavItem>
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
          <Box
            display="flex"
            alignItems="center"
            mr={{ xs: 24, md: 50 }}
            onClick={() => {
              dispatch(openLogo());
            }}
          >
            <Box>{isOpenLogo && <UserLogoModal />}</Box>
            <Box>{isOpenInfo && <UserInfoModal />}</Box>
            <Box>{isOpenLogout && <LogoutModal />}</Box>
            <Box
              mr={{
                xs: 14,
              }}
              borderRadius="50%"
              width={{ xs: 34 }}
              height={{ xs: 34 }}
              overflow="hidden"
              bg="lightgrey"
            >
              <FiUser size={{ xs: 34, md: 44 }} cursor="pointer" />
              {/* <Avatar alt="Avatar" src="" /> */}
            </Box>
            <Box>
              <Paragraph>User</Paragraph>
            </Box>
          </Box>
          <Box
            display={{ xs: 'none', lg: 'flex' }}
            width={{ xs: 61 }}
            height={{ xs: 27 }}
            position="relative"
          >
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
                width={{ xs: 40, md: 44 }}
                height={{ xs: 40, md: 44 }}
              >
                <NavItem to={'/'}>
                  {<img src={logoDark} alt="logoDark" />}
                </NavItem>
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
        </HeaderModal>
      )}
    </Box>
  );
};
