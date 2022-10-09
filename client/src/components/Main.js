import * as React from 'react';
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

export default function Main() {

  return (
    <React.Fragment>
      <Navigation />

      <Outlet />
    </React.Fragment>
  );
}
