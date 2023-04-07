import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/AppBar';
import { Footer } from 'components/Footer';
import { Box } from 'components/Box';

export const SharedLayout = () => {
  return (
    <>
      <Box
        display="grid"
        gridTemplateRows="75x 1fr"
        width={{ xs: 375, md: '100%' }}
        mx="auto"
        px={{ xs: 16, md: 32, lg: 100 }}
        py={{ xs: 18 }}
      >
        <AppBar position="fixed" />
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Box>
      <Footer />
    </>
  );
};
