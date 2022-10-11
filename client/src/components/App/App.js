import * as React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import './App.css';
import Header from '../Header/Header';

export default function App() {
  return (
    <div>
      <Header />

      <div className="page-container">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}
