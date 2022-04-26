import { IMovie } from "./../../../models/IMovie";
import {
  MovieListActionEnum,
  SetMovieList,
  SetIsLoading,
  SetError,
  SetPage,
  SetSortBy,
  SetTotal,
  SetWithGenres,
  SetYear,
  SetGenresList,
} from "./types";
import { AppDispatch } from "../../index";
import MovieService from "../../../api/MovieService";

export const MovieListAC = {
  setIsLoading: (isLoading: boolean): SetIsLoading => ({
    type: MovieListActionEnum.SET_IS_LOADING,
    payload: isLoading,
  }),
  setTotal: (items: number): SetTotal => ({
    type: MovieListActionEnum.SET_TOTAL,
    payload: items,
  }),
  setGenresList: (genres: []): SetGenresList => ({ type: MovieListActionEnum.SET_GENRES_LIST, payload: genres }),
  setError: (error: string): SetError => ({ type: MovieListActionEnum.SET_ERROR, payload: error }),
  setPage: (page: number): SetPage => ({ type: MovieListActionEnum.SET_PAGE, payload: page }),
  setSortBy: (sortBy: string): SetSortBy => ({ type: MovieListActionEnum.SET_SORT_BY, payload: sortBy }),
  setYear: (year: number): SetYear => ({ type: MovieListActionEnum.SET_YEAR, payload: year }),
  setWithGenres: (genres: string): SetWithGenres => ({ type: MovieListActionEnum.SET_WITH_GENRES, payload: genres }),
  setMovieList: (movies: IMovie[]): SetMovieList => ({ type: MovieListActionEnum.SET_MOVIE_LIST, payload: movies }),

  getMovieList: (page: number, sortBy: string, genres: string, year: number | undefined) => (dispatch: AppDispatch) => {
    MovieService.getMovieList(page, sortBy, genres, year)
      .then((res) => {
        dispatch(MovieListAC.setMovieList(res.data.results));
        dispatch(MovieListAC.setTotal(res.data.total_results));
        console.log(res.data);
      })
      .catch((err) => {
        dispatch(MovieListAC.setError("Oops, something went wrong!"));
        console.log(err);
      });
  },

  getGenresList: () => (dispatch: AppDispatch) => {
    MovieService.getGenresList()
      .then((res) => {
        dispatch(MovieListAC.setGenresList(res.data.genres));
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
