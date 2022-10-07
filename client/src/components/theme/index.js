import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#424242',
    },
    secondary: {
      main: '#F5F5F5',
    },
    background: {
      default: '#ECEBE6',
    },
  },
  shape: {
    borderRadius: 20,
  },
});
