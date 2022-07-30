import {
  createContext,
  PropsWithChildren,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { API_URL } from "../hooks/useApi";
import { MoviesPropsContext, MoviesType, StateType } from "../types/MoviesType";

const INITIAL_STATE = {
  getTrending: () => {},
  showSearchbar: false,
  setShowSearchbar: () => {},
  getCategory: () => {},
  getDetails: () => {},
};

export const GlobalContext = createContext<MoviesPropsContext>(INITIAL_STATE);

export const GlobalContextProvider = ({ children }: PropsWithChildren) => {
  const [showSearchbar, setShowSearchbar] = useState<boolean>(false);

  const API_KEY = import.meta.env.VITE_API_KEY;

  async function getTrending(
    setState: (state: SetStateAction<MoviesType[]>) => void
  ) {
    const res = await API_URL.get(
      `trending/all/day?api_key=${API_KEY}&language=pt-BR`
    );
    const data = await res.data.results.slice(0, 7);

    await data.map(({ media_type, id }: MoviesType) => {
      getDetails(media_type, id).then((data) =>
        setState((prev) => [...prev, data!])
      );
    });
  }

  async function getDetails(
    media_type: string,
    id: number,
    setState?: (state: MoviesType[]) => void
  ) {
    const res = await API_URL.get(
      `${media_type}/${id}?api_key=${API_KEY}&language=pt-BR&append_to_response=videos,images,release_dates,content_ratings,watch/providers,combined_credits,credits&include_image_language=pt,en,null`
    );
    const data: MoviesType = await res.data;

    const movieCertificationFilter = data.release_dates?.results.filter(
      (result) => result.iso_3166_1 === "BR"
    );

    const tvCertificationFilter = data.content_ratings?.results.filter(
      (result) => result.iso_3166_1 === "BR"
    );

    if (data.release_dates && movieCertificationFilter.length > 0) {
      data.release_dates.results = movieCertificationFilter;
    }

    if (data.content_ratings && tvCertificationFilter.length > 0) {
      data.content_ratings.results = tvCertificationFilter;
    }

    data.media_type = media_type;

    const logosPT = data.images.logos.filter((logo) => logo.iso_639_1 === "pt");

    if (logosPT.length > 0) {
      data.images.logos = logosPT;
    }

    if (setState) {
      return setState([data]);
    }

    return data;
  }

  async function getCategory(
    media_type: string,
    category: string,
    setState: (state: MoviesType[]) => void
  ) {
    const res = await API_URL.get(
      `${media_type}/${category}?api_key=${API_KEY}&language=pt-BR&page=1`
    );
    let data: MoviesType[] = await res.data.results;

    data.map((item) => {
      item.media_type = media_type;
    });

    setState(data);
  }

  return (
    <GlobalContext.Provider
      value={{
        getTrending,
        showSearchbar,
        setShowSearchbar,
        getCategory,
        getDetails,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
