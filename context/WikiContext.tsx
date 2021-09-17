import { useQuery } from "@apollo/client";
import { createContext, useEffect, useState } from "react";
import { GET_CHARACTERS } from "../apollo/queries/characters";
import { GET_FAVOURITES } from "../apollo/queries/charactersList";
import { GET_EPISODES } from "../apollo/queries/episodes";
import { GET_PLACES } from "../apollo/queries/places";

export const WikiContext = createContext(null);

export const WikiProvider = ({ children }) => {
  const [favourites, setFavourites] = useState<number[]>([]);
  const [characters, setCharacters] = useState();
  const [locations, setLocations] = useState();
  const [episodes, setEpisodes] = useState();
  const [page, setPage] = useState<number>(1);
  const [activedPage, setActivedPage] = useState("");
  const [searchString, setSearchString] = useState("{}");

  const { data: charactersData, loading: loadingCharacters } = useQuery(
    GET_CHARACTERS(page, searchString)
  );
  const { data: favouritesData, loading: loadingFavourites } = useQuery(
    GET_FAVOURITES(favourites)
  );
  const { data: episodesData, loading: loadingEpisodes } = useQuery(
    GET_EPISODES(page, searchString)
  );
  const { data: locationsData, loading: loadingLocations } = useQuery(
    GET_PLACES(page, searchString)
  );

  useEffect(() => {
    if (charactersData && activedPage === "personajes") {
      setCharacters(charactersData.characters);
    }
    if (episodesData && activedPage === "episodios") {
      setEpisodes(episodesData.episodes);
    }
    if (locationsData && activedPage === "lugares") {
      setLocations(locationsData.locations);
    }
  }, [charactersData, episodesData, locationsData, activedPage]);

  const pageSelector = (event) => {
    setPage(Number(event.target.text));
  };

  const handleActivedPage = (page) => {
    setActivedPage(page);
  };

  const handleFavourites = (id) => {
    if (favourites.includes(id)) {
      const array = favourites.filter((element) => element !== id);
      setFavourites(array);
      window.localStorage.setItem("favouritesList", JSON.stringify(array));
    } else {
      const array = [...favourites, id];
      setFavourites(array);
      window.localStorage.setItem("favouritesList", JSON.stringify(array));
    }
  };

  useEffect(() => {
    setPage(1);
    setSearchString("{}");
  }, [activedPage]);

  useEffect(() => {
    setPage(1);
  }, [searchString]);

  useEffect(() => {
    const favList = window.localStorage.getItem("favouritesList");
    if (favList) {
      const list = JSON.parse(favList);
      setFavourites(list);
    }
  }, []);

  return (
    <WikiContext.Provider
      value={{
        favouritesData,
        favourites,
        characters,
        locations,
        episodes,
        page,
        activedPage,
        loadingEpisodes,
        loadingFavourites,
        loadingCharacters,
        loadingLocations,
        searchString,
        handleActivedPage,
        handleFavourites,
        setSearchString,
        pageSelector,
      }}
    >
      {children}
    </WikiContext.Provider>
  );
};
