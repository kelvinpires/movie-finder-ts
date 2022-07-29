import { SetStateAction } from "react";

export type MoviesType = {
  name: string;
  title: string;
  overview: string;
  id: number;
  backdrop_path: string;
  poster_path: string;
  media_type: string;
  genres: Array<{ id: number; name: string }>;
  videos: {
    results: VideosType[];
  };
  runtime: number;
  revenue: number;
  budget: number;
  vote_average: number;
  release_date: string;
  first_air_date: string;
  release_dates: {
    results: Array<{
      iso_3166_1: string;
      release_dates: [
        {
          certification: string;
        }
      ];
    }>;
  };
  content_ratings: {
    results: Array<{
      iso_3166_1: string;
      rating: string;
    }>;
  };
  images: ImagesType;
  production_companies: Array<{
    id: number;
    name: string;
  }>;
  created_by: Array<{
    id: number;
    name: string;
  }>;
};

type VideosType = {
  key: string;
  type: string;
  official: boolean;
  name: string;
  id: string;
};

type ImagesType = {
  backdrops: Array<{
    file_path: string;
  }>;
  posters: Array<{
    file_path: string;
  }>;
  logos: Array<{
    file_path: string;
    iso_639_1: string;
  }>;
};

export type MoviesPropsContext = {
  getTrending: (
    setState: (state: SetStateAction<MoviesType[]>) => void
  ) => void;

  setShowSearchbar: (state: boolean) => void;
  showSearchbar: boolean;

  getCategory: (
    media_type: string,
    category: string,
    setState: (state: MoviesType[]) => void
  ) => void;
  getDetails: (
    media_type: string,
    id: number,
    setState?: (state: MoviesType[]) => void
  ) => void;
};

export type StateType = {
  setState?: (state: MoviesType[]) => void;
};
