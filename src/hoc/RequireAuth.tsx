import React, { FC } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypedSelector";

interface RequireAuthProps {
  children: JSX.Element;
}

const RequireAuth: FC<RequireAuthProps> = ({ children }) => {
  const location = useLocation();
  const { isAuth } = useTypedSelector((state) => state.auth);
  if (!isAuth) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return children;
};

export default RequireAuth;
