import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from "react-redux";

import './index.css';

import App from './components/App/App';
import Main from './components/Main/Main';
import Quests from './components/Quests/Quests';
import Marketplace from './components/Marketplace/Marketplace';

import store from "./store";
import { PATH } from './assets/data/pages';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path={PATH.main} element={<App />}>
            <Route index element={<Main />} />
            <Route path={PATH.quests} element={<Quests />} />
            <Route path={PATH.marketplace} element={<Marketplace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
