import { useContext } from "react";

import { Banner } from "../../components/Banner";
import { GlobalContext } from "../../context/GlobalContext";

export const HomePage = () => {
  const { trending } = useContext(GlobalContext);

  return (
    <>
      <Banner content={trending} />
    </>
  );
};
