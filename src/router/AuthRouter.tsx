import React from "react";
import { Route, Routes } from "react-router-dom";
import { AuthPage, LoginPage, RegisterPage } from "../pages/auth/view";

export default function AuthRouter() {
  return (
    <Routes>
      <Route path="/account" element={<AuthPage />}>
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
}
