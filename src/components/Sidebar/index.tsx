import React, { FC } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import "./index.css";
import MappedSelect from "./MappedSelect";
import { sortOptios } from "../../utils/sortOptions";
import { getYears } from "../../utils/years";

const Sidebar: FC = () => {
  const { genres, search_query } = useTypedSelector((store) => store.movieList);
  const { setWithGenres, setSortBy, setIsLoading, setYear } = useActions();

  const handleGenresChange = (value: string) => {
    setWithGenres(value);
  };

  const handleYearChange = (value: number) => {
    setYear(value);
  };

  const handleSortChange = (value: string) => {
    setSortBy(value);
    setIsLoading(true);
  };

  return (
    <aside className="sidebar">
      <h1 className="sidebar_title">Movies</h1>
      <div className="sidebar_item_container">
        <h3>Sort Results By</h3>
        <MappedSelect
          item={sortOptios}
          handleChange={handleSortChange}
          allowClear={false}
          defaultValue="popularity.desc"
          disabled={search_query === "" ? false : true}
        />
      </div>
      <div className="sidebar_item_container">
        <h3>Genres</h3>
        <MappedSelect
          item={genres}
          mode={"multiple"}
          handleChange={handleGenresChange}
          placeholder="Select genres"
          allowClear={true}
          disabled={search_query === "" ? false : true}
        />
      </div>
      <div className="sidebar_item_container">
        <h3>Year</h3>
        <MappedSelect
          item={getYears()}
          mode={"multiple"}
          handleChange={handleYearChange}
          placeholder="Select release years"
          allowClear={true}
          disabled={search_query === "" ? false : true}
        />
      </div>
    </aside>
  );
};

export default Sidebar;
