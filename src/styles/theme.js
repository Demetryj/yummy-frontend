export const theme = {
  colors: {
    yummyColor: '#22252A',
    mainTextColor: '#23262A',
    titleTextColor: '#001833',
    subtitleTextColor: '#3E4462',
    whiteTextColor: '#FAFAFA',
    greyTextColor: '#BDBDBD',
    middleGreyTextColor: '#3E4462',
    lightGreyTextColor: '#7E7E7E',
    greenTextColor: '#8BAA36',
    blackTextColor: '#000000',
    lightTextColor: '#333333',
    paginationColor: '#656565',
    footerDarckTextColor: '#22252A',

    lightBgColor: '#ECECEC',
    lightDarckBgColor: '#2A2C36',
    darckBgColor: '#1E1F28',
    btnDarckBgColor: '#22252A',
    greenBgColor: '#8BAA36',
    footerLogoBgColor: '#EBF3D4',

    whiteColor: '#FAFAFA',
    greenColor: '#8BAA36',
  },

  spacing: n => `${2 * n}px`,

  media: {
    medium: '(min-width: 768px)',
    large: '(min-width: 1440px)',
  },

  /* usage
   @media screen and (${(p) => p.theme.media.large}) {
    height: ;
    color: ;
    ...
  }
  */
  breakpoints: {
    xs: '0px',
    md: '768px',
    lg: '1440px',
  },

  /*
   usage
   <Box
        width={{ xs: 375, md: 768, lg: 1440 }}
        height={200}
        p={{ xs: 10, md: 25, lg: 50 }}
        bg="greenBgColor"
      >
        <h1>Main Page</h1>
  </Box> */

  fonts: {
    body: "'Roboto', sans-serif",
    heading: "'Fira Sans', sans-serif",
  },

  fontSizes: {
    x: '10px',
    xs: '12px',
    s: '14px',
    m: '16px',
    xm: '18px',
    l: '24px',
    xl: '28px',
    xxl: '32px',
    sb: '44px',
    mb: '60px',
    lb: '72px',
    b: '100px',
  },

  fontWeights: {
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },

  borders: {
    none: 'none',
    normal: '1px solid',
    medium: '2px solid',
  },

  radii: {
    none: '0',
    light: '6px',
    normal: '8px',
    pagination: '26px',
    modalProfile: '30px',
    switch: '50px',
  },

  shadows: {
    pagination: '0px 4px 4px rgba(135, 135, 135, 0.2)',
    switch: 'inset 0px 6px 8px 3px rgba(0, 0, 0, 0.1);',
    modalProfile: ' 0px 4px 48px rgba(0, 0, 0, 0.1);',
  },
};
