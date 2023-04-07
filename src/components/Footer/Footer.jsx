import { AiOutlineCopyrightCircle } from 'react-icons/ai';
import { Box } from '../Box';
import { Paragraph, NavItem, Title, List, ListItem } from './Footer.styled';
import { FootForm } from '../FooterForm';
import logoHeader from '../../images/logo/logo-footer.svg';

const navItems = [
  { href: 'search', item: 'Ingredients' },
  { href: 'add', item: 'Add recipes' },
  { href: 'my', item: 'My recipes' },
  { href: 'favorites', item: 'Favorites' },
  { href: 'shopping-list', item: 'Shopping List' },
];

export const Footer = () => {
  return (
    <Box as="section" border="1px solid red">
      <Box pt={{ xs: 28 }} pb={{ xs: 18 }} bg="yummyColor">
        <Box
          display={{ sx: 'flex' }}
          justifyContent="center"
          alignItems="center"
          mb={{ xs: 32 }}
        >
          <NavItem to={'/'}>
            <img
              src={logoHeader}
              alt="logo"
              style={{ width: 32, height: 32 }}
            />
          </NavItem>
          <Title>So Yummy</Title>
        </Box>
        <Box as="nav" mb={{ xs: 32 }}>
          <List>
            {navItems.map(({ href, item }) => (
              <ListItem key={href}>
                <NavItem to={href}>{item}</NavItem>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box mb={{ xs: 44 }}>
          <FootForm />
        </Box>
        <Box></Box>
      </Box>
      <Box display="flex" justifyContent="center" py={{ xs: 28 }}>
        <AiOutlineCopyrightCircle size={10} />
        <Paragraph>&nbsp;2023 All Rights Reserved.</Paragraph>
        <Paragraph>Terms of service</Paragraph>
      </Box>
    </Box>
  );
};
