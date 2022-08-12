import { SetStateAction } from "react";

export type PersonType = {
  name: string;
  biography?: string;
  id: number;
  birthday?: string;
  place_of_birth?: string;
  profile_path: string;
  deathday?: string;
  character?: string;
};

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
  credits: {
    cast: PersonType[];
  };
  "watch/providers": {
    results: {
      BR: {
        flatrate: Array<{
          logo_path: string;
          provider_id: number;
          provider_name: string;
        }>;
      };
    };
  };
  recommendations: {
    results: Array<{
      name: string;
      title: string;
      id: number;
      media_type: string;
      poster_path: string;
      vote_average: number;
    }>;
  };
  seasons: Array<{
    episode_count: number;
    season_number: number;
  }>;
};

export type MultiType = MoviesType & PersonType;

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

export type EpisodesPropsType = {
  episodes: [
    {
      air_date: string;
      episode_number: number;
      runtime: number;
      name: string;
      overview: string;
      still_path: string;
    }
  ];
};

export type MoviesPropsContext = {
  store: {
    watchlist: Array<{
      id: number;
      media_type: string;
    }>;
  };
  addToWatchlist: (content: { media_type: string; id: number }) => void;
  removeFromWatchlist: (content: { media_type: string; id: number }) => void;
  getTrending: (
    setState: (state: SetStateAction<MoviesType[]>) => void
  ) => void;

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
  getSearch: (
    search: string,
    setContent: (content: MultiType[]) => void
  ) => void;

  getEpisodes: (
    tv_id: string,
    season: number,
    setEpisodes: (state: EpisodesPropsType) => void
  ) => void;
};

export type StateType = {
  setState?: (state: MoviesType[]) => void;
};
