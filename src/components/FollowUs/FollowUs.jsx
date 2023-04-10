import { Social, Links } from './FollowUs.styled';
import instagram from '../../images/svg/instagram.png';
import faceBook from '../../images/svg/faceBook.png';
import youTube from '../../images/svg/youTube.png';
import twitter from '../../images/svg/twitter.png'


const FollowUs = () => {
  return (
    <>
      <h2>Follow us</h2>
      <Social>
        <Links>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagram} alt="" width="20px" height="20px"/>
          </a>
        </Links>
        <Links>
          <a
            href="https://uk-ua.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={faceBook} alt="" width="20px" height="20px"/>
            
          </a>
        </Links>
        <Links>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={youTube} alt="" width="20px" height="20px"/>
            
          </a>
        </Links>
        <Links>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitter} alt="" width="20px" height="20px"/>
            
          </a>
        </Links>
      </Social>
    </>
  );
};
export default FollowUs;
