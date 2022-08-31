import { SetStateAction } from "react";

export type MoviesPropsContext = {
  store: {
    watchlist: Array<{
      id: number;
      media_type: string;
    }>;
  };
  addToWatchlist: (content: { media_type: string; id: number }) => void;
  removeFromWatchlist: (content: { media_type: string; id: number }) => void;
  getTrending: () => // setState: (state: SetStateAction<ContentResponse[]>) => void
  void;

  getCategory: (
    media_type: string,
    category: string
    // setState: (state: SetStateAction<ContentResponse[]>) => void
  ) => void;
  getDetails: (
    media_type: string,
    id: number
    // setState?: (state: ContentResponse[]) => void
  ) => void;
  getSearch: (search: string) => void;

  getEpisodes: (
    tv_id: string,
    season: number,
    setEpisodes: (state: Season) => void
  ) => void;

  getGenres: (type: string) => void;

  getContentByGenre: (
    type: string,
    genres: number[],
    page: number
    // setState: (state: SetStateAction<ContentResponse[]>) => void
  ) => void;
  getPersonData: (id: string) => void;
};

export interface Genre {
  id: number;
  name: string;
}

export interface ProductionCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface Result {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: Date;
  id: string;
}

export interface Videos {
  results: Result[];
}

export interface Flatrate {
  display_priority: number;
  logo_path: string;
  provider_id: number;
  provider_name: string;
}

export interface BR {
  link: string;
  flatrate: Flatrate[];
}

export interface ResultsProviders {
  BR: BR;
}

export interface WatchProviders {
  results: ResultsProviders;
}

export interface MovieCast {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}

export interface MovieCredits {
  cast: MovieCast[];
}

export interface Backdrop {
  aspect_ratio: number;
  height: number;
  iso_639_1: string;
  file_path: string;
  vote_average: number;
  vote_count: number;
  width: number;
}

export interface Logo {
  aspect_ratio: number;
  height: number;
  iso_639_1: string;
  file_path: string;
  vote_average: number;
  vote_count: number;
  width: number;
}

export interface Poster {
  aspect_ratio: number;
  height: number;
  iso_639_1: string;
  file_path: string;
  vote_average: number;
  vote_count: number;
  width: number;
}

export interface Images {
  backdrops: Backdrop[];
  logos: Logo[];
  posters: Poster[];
}

export interface ReleaseDate {
  certification: string;
  iso_639_1: string;
  note: string;
  release_date: Date;
  type: number;
}

export interface ResultReleaseDates {
  iso_3166_1: string;
  release_dates: ReleaseDate[];
}

export interface ReleaseDates {
  results: ResultReleaseDates[];
}

export interface ResultRecommendations {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title: string;
  name: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface Recommendations {
  page: number;
  results: ResultRecommendations[];
  total_pages: number;
  total_results: number;
}

export interface Movies {
  adult: boolean;
  backdrop_path: string;
  budget: number;
  genres: Genre[];
  id: number;
  media_type: string;
  overview: string;
  poster_path: string;
  production_companies: ProductionCompany[];
  release_date: string;
  revenue: number;
  runtime: number;
  title: string;
  vote_average: number;
  videos: Videos;
  "watch/providers": WatchProviders;
  credits: MovieCredits;
  images: Images;
  release_dates: ReleaseDates;
  recommendations: Recommendations;
}

// series

export interface CreatedBy {
  id: number;
  credit_id: string;
  name: string;
  gender: number;
  profile_path: string;
}

export interface Genre {
  id: number;
  name: string;
}

export interface LastEpisodeToAir {
  air_date: string;
  episode_number: number;
  id: number;
  name: string;
  overview: string;
  production_code: string;
  runtime: number;
  season_number: number;
  show_id: number;
  still_path: string;
  vote_average: number;
  vote_count: number;
}

export interface Network {
  id: number;
  name: string;
  logo_path: string;
  origin_country: string;
}

export interface SeasonsLength {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
}

export interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface ResultVideos {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: Date;
  id: string;
}

export interface Videos {
  results: ResultVideos[];
}

export interface ResultContentRatings {
  iso_3166_1: string;
  rating: string;
}

export interface ContentRatings {
  results: ResultContentRatings[];
}

export interface Flatrate {
  display_priority: number;
  logo_path: string;
  provider_id: number;
  provider_name: string;
}

export interface BR {
  link: string;
  flatrate: Flatrate[];
}

export interface Results {
  BR: BR;
}

export interface WatchProviders {
  results: Results;
}

export interface Result3 {
  adult: boolean;
  backdrop_path: string;
  id: number;
  name: string;
  original_language: string;
  original_name: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: number[];
  popularity: number;
  first_air_date: string;
  vote_average: number;
  vote_count: number;
  origin_country: string[];
}

export interface TvCast {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  character: string;
  credit_id: string;
  order: number;
}

export interface TvCrew {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  credit_id: string;
  department: string;
  job: string;
}

export interface TvCredits {
  cast: TvCast[];
  crew: TvCrew[];
}

export interface Backdrop {
  aspect_ratio: number;
  height: number;
  iso_639_1: string;
  file_path: string;
  vote_average: number;
  vote_count: number;
  width: number;
}

export interface Logo {
  aspect_ratio: number;
  height: number;
  iso_639_1: string;
  file_path: string;
  vote_average: number;
  vote_count: number;
  width: number;
}

export interface Poster {
  aspect_ratio: number;
  height: number;
  iso_639_1: string;
  file_path: string;
  vote_average: number;
  vote_count: number;
  width: number;
}

export interface Images {
  backdrops: Backdrop[];
  logos: Logo[];
  posters: Poster[];
}

export interface Tv {
  adult: boolean;
  backdrop_path: string;
  created_by: CreatedBy[];
  episode_run_time: number[];
  first_air_date: string;
  genres: Genre[];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: LastEpisodeToAir;
  name: string;
  next_episode_to_air?: any;
  networks: Network[];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  seasons: SeasonsLength[];
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
  videos: Videos;
  content_ratings: ContentRatings;
  "watch/providers": WatchProviders;
  recommendations: Recommendations;
  credits: TvCredits;
  images: Images;
}

// person

export interface ProfileImages {
  aspect_ratio: number;
  height: number;
  iso_639_1?: any;
  file_path: string;
  vote_average: number;
  vote_count: number;
  width: number;
}

export interface PersonImages {
  profiles: ProfileImages[];
}

export interface PersonMovieCastInfo {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  media_type?: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  name?: string;

