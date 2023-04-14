import * as React from 'react';
import { Box } from '../Box';
import { FiUser } from 'react-icons/fi';

export const ImageAvatar = () => {
  return (
    <Box
      mr={{
        xs: 14,
      }}
      borderRadius="50%"
      width={{ xs: 34 }}
      height={{ xs: 34 }}
      overflow="hidden"
      bg="greenBgColor"
    >
      <FiUser size={{ xs: 34, md: 44 }} cursor="pointer" />
    </Box>
  );
};
