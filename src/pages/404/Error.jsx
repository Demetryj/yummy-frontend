import { useSelector } from 'react-redux';
import { selectTheme } from 'redux/theme/selectors';
import { Section, Img, Title, Desc } from '../Confirmation/Confirmation.styled';

import NotFoundDesk1x from 'images/errorPage/404-desk-tab.png';
import NotFoundMob1x from 'images/errorPage/404-mob.png';
import NotFoundDesk2x from 'images/errorPage/404-desk-tab@2x.png';
import NotFoundMob2x from 'images/errorPage/404-mob@2x.png';

export default function NoPage() {
  const theme = useSelector(selectTheme);

  return (
    <Section>
      <picture>
        <source
          srcSet={`${NotFoundDesk1x} 1x, ${NotFoundDesk2x} 2x`}
          media="(min-width: 768px)"
        />
        <source
          srcSet={`${NotFoundMob1x} 1x, ${NotFoundMob2x} 2x`}
          media="(max-width: 767px)"
        />
        <Img src="images/errorPage/404-mob.png" alt="Not Found Page" />
      </picture>
      <Title mode={theme}>We are sorry, </Title>
      <Desc mode={theme}>
        but the page you were looking for can’t be found..
      </Desc>
    </Section>
  );
}
