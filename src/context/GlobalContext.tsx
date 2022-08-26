import {
  createContext,
  PropsWithChildren,
  SetStateAction,
  useEffect,
  useReducer,
  useState,
} from "react";
import { API_URL } from "../hooks/useApi";
import {
  MoviesPropsContext,
  ContentResponse,
  SearchType,
  Season,
  Person,
  SearchResult,
} from "../types/MoviesType";
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
  getEpisodes: () => {},
  getGenres: () => {},
  getContentByGenre: () => {},
  getPersonData: () => {},
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

  async function getTrending() {
    const res = await API_URL.get(
      `trending/all/day?api_key=${API_KEY}&language=pt-BR`
    );
    let data = await res.data.results.slice(0, 7);

    let content: ContentResponse[] = [];

    for (let i = 0; i < data.length; i++) {
      const details = await getDetails(data[i].media_type, data[i].id);

      content.push(details!);
    }

    return content;
  }

  async function getDetails(media_type: string, id: number) {
    const res = await API_URL.get(
      `${media_type}/${id}?api_key=${API_KEY}&language=pt-BR&append_to_response=videos,images,release_dates,content_ratings,watch/providers,combined_credits,credits,recommendations&include_image_language=pt,en,null`
    );
    const data: ContentResponse = await res.data;

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

    return data;
  }

  async function getCategory(media_type: string, category: string) {
    const res = await API_URL.get(
      `${media_type}/${category}?api_key=${API_KEY}&language=pt-BR&page=1`
    );
    let data: ContentResponse[] = await res.data.results;

    let content: ContentResponse[] = [];

    for (let i = 0; i < data.length; i++) {
      const details = await getDetails(media_type, data[i].id);

      content.push(details!);
    }

    return content;
  }

  async function getSearch(search: string) {
    const res = await API_URL.get(
      `search/multi?api_key=${API_KEY}&language=pt-BR&query=${search}&page=1`
    );
    const data: SearchResult[] = await res.data.results;

    return data;
  }

  async function getEpisodes(
    tv_id: string,
    season: number,
    setEpisodes: (state: Season) => void
  ) {
    const res = await API_URL.get(
      `tv/${tv_id}/season/${season}?api_key=${API_KEY}&language=pt-BR`
    );
    const data = await res.data;

    setEpisodes(data);
  }

  async function getGenres(type: string) {
    const res = await API_URL.get(
      `genre/${type}/list?api_key=${API_KEY}&language=pt-BR`
    );

    const data: Array<{ id: number; name: string }> = await res.data.genres;

    return data;
  }

  async function getContentByGenre(
    type: string,
    genres: number[],
    page: number = 1
  ) {
    const res = await API_URL.get(
      `discover/${type}?api_key=${API_KEY}&language=pt-BR&region=br&sort_by=popularity.desc&page=${page}&with_genres=${genres.toString()}`
    );
    const data: ContentResponse[] = await res.data.results;

    data.map((item) => {
      item.media_type = type;
    });

    return data;
  }

  async function getPersonData(id: string) {
    const res = await API_URL.get(
      `person/${id}?api_key=${API_KEY}&language=pt-BR&append_to_response=images,movie_credits,tv_credits`
    );
    const data: Person = await res.data;

    return data;
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
        getEpisodes,
        getGenres,
        getContentByGenre,
        getPersonData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
