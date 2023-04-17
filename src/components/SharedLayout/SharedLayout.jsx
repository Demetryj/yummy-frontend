import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/AppBar';
import { Footer } from 'components/Footer';
import { Box } from 'components/Box';
import { Toaster } from 'react-hot-toast';
import { MainWrapper } from './SharedLayout.styled';
import { SpinatComponent } from 'components/SpinatComponent/SpinatComponent';

export const SharedLayout = () => {
  return (
    <>
      <AppBar />
      <Box
        display="grid"
        gridTemplateRows="46x 1fr"
        width={{ xs: 375, md: 768, lg: 1440 }}
        mx="auto"
        px={{ xs: 16, md: 32, lg: 100 }}
        py={{ xs: 18 }}
      >
        <MainWrapper style={{ minHeight: '100vh' }}>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </MainWrapper>
      </Box>
      <Footer />
      <SpinatComponent />
      <Toaster />
    </>
  );
};
