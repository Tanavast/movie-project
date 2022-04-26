import React from "react";
import Genres from "./Genres";
import "./index.css";
import SortSelect from "./SortSelect";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h1 className="sidebar_title">Movies</h1>
      <div className="sidebar_item_container">
        <h3>Sort Results By</h3>
        <SortSelect />
      </div>
      <div className="sidebar_item_container">
        <h3>Genres</h3>
        <Genres />
      </div>
    </aside>
  );
};

export default Sidebar;
