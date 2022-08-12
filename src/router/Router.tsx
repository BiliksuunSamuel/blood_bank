import React from "react";
import { BrowserRouter } from "react-router-dom";
import AuthRouter from "./AuthRouter";
import DashboardRouter from "./DashboardRouter";
import HomeRouter from "./HomeRouter";
export default function Router() {
  return (
    <BrowserRouter>
      <HomeRouter />
      <AuthRouter />
      <DashboardRouter />
    </BrowserRouter>
  );
}
