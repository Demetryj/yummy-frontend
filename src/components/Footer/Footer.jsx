import { Box } from '../Box';
import {
  FooterWrap,
  Paragraph,
  NavItem,
  Title,
  List,
  ListItem,
  IconList,
  Logo,
  BenefitsList,
  BenefitsItem,
  Subtitle,
  Text,
  IconText,
} from './Footer.styled';
import { FootForm } from '../FooterForm';
import logoHeader from 'images/logo/logo-footer.svg';
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
  { item: `Flexible search for desired and unwanted ingredients` },
  { item: 'Ability to add your own recipes with photos' },
  { item: 'Convenient and easy to use' },
];

export const Footer = ({ mode }) => {
  return (
    <Box as="section">
      <FooterWrap mode={mode}>
        <Box display={{ lg: 'flex' }} justifyContent={{ lg: 'space-between' }}>
          <Box display={{ md: 'flex' }} mb={{ md: 72 }} flexGrow={{ lg: 0 }}>
            <Box
              flexGrow={{ md: 3, lg: 0 }}
              mr={{ lg: 159 }}
              width={{ lg: 418 }}
            >
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
            <Box as="nav" mb={{ xs: 32 }} flexGrow={{ md: 1 }}>
              <List>
                {navItems.map(({ href, item }) => (
                  <ListItem key={href}>
                    <NavItem to={href}>{item}</NavItem>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Box>

          <Box mb={{ xs: 44, md: 38 }}>
            <Box display={{ xs: 'none', lg: 'block' }} mb={{ lg: 28 }}>
              <Subtitle>Subscribe to our Newsletter</Subtitle>

              <Text>
                Subscribe up to our newsletter. Be in touch with <br /> latest
                news and special offers, etc.
              </Text>
            </Box>
            <FootForm mode={mode} />
          </Box>
        </Box>

        <Box display="flex" alignItems="center" justifyContent="center">
          <IconList>
            {socialIcons.map(({ href, item }) => (
              <li key={href}>
                <NavItem to={href}>{item}</NavItem>
              </li>
            ))}
          </IconList>
        </Box>
      </FooterWrap>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        py={{ xs: 28, md: 32 }}
        bg={'transparent'}
        style={{ opacity: 0.5 }}
      >
        <IconText mode={mode} />
        <Paragraph mode={mode}>&nbsp;2023 All Rights Reserved.</Paragraph>
        <Paragraph mode={mode}>Terms of service</Paragraph>
      </Box>
    </Box>
  );
};
