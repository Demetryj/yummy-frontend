import { Link } from 'react-router-dom';
import {
  Section,
  Container,
  Logo,
  Title,
  Text,
  BtnRegister,
  BtnSignin,
} from './WelcomeMain.styled';
import logo from 'images/logo/logo-header.svg';

export const WelcomeMain = () => {
  return (
    <Section>
      <Container>
        <Logo src={logo} alt="logo" />
        <Title>Welcome to the App!</Title>
        <Text>
          This app offers more than just a collection of recipes - it is
          designed to be your very own digital cookbook. You can easily save and
          retrieve your own recipes at any time.
        </Text>
        <div>
          <Link to="/register">
            <BtnRegister type="button">Registration</BtnRegister>
          </Link>
          <Link to="/signin">
            <BtnSignin type="button">Sign in</BtnSignin>
          </Link>
        </div>
      </Container>
    </Section>
  );
};
