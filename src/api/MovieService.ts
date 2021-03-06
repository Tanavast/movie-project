import axios, { AxiosResponse } from "axios";

const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = "?api_key=" + process.env.REACT_APP_API_KEY;

export default class MovieService {
  static getMovieList(
    page: number,
    sortBy: string,
    genres: string,
    year: number | undefined
  ): Promise<AxiosResponse<any>> {
    return axios.get<any>(
      `${API_URL}/discover/movie` +
        API_KEY +
        `&sort_by=${sortBy}&primary_release_year=${year}&page=${page}&with_genres=${genres}`
    );
  }
  static getGenresList(): Promise<AxiosResponse<any>> {
    return axios.get<any>(`${API_URL}/genre/movie/list${API_KEY}`);
  }
  static searchMovie(query: string, page: number, year: number | undefined): Promise<AxiosResponse<any>> {
    return axios.get<any>(
      `${API_URL}/search/movie` + API_KEY + `&query=${query}&primary_release_year=${year}&page=${page}`
    );
  }
}
