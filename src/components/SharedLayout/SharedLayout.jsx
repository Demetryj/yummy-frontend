import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectTheme } from 'redux/theme/selectors';
import { AppBar } from 'components/AppBar';
import { Footer } from 'components/Footer';
import { Box } from 'components/Box';
import { Toaster } from 'react-hot-toast';
import { Wrapper, MainWrapper } from './SharedLayout.styled';
import { SpinatComponent } from 'components/SpinatComponent';

export const SharedLayout = () => {
  const theme = useSelector(selectTheme);

  return (
    <Wrapper mode={theme}>
      <AppBar />
      <Box
        display="grid"
        gridTemplateRows="46x 1fr"
        width={{ xs: 375, md: 768, lg: 1440 }}
        mx="auto"
        px={{ xs: 16, md: 32, lg: 100 }}
        py={{ xs: 0 }}
      >
        <MainWrapper>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </MainWrapper>
      </Box>
      <Footer mode={theme} />
      <SpinatComponent />
      <Toaster />
    </Wrapper>
  );
};
