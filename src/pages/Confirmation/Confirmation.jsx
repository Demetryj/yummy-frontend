import { useLocation } from 'react-router-dom';

import { Section, Img, Title, Desc } from './Confirmation.styled';

import GirlOnACouchDesk1x from 'images/registrationLogin/Order-food-pana-desk.png';
import GirlOnACouchTab1x from 'images/registrationLogin/Order-food-pana-1tabl.png';
import GirlOnACouchMob1x from 'images/registrationLogin/Order-food-pana-1mob.png';
import GirlOnACouchDesk2x from 'images/registrationLogin/Order-food-pana-desk@2x.png';
import GirlOnACouchTab2x from 'images/registrationLogin/Order-food-pana-1tabl@2x.png';
import GirlOnACouchMob2x from 'images/registrationLogin/Order-food-pana-1mob@2x.png';

export default function Confirmation() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const message = searchParams.get('message');

  return (
    <Section>
      <picture>
        <source
          srcSet={`${GirlOnACouchDesk1x} 1x, ${GirlOnACouchDesk2x} 2x`}
          media="(min-width: 1440px)"
        />
        <source
          srcSet={`${GirlOnACouchTab1x} 1x, ${GirlOnACouchTab2x} 2x`}
          media="(min-width: 768px)"
        />
        <source
          srcSet={`${GirlOnACouchMob1x} 1x, ${GirlOnACouchMob2x} 2x`}
          media="(max-width: 767px)"
        />
        <Img
          src="images/registrationLogin/Order food-pana 1 mob.png"
          alt="A girl sitting on a couch with a cellphone in her arm"
        />
      </picture>
      <Title>Congrats! </Title>
      <Desc>{message}</Desc>
    </Section>
  );
}
