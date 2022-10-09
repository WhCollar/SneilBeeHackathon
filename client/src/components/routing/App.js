import * as React from 'react';
import { Provider } from "react-redux";
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from "../../theme";
import store from "../../store";
import Main from "../Main";
import Profile from "../pages/Profile";
import Error from "../pages/Error";
import Shop from '../pages/Shop';
import News from '../pages/News';
import Login from '../pages/Login';
import Registration from '../pages/Registration';
import Cart from '../pages/Cart';


export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<News />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </Provider>
    </ThemeProvider>
  );
}
