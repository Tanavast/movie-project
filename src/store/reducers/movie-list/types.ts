import { IGenre } from "../../../models/IGenre";
import { IMovie } from "./../../../models/IMovie";

export interface MovieListState {
  movie_list: IMovie[];
  isLoading: boolean;
  error: string;
  sort_by: string;
  page: number;
  year: number | undefined;
  with_genres: string;
  total: number | undefined;
  genres: IGenre[];
  search_query: string;
}

export enum MovieListActionEnum {
  SET_MOVIE_LIST = "SET_MOVIE_LIST",
  SET_IS_LOADING = "SET_IS_LOADING",
  SET_ERROR = "SET_ERROR",
  SET_SORT_BY = "SET_SORT_BY",
  SET_PAGE = "SET_PAGE",
  SET_YEAR = "SET_YEAR",
  SET_WITH_GENRES = "SET_WITH_GENRES",
  SET_TOTAL = "SET_TOTAL",
  SET_GENRES_LIST = "SET_GENRES_LIST",
  SET_SEARCH_QUERY = "SET_SEARCH_QUERY",
}

export interface SetMovieList {
  type: MovieListActionEnum.SET_MOVIE_LIST;
  payload: IMovie[];
}
export interface SetSearchQuery {
  type: MovieListActionEnum.SET_SEARCH_QUERY;
  payload: string;
}
export interface SetGenresList {
  type: MovieListActionEnum.SET_GENRES_LIST;
  payload: IGenre[];
}
export interface SetIsLoading {
  type: MovieListActionEnum.SET_IS_LOADING;
  payload: boolean;
}
export interface SetError {
  type: MovieListActionEnum.SET_ERROR;
  payload: string;
}
export interface SetSortBy {
  type: MovieListActionEnum.SET_SORT_BY;
  payload: string;
}
export interface SetPage {
  type: MovieListActionEnum.SET_PAGE;
  payload: number;
}
export interface SetYear {
  type: MovieListActionEnum.SET_YEAR;
  payload: number;
}
export interface SetWithGenres {
  type: MovieListActionEnum.SET_WITH_GENRES;
  payload: string;
}
export interface SetTotal {
  type: MovieListActionEnum.SET_TOTAL;
  payload: number;
}

export type MovieListAction =
  | SetMovieList
  | SetError
  | SetIsLoading
  | SetPage
  | SetSortBy
  | SetTotal
  | SetWithGenres
  | SetYear
  | SetGenresList
  | SetSearchQuery;
