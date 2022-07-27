import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { API_URL } from "../hooks/useApi";
import { MoviesPropsContext, MoviesType, StateType } from "../types/MoviesType";

const INITIAL_STATE = {
  trending: [],
  showSearchbar: false,
  setShowSearchbar: () => {},
  getCategory: () => {},
};

export const GlobalContext = createContext<MoviesPropsContext>(INITIAL_STATE);

export const GlobalContextProvider = ({ children }: PropsWithChildren) => {
  const [trending, setTrending] = useState<MoviesType[]>([]);
  const [showSearchbar, setShowSearchbar] = useState<boolean>(false);

  const API_KEY = import.meta.env.VITE_API_KEY;

  async function getTrending() {
    const res = await API_URL.get(
      `trending/all/day?api_key=${API_KEY}&language=pt-BR`
    );
    const data = await res.data.results.slice(0, 7);

    await data.map(({ media_type, id }: MoviesType) => {
      getDetails(media_type, id).then((data) =>
        setTrending((prev) => [...prev, data])
      );
    });
  }

  async function getDetails(media_type: string, id: number) {
    const res = await API_URL.get(
      `${media_type}/${id}?api_key=${API_KEY}&language=pt-BR&append_to_response=videos,images&include_image_language=pt,en,null`
    );
    const data: MoviesType = await res.data;

    data.media_type = media_type;

    const logosPT = data.images.logos.filter((logo) => logo.iso_639_1 === "pt");

    if (logosPT.length > 0) {
      data.images.logos = logosPT;
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

  useEffect(() => {
    getTrending();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        trending: trending.slice(0, 7),
        showSearchbar,
        setShowSearchbar,
        getCategory,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
