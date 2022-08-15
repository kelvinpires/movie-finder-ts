import {
  FilmSlate,
  House,
  MagnifyingGlass,
  Plus,
  TelevisionSimple,
} from "phosphor-react";
import { Nav, NavigationLi, NavigationLink, NavigationUl } from "./styles";

export const Menubar = () => {
  return (
    <Nav>
      <NavigationUl>
        <NavigationLi>
          <NavigationLink to="/">
            <House size={34} weight="bold" />
          </NavigationLink>
        </NavigationLi>
        <NavigationLi>
          <NavigationLink to="/movie">
            <FilmSlate size={34} weight="bold" />
          </NavigationLink>
        </NavigationLi>
        <NavigationLi>
          <NavigationLink to="/tv">
            <TelevisionSimple size={34} weight="bold" />
          </NavigationLink>
        </NavigationLi>
        <NavigationLi>
          <NavigationLink to="/watchlist">
            <Plus size={34} weight="bold" />
          </NavigationLink>
        </NavigationLi>
        <NavigationLi>
          <NavigationLink to="/search">
            <MagnifyingGlass size={34} weight="bold" />
          </NavigationLink>
        </NavigationLi>
      </NavigationUl>
    </Nav>
  );
};
