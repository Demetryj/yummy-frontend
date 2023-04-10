// import { Social, Links } from './FollowUs.styled';
// import instagram from '../../images/svg/instagram.png';
// import faceBook from '../../images/svg/faceBook.png';
// import youTube from '../../images/svg/youTube.png';
// import twitter from '../../images/svg/twitter.png'

import { Box } from '../Box';
import { BsYoutube, BsFacebook } from 'react-icons/bs';
import { FiInstagram } from 'react-icons/fi';
import { TfiTwitterAlt } from 'react-icons/tfi';
import { NavItem, IconList, IconItem, BoxTitle } from './FollowUs.styled';

const socialIcons = [
  {
    href: 'https://uk-ua.facebook.com/',
    item: <BsFacebook size={25} color="#8BAA36" />,
  },
  {
    href: 'https://www.youtube.com',
    item: <BsYoutube size={25} color="#8BAA36" />,
  },
  {
    href: 'https://twitter.com',
    item: <TfiTwitterAlt size={25} color="#8BAA36" />,
  },
  {
    href: 'https://www.instagram.com/',
    item: <FiInstagram size={25} color="#8BAA36" />,
  },
];

const FollowUs = () => {
  return (
    <Box paddingBottom="100px">
      <BoxTitle>Follow us</BoxTitle>
      <IconList>
        {socialIcons.map(({ href, item }) => (
          <IconItem key={href}>
            <NavItem to={href}>{item}</NavItem>
          </IconItem>
        ))}
      </IconList>
    </Box>
  );
};
export default FollowUs;
