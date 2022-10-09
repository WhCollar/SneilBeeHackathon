import * as React from 'react';
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const navigate = useNavigate();
  
  React.useEffect(() => {
    if (!localStorage.user) navigate('*');
  }, [navigate]);

  return (
    <h2>Cart</h2>
  );
}
