import React, { useContext, useEffect } from "react";
import Loader from "react-loader-spinner";
import CharactersCard from "../components/CharactersCard";
import Pagination from "../components/Pagination";
import { WikiContext } from "../context/WikiContext";
import {
  AddButton,
  CardContainer,
  DeleteButton,
  FavouriteMenu,
  ListContainer,
  SpinnerContainer,
} from "../styles/styles";

const Characters = () => {
  const {
    favourites,
    pageSelector,
    page,
    handleFavourites,
    handleActivedPage,
    characters,
    loadingCharacters,
  } = useContext(WikiContext);

  useEffect(() => {
    handleActivedPage("personajes");
  }, [handleActivedPage]);

  if (!characters || loadingCharacters) {
    return (
      <ListContainer>
        <SpinnerContainer>
          <Loader
            type="TailSpin"
            color="#044104"
            height={100}
            width={100}
            timeout={100000}
          />
        </SpinnerContainer>
      </ListContainer>
    );
  }

  console.log("si hay");

  console.log(characters);

  return (
    <>
      <ListContainer>
        <h1>Personajes</h1>
        <CardContainer>
          {characters.results.map((character) => {
            return (
              <FavouriteMenu key={character.id}>
                <CharactersCard character={character} />
                {favourites.includes(Number(character.id)) ? (
                  <DeleteButton
                    onClick={() => handleFavourites(Number(character.id))}
                  >
                    Eliminar
                  </DeleteButton>
                ) : (
                  <AddButton
                    onClick={() => handleFavourites(Number(character.id))}
                  >
                    Agregar
                  </AddButton>
                )}
              </FavouriteMenu>
            );
          })}
        </CardContainer>
        <Pagination
          totalPages={characters.info.pages}
          selectedPage={page}
          pageSelector={pageSelector}
        />
      </ListContainer>
    </>
  );
};

export default React.memo(Characters);
