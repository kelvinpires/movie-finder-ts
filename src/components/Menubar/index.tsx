import { FilmStrip, House, MagnifyingGlass, Television } from "phosphor-react";
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
            <House size={40} />
          </NavigationLink>
        </NavigationLi>
        <NavigationLi>
          <NavigationLink to="/">
            <FilmStrip size={40} />
          </NavigationLink>
        </NavigationLi>
        <NavigationLi>
          <NavigationLink to="/">
            <Television size={40} />
          </NavigationLink>
        </NavigationLi>
        <NavigationLi>
          <NavigationLink
            onClick={() => setShowSearchbar(!showSearchbar)}
            to="#"
          >
            <MagnifyingGlass size={40} />
          </NavigationLink>
        </NavigationLi>
      </NavigationUl>
    </Nav>
  );
};
