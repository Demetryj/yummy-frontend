import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/AppBar';
import { Footer } from 'components/Footer';
import { Box } from 'components/Box';

// const container =
//   window !== undefined ? () => window().document.body : undefined;

export const SharedLayout = () => {
  return (
    <Box
      display="grid"
      gridTemplateRows="75x 1fr"
      // width={{ xs: 375, md: '100%' }}
      width={1}
      mx="auto"
    >
      <AppBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      <Footer />
    </Box>
  );
};
