import React, { useEffect } from "react";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Header";

import "./App.css";
import { useActions } from "./hooks/useActions";
import { IUser } from "./models/IUsers";

const App: React.FC = () => {
  const { setUser, setIsAuth, getGenresList } = useActions();

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setUser({ username: localStorage.getItem("username" || "") } as IUser);
      setIsAuth(true);
      getGenresList();
    }
  }, []);

  return (
    <div className="App">
      <Navbar />
      <AppRouter />
    </div>
  );
};

export default App;
