import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/AppBar';
import { Footer } from 'components/Footer';
import { Box } from 'components/Box';
import { Toaster } from 'react-hot-toast';
import { MainWrapper } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <>
      <AppBar />
      <Box
        display="grid"
        gridTemplateRows="46x 1fr"
        width={{ xs: 375, md: '100%' }}
        mx="auto"
        px={{ xs: 16, md: 32, lg: 100 }}
      >
        <MainWrapper>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </MainWrapper>
      </Box>
      <Footer />
      <Toaster />
    </>
  );
};
