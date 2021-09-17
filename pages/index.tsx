import {
  CardContainer,
  DeleteButton,
  FavouriteMenu,
  ListContainer,
  SpinnerContainer,
} from "../styles/styles";
import CharactersCard from "../components/CharactersCard";
import { useContext, useEffect } from "react";
import { WikiContext } from "../context/WikiContext";
import Loader from "react-loader-spinner";
import Pagination from "../components/Pagination";

export default function Home() {
  const {
    favouritesData,
    handleActivedPage,
    handleFavourites,
    page,
    pageSelector,
    favourites,
    loadingFavourites,
  } = useContext(WikiContext);

  useEffect(() => {
    handleActivedPage("dashboard");
  }, [handleActivedPage]);

  if (!favouritesData || loadingFavourites) {
    return (
      <ListContainer>
        <SpinnerContainer>
          <Loader
            type="TailSpin"
            color="#044104"
            height={100}
            width={100}
            timeout={100000} //3 secs
          />
        </SpinnerContainer>
      </ListContainer>
    );
  }

  if (favourites.length === 0) {
    return (
      <ListContainer>
        <CardContainer>
          <h2>No hay personajes favoritos!</h2>
        </CardContainer>
      </ListContainer>
    );
  }

  return (
    <>
      <ListContainer>
        <h1>Personajes favoritos</h1>
        <CardContainer>
          {favouritesData.charactersByIds
            .slice((page - 1) * 10, page * 10)
            .map((character) => {
              return (
                <FavouriteMenu key={character.id}>
                  <CharactersCard character={character} />
                  <DeleteButton
                    onClick={() => handleFavourites(Number(character.id))}
                  >
                    Eliminar
                  </DeleteButton>
                </FavouriteMenu>
              );
            })}
        </CardContainer>
        <Pagination
          totalPages={Math.ceil(favouritesData.charactersByIds.length / 10)}
          selectedPage={page}
          pageSelector={pageSelector}
        />
      </ListContainer>
    </>
  );
}
