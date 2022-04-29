import React, { FC, Suspense, useDeferredValue, useEffect } from "react";
import "./index.css";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import MovieItem from "../MovieItem";
import { Row, Col } from "antd";
import "./index.css";
import Spinner from "../Spinner";
import MoviePagination from "./MoviePagination";

const MovieList: FC = () => {
  const { page, isLoading, sort_by, with_genres, year, movie_list, search_query, total } = useTypedSelector(
    (state) => state.movieList
  );
  const { getMovieList, getSearchResult } = useActions();

  useEffect(() => {
    search_query !== "" ? getSearchResult(search_query, page, year) : getMovieList(page, sort_by, with_genres, year);
  }, [page, sort_by, with_genres, year, search_query]);

  const defferedMovieList = useDeferredValue(movie_list);
  if (total === 0) {
    return <div className="movieList_error">No results</div>;
  }
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="movie-list_container">
          <MoviePagination />
          <Row gutter={[24, { xs: 8, sm: 16, md: 24, lg: 32 }]} justify="center" className="movieItem-row">
            {defferedMovieList.map((p) => (
              <Col key={p.id}>
                <MovieItem movieInfo={p} />
              </Col>
            ))}
          </Row>
          <MoviePagination />
        </div>
      )}
    </>
  );
};

export default MovieList;
