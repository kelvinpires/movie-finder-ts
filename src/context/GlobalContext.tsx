import {
  createContext,
  PropsWithChildren,
  SetStateAction,
  useEffect,
  useReducer,
  useState,
} from "react";
import { API_URL } from "../hooks/useApi";
import { MoviesPropsContext, MoviesType, MultiType } from "../types/MoviesType";
import AppReducer from "./AppReducer";

const INITIAL_STATE = {
  store: {
    watchlist: localStorage.watchlist ? JSON.parse(localStorage.watchlist) : [],
  },
  addToWatchlist: () => {},
  removeFromWatchlist: () => {},
  getTrending: () => {},
  getCategory: () => {},
  getDetails: () => {},
  getSearch: () => {},
};

export const GlobalContext = createContext<MoviesPropsContext>(INITIAL_STATE);

export const GlobalContextProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(AppReducer, INITIAL_STATE.store);

  function addToWatchlist(content: { media_type: string; id: number }) {
    dispatch({ type: "ADD_TO_WATCHLIST", payload: content });
  }
  function removeFromWatchlist(content: { media_type: string; id: number }) {
    dispatch({ type: "REMOVE_FROM_WATCHLIST", payload: content });
  }

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
  }, [state]);

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
      `${media_type}/${id}?api_key=${API_KEY}&language=pt-BR&append_to_response=videos,images,release_dates,content_ratings,watch/providers,combined_credits,credits,recommendations&include_image_language=pt,en,null`
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

  async function getSearch(
    search: string,
    setContent: (content: MultiType[]) => void
  ) {
    const res = await API_URL.get(
      `search/multi?api_key=${API_KEY}&language=pt-BR&query=${search}&page=1`
    );
    const data: MultiType[] = await res.data.results;

    setContent(data);
  }

  return (
    <GlobalContext.Provider
      value={{
        store: state,
        addToWatchlist,
        removeFromWatchlist,
        getTrending,
        getCategory,
        getDetails,
        getSearch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