  video: boolean;
  vote_average: number;
  vote_count: number;
  character: string;
  credit_id: string;
  order: number;
}

export interface PersonMovieCrewInfo {
  adult: boolean;
  backdrop_path?: any;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  credit_id: string;
  department: string;
  job: string;
}

export interface PersonMovieCredits {
  cast: PersonMovieCastInfo[];
  crew: PersonMovieCrewInfo[];
}

export interface PersonTvCastInfo {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  media_type?: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  first_air_date: string;
  title?: string;
  name: string;
  vote_average: number;
  vote_count: number;
  character: string;
  credit_id: string;
  episode_count: number;
}

export interface PersonTvCrewInfo {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  first_air_date: string;
  name: string;
  vote_average: number;
  vote_count: number;
  credit_id: string;
  department: string;
  episode_count: number;
  job: string;
}

export interface PersonTvCredits {
  cast: PersonTvCastInfo[];
  crew: PersonTvCrewInfo[];
}

export interface Person {
  adult: boolean;
  also_known_as: string[];
  biography: string;
  birthday: string;
  deathday?: any;
  gender: number;
  homepage?: any;
  id: number;
  imdb_id: string;
  known_for_department: string;
  name: string;
  place_of_birth: string;
  popularity: number;
  profile_path: string;
  images: PersonImages;
  movie_credits: PersonMovieCredits;
  tv_credits: PersonTvCredits;
}

// search

export interface KnownFor {
  poster_path: string;
  adult: boolean;
  overview: string;
  release_date: string;
  original_title: string;
  genre_ids: number[];
  id: number;
  media_type: string;
  original_language: string;
  title: string;
  backdrop_path: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
  first_air_date: string;
  origin_country: string[];
  name: string;
  original_name: string;
}

export interface SearchResult {
  poster_path: string;
  popularity: number;
  id: number;
  overview: string;
  backdrop_path: string;
  vote_average: number;
  media_type: string;
  first_air_date: string;
  origin_country: string[];
  genre_ids: number[];
  original_language: string;
  vote_count: number;
  name: string;
  original_name: string;
  adult?: boolean;
  release_date: string;
  original_title: string;
  title: string;
  video?: boolean;
  profile_path: string;
  known_for: KnownFor[];
}

export interface SearchType {
  page: number;
  results: SearchResult[];
  total_results: number;
  total_pages: number;
}

// episodes

export interface EpisodeCrew {
  job: string;
  department: string;
  credit_id: string;
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
}

export interface GuestStar {
  character: string;
  credit_id: string;
  order: number;
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
}

export interface Episode {
  air_date: string;
  episode_number: number;
  id: number;
  name: string;
  overview: string;
  production_code: string;
  runtime: number;
  season_number: number;
  show_id: number;
  still_path: string;
  vote_average: number;
  vote_count: number;
  crew: EpisodeCrew[];
  guest_stars: GuestStar[];
}

export interface Season {
  air_date: string;
  episodes: Episode[];
  name: string;
  overview: string;
  id: number;
  poster_path: string;
  season_number: number;
}

export type ContentResponse = Movies & Tv;

// discover

export interface Discover {
  page: number;
  results: ContentResponse[];
  total_results: number;
  total_pages: number;
}
