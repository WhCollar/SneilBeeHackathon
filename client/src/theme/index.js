import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#283593',
    },
    secondary: {
      main: 'rgba(244, 244, 244, 0.8)',
    },
    background: {
      default: '#ECEBE6',
    },
  },
  shape: {
    borderRadius: 20,
  },
});
