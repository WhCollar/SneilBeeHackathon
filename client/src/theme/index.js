import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#0045F9',
    },
    secondary: {
      main: '#e0e0e0',
    },
    background: {
      default: '#ECEBE6',
    },
  },
  shape: {
    borderRadius: 6,
  },
});
