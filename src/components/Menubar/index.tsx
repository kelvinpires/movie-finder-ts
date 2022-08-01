import {
  FilmStrip,
  House,
  MagnifyingGlass,
  Plus,
  Television,
} from "phosphor-react";
import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { Nav, NavigationLi, NavigationLink, NavigationUl } from "./styles";

export const Menubar = () => {
  const { setShowSearchbar, showSearchbar } = useContext(GlobalContext);

  return (
    <Nav>
      <NavigationUl>
        <NavigationLi>
          <NavigationLink to="/">
            <House size={34} weight="bold" />
          </NavigationLink>
        </NavigationLi>
        <NavigationLi>
          <NavigationLink to="/movies">
            <FilmStrip size={34} weight="bold" />
          </NavigationLink>
        </NavigationLi>
        <NavigationLi>
          <NavigationLink to="/series">
            <Television size={34} weight="bold" />
          </NavigationLink>
        </NavigationLi>
        <NavigationLi>
          <NavigationLink to="/watchlist">
            <Plus size={34} weight="bold" />
          </NavigationLink>
        </NavigationLi>
        <NavigationLi>
          <NavigationLink
            onClick={() => setShowSearchbar(!showSearchbar)}
            to="#"
          >
            <MagnifyingGlass size={34} weight="bold" />
          </NavigationLink>
        </NavigationLi>
      </NavigationUl>
    </Nav>
  );
};
