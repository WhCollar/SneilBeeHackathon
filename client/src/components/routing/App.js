import * as React from 'react';
import { Provider } from "react-redux";
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from "../../theme";
import store from "../../store";
import Main from "../Main";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Error from "../pages/Error";
import Shop from '../pages/Shop';
import News from '../pages/News';
import History from '../pages/History';
import Login from '../pages/Login';
import Registration from '../pages/Registration';
import Quests from '../pages/Quests';
import Cart from '../pages/Cart';


export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/quests" element={<Quests />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/news" element={<News />} />
            <Route path="/history" element={<History />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </Provider>
    </ThemeProvider>
  );
}
