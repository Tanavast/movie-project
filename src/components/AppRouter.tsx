import React from "react";
import { Routes, Route } from "react-router-dom";
import RequireAuth from "../hoc/RequireAuth";
import Error404 from "../pages/404";
import Login from "../pages/login";
import Main from "../pages/main";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <RequireAuth>
            <Main />
          </RequireAuth>
        }
      />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default AppRouter;
