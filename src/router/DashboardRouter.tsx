import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  ComplainsPage,
  DashboardPage,
  ServicesPage,
  UsersPage,
} from "../pages/dashboard/view";

export default function DashboardRouter() {
  return (
    <Routes>
      <Route path="/dashboard" element={<DashboardPage />}>
        <Route path="complains" element={<ComplainsPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="users" element={<UsersPage />} />
      </Route>
    </Routes>
  );
}
