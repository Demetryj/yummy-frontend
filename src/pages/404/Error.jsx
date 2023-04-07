import { Main, Img, Title, Desc } from './Error.styled';

import NotFoundDesk1x from 'images/errorPage/404-desk-tab.png';
import NotFoundMob1x from 'images/errorPage/404-mob.png';
import NotFoundDesk2x from 'images/errorPage/404-desk-tab@2x.png';
import NotFoundMob2x from 'images/errorPage/404-mob@2x.png';

export default function NoPage() {
  return (
    <Main>
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
      <Title>We are sorry, </Title>
      <Desc>but the page you were looking for can’t be found..</Desc>
    </Main>
  );
}
