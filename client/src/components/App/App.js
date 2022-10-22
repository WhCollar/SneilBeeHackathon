import * as React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import style from './App.module.css';
import Header from '../Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { userMenuClose } from '../../store/app/actionsCreators';
import Popup from '../Popup/Popup';
import Login from '../Login/Login';
import Registration from '../Registration/Registration';

export default function App() {
  const dispatch = useDispatch();

  const popupContentType = useSelector(state => state.app.popupContentType);

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
    <React.Fragment>
      <Header userMenuRef={userMenuRef} />

      <div className={style.pageContainer}>
        <Outlet />
      </div>

      <Popup>
        {popupContentType === 'login' && <Login />}
        {popupContentType === 'registration' && <Registration />}
      </Popup>

      <Footer />
    </React.Fragment>
  );
}
