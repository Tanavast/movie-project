export interface IMovie {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: [];
  homepage: string;
  id: number;
  overview: string;
  popularity: number;
  poster_path: string | null;
  production_companies: [];
  production_countries: [];
  release_date: string;
  revenue: number;
  runtime: number;
  title: string;
  vote_average: number;
  vote_count: number;
}
