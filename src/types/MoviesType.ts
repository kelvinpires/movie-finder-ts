export type MoviesType = {
  name: string;
  title: string;
  overview: string;
  id: number;
  backdrop_path: string;
  poster_path: string;
  media_type: string;
  genres: Array<{ id: number; name: string }>;
  videos: Array<{
    key: string;
    type: string;
    official: boolean;
    name: string;
    id: string;
  }>;
  runtime: number;
  revenue: number;
  budget: number;
  vote_average: number;
  release_date: string;

  images: ImagesType;
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
  trending: MoviesType[];

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
