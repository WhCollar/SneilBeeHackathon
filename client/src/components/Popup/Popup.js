import { useDispatch, useSelector } from "react-redux";
import { deactivatePopup } from "../../store/app/actionsCreators";
import './Popup.css';

export default function Popup({ children }) {
  const dispatch = useDispatch();
  const isPopupActive = useSelector(state => state.app.popupActive);

  return (
    <div
      className={`popup ${isPopupActive ? 'active' : ''}`}
      onClick={() => dispatch(deactivatePopup())}
    >
      <div
        className={`content ${isPopupActive ? 'active' : ''}`}
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
