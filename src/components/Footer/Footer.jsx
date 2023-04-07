import { Box } from '../Box';
import {
  Paragraph,
  NavItem,
  Title,
  List,
  ListItem,
  IconList,
  Logo,
  BenefitsList,
  BenefitsItem,
  IconItem,
} from './Footer.styled';
import { FootForm } from '../FooterForm';
import logoHeader from '../../images/logo/logo-footer.svg';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';
import { BsYoutube, BsFacebook } from 'react-icons/bs';
import { FiInstagram } from 'react-icons/fi';
import { TfiTwitterAlt } from 'react-icons/tfi';

const navItems = [
  { href: 'search', item: 'Ingredients' },
  { href: 'add', item: 'Add recipes' },
  { href: 'my', item: 'My recipes' },
  { href: 'favorites', item: 'Favorites' },
  { href: 'shopping-list', item: 'Shopping List' },
];

const socialIcons = [
  {
    href: 'https://uk-ua.facebook.com/',
    item: <BsFacebook size={20} color="#8BAA36" />,
  },
  {
    href: 'https://www.youtube.com',
    item: <BsYoutube size={20} color="#8BAA36" />,
  },
  {
    href: 'https://twitter.com',
    item: <TfiTwitterAlt size={20} color="#8BAA36" />,
  },
  {
    href: 'https://www.instagram.com/',
    item: <FiInstagram size={20} color="#8BAA36" />,
  },
];

const benefits = [
  { item: 'Database of recipes that can be replenished' },
  { item: 'Flexible search for desired and unwanted ingredients' },
  { item: 'Ability to add your own recipes with photos' },
  { item: 'Convenient and easy to use' },
];

export const Footer = () => {
  return (
    <Box as="section" border="1px solid red">
      <Box
        as="footer"
        pt={{ xs: 28, md: 50 }}
        pb={{ xs: 18, md: 24 }}
        px={{ md: 32, lg: 100 }}
        bg="yummyColor"
      >
        <Box display={{ lg: 'flex' }}>
          <Box display={{ md: 'flex' }} mb={{ md: 72 }} flexGrow={{ lg: 2 }}>
            <Box flexGrow={{ md: 3 }} border="1px solid red">
              <Box
                display={{ sx: 'flex' }}
                justifyContent={{ sx: 'center', md: 'start' }}
                alignItems="center"
                mb={{ xs: 32 }}
              >
                <NavItem to={'/'}>
                  <Logo src={logoHeader} alt="logo" />
                </NavItem>
                <Title>So Yummy</Title>
              </Box>
              <Box display={{ xs: 'none', md: 'block' }}>
                <BenefitsList>
                  {benefits.map(({ item }) => (
                    <BenefitsItem key={item}>{item}</BenefitsItem>
                  ))}
                </BenefitsList>
              </Box>
            </Box>
            <Box
              as="nav"
              mb={{ xs: 32 }}
              flexGrow={{ md: 1 }}
              border="1px solid red"
            >
              <List>
                {navItems.map(({ href, item }) => (
                  <ListItem key={href}>
                    <NavItem to={href}>{item}</NavItem>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Box>

          <Box mb={{ xs: 44, md: 38 }} border="1px solid red">
            <FootForm />
          </Box>
        </Box>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          border="1px solid red"
        >
          <IconList>
            {socialIcons.map(({ href, item }) => (
              <IconItem key={href}>
                <NavItem to={href}>{item}</NavItem>
              </IconItem>
            ))}
          </IconList>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        py={{ xs: 28, md: 32 }}
        bg={'transparent'}
      >
        <AiOutlineCopyrightCircle size={10} />
        <Paragraph>&nbsp;2023 All Rights Reserved.</Paragraph>
        <Paragraph>Terms of service</Paragraph>
      </Box>
    </Box>
  );
};
