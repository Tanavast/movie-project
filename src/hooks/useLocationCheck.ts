import { useLocation } from "react-router-dom";

export const useLocationCheck = (location: string) => {
  if (useLocation().pathname === location) {
    return true;
  }
  return false;
};
