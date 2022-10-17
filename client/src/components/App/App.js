import * as React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import style from './App.module.css';
import Header from '../Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { userMenuClose } from '../../store/app/actionsCreators';

export default function App() {
  const dispatch = useDispatch();

  const userMenuRef = React.useRef();

  const userMenuActive = useSelector(state => state.app.userMenuActive);

  React.useLayoutEffect(() => {
    const handleUserMenuClose = (event) => {
      if (!userMenuRef.current.contains(event.target)) {
        dispatch(userMenuClose());
      }
    };

    if (userMenuActive) {
      document.addEventListener('mousedown', handleUserMenuClose);
    }

    return () => document.removeEventListener('mousedown', handleUserMenuClose);
  }, [dispatch, userMenuActive]);

  return (
    <div>
      <Header userMenuRef={userMenuRef} />

      <div className={style.pageContainer}>
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}
