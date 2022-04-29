import { IGenre } from "../../../models/IGenre";
import { IMovie } from "./../../../models/IMovie";
import { MovieListState, MovieListAction, MovieListActionEnum } from "./types";

const initialState: MovieListState = {
  movie_list: [] as IMovie[],
  isLoading: true,
  page: 1,
  error: "",
  with_genres: "",
  year: undefined,
  total: undefined,
  sort_by: "popularity.desc",
  genres: [] as IGenre[],
  search_query: "",
};

export default function movieReducer(state = initialState, action: MovieListAction): MovieListState {
  switch (action.type) {
    case MovieListActionEnum.SET_ERROR:
      return { ...state, error: action.payload, isLoading: false };
    case MovieListActionEnum.SET_IS_LOADING:
      return { ...state, isLoading: action.payload };
    case MovieListActionEnum.SET_GENRES_LIST:
      return { ...state, genres: action.payload };
    case MovieListActionEnum.SET_PAGE:
      return { ...state, page: action.payload };
    case MovieListActionEnum.SET_SORT_BY:
      return { ...state, sort_by: action.payload };
    case MovieListActionEnum.SET_TOTAL:
      return { ...state, total: action.payload };
    case MovieListActionEnum.SET_WITH_GENRES:
      return { ...state, with_genres: action.payload };
    case MovieListActionEnum.SET_YEAR:
      return { ...state, year: action.payload };
    case MovieListActionEnum.SET_MOVIE_LIST:
      return { ...state, movie_list: action.payload, isLoading: false };
    case MovieListActionEnum.SET_SEARCH_QUERY:
      return { ...state, search_query: action.payload };
    default:
      return state;
  }
}
