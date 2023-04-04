import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/AppBar';
import { Footer } from 'components/Footer';
import { Box } from 'components/Box';

// const container =
//   window !== undefined ? () => window().document.body : undefined;

export const SharedLayout = () => {
  return (
    <Box display="grid" gridTemplateRows="75x 1fr" width={1}>
      <AppBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      <Footer />
    </Box>
  );
};
