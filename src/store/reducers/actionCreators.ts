import { AuthActionCreators } from "./auth/action-creators";
import { MovieListAC } from "./movie-list/action-creators";

export const allActionCreators = {
  ...AuthActionCreators,
  ...MovieListAC,
};
