import { Box } from '../Box';
import { BsYoutube, BsFacebook } from 'react-icons/bs';
import { FiInstagram } from 'react-icons/fi';
import { TfiTwitterAlt } from 'react-icons/tfi';
import {
  NavItem,
  IconList,
  IconItem,
  BoxTitle,
  FollowUsContainer,
} from './FollowUs.styled';

const socialIcons = [
  {
    href: 'https://uk-ua.facebook.com/',
    item: <BsFacebook />,
  },
  {
    href: 'https://www.youtube.com',
    item: <BsYoutube />,
  },
  {
    href: 'https://twitter.com',
    item: <TfiTwitterAlt />,
  },
  {
    href: 'https://www.instagram.com/',
    item: <FiInstagram />,
  },
];

const FollowUs = ({ mode }) => {
  return (
    <FollowUsContainer>
      <Box>
        <BoxTitle mode={mode}>Follow us</BoxTitle>
        <IconList>
          {socialIcons.map(({ href, item }) => (
            <IconItem key={href}>
              <NavItem to={href} mode={mode}>
                {item}
              </NavItem>
            </IconItem>
          ))}
        </IconList>
      </Box>
    </FollowUsContainer>
  );
};
export default FollowUs;
