import {createTheme} from '@mui/material'

declare module '@mui/material/styles' {
  interface TypographyVariants {
    hero: React.CSSProperties
    body3: React.CSSProperties
    body4: React.CSSProperties
    body5: React.CSSProperties
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    hero?: React.CSSProperties
    body3?: React.CSSProperties
    body4?: React.CSSProperties
    body5?: React.CSSProperties
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    hero: true
    body3: true
    body4: true
    body5: true
  }
}

export const theme = createTheme({
  typography: {
    fontFamily: ['Noto Sans KR', 'sans-serif'].join(','),
    htmlFontSize: 16,
    hero: {
      fontSize: '2.625rem',
      fontWeight: 600,
    },
    h1: {
      fontSize: '1.75rem',
      fontWeight: 600,
    },
    h2: {
      fontSize: '1.375rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '1.25rem',
      fontWeight: 600,
    },
    h4: {
      fontSize: '1.25rem',
      fontWeight: 300,
    },
    body1: {
      fontSize: '1.125rem',
    },
    body2: {
      fontSize: '1rem',
    },
    body3: {
      fontSize: '0.875rem',
    },
    body4: {
      fontSize: '0.8125rem',
    },
    body5: {
      fontSize: '0.75rem',
    },
  },

  palette: {
    primary: {
      '100': '#F1E8BD', //disabled
      light: '#FD8142',
      main: '#FE7156',
      dark: '#FF5838',
    },
    secondary: {
      main: '#379070',
    },
    info: {
      main: '#5D9EFF',
    },
    success: {
      main: '#9EFF5D',
    },
    warning: {
      main: '#FF763B',
    },
    error: {
      '100': '#FFC8CD', //disabled
      light: '#F16464',
      main: '#FF3B3B',
      dark: '#DF0014',
    },
    grey: {
      '100': '#FAFAFA', //1
      '200': '#EFEFEF', //2
      '300': '#E7E7E7', //3
      '400': '#B4B4B4', //4
      '500': '#707070', //5
      '600': '#212121', //5-1
      '700': '#303030', //6
      '800': '#131313', //7
    },
  },
})
