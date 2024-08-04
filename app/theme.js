import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#004d40',
    },
    secondary: {
      main: '#d32f2f',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: 'Roboto Slab, Poppins, sans-serif',
    h4: {
      fontWeight: 700,
    },
    h6: {
      fontWeight: 500,
    },
    button: {
      textTransform: 'none',
    },
  },
});

export default theme;