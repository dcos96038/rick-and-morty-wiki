import React, { useContext } from "react";
import { WikiContext } from "../context/WikiContext";
import { HomeContainer } from "../styles/styles";
import SearchComponent from "./SearchComponent";
import Sidebar from "./Sidebar";

const charactersOptions = [
  { value: "name", label: "Nombre" },
  { value: "species", label: "Especie" },
  { value: "status", label: "Estado" },
  { value: "gender", label: "Genero" },
];

const episodesOptions = [
  { value: "name", label: "Nombre" },
  { value: "episode", label: "Episodio" },
];

const placesOptions = [
  { value: "name", label: "Nombre" },
  { value: "type", label: "Tipo" },
  { value: "dimension", label: "Dimension" },
];

const Layout = ({ children }) => {
  const { activedPage } = useContext(WikiContext);
  let options;

  if (activedPage === "dashboard") {
    options = charactersOptions;
  }
  if (activedPage === "episodios") {
    options = episodesOptions;
  }
  if (activedPage === "lugares") {
    options = placesOptions;
  }
  if (activedPage === "personajes") {
    options = charactersOptions;
  }

  return (
    <HomeContainer>
      <Sidebar />
      <div>
        {activedPage === "dashboard" ? (
          ""
        ) : (
          <SearchComponent option={options} />
        )}
        {children}
      </div>
    </HomeContainer>
  );
};

export default Layout;
