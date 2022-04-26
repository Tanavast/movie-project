import React, { FC } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";

interface GenreItem {
  genre?: number;
}

const GenreItem: FC<GenreItem> = (props) => {
  const genres = useTypedSelector((store) => store.movieList.genres);
  const currentGenre = genres.find((x) => x.id === props.genre);
  return (
    <>
      <span key={currentGenre?.id}>{currentGenre?.name}</span>
    </>
  );
};

export default GenreItem;
