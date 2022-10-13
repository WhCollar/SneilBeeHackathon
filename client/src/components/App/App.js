import * as React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import style from './App.module.css';
import Header from '../Header/Header';
import { useDispatch } from 'react-redux';
import { userMenuClose } from '../../store/app/actionsCreators';

export default function App() {
  const dispatch = useDispatch();

  const handleUserMenuClose = () => dispatch(userMenuClose());

  React.useEffect(() => {
    document.addEventListener('mousedown', handleUserMenuClose);
  });

  return (
    <div>
      <Header />

      <div className={style.pageContainer}>
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}
