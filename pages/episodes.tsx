import { useContext, useEffect } from "react";
import Loader from "react-loader-spinner";
import CardComponent from "../components/CardComponent";
import Pagination from "../components/Pagination";
import { WikiContext } from "../context/WikiContext";
import {
  CardContainer,
  ListContainer,
  SpinnerContainer,
} from "../styles/styles";

export default function Episodes() {
  const { handleActivedPage, episodes, page, pageSelector, loadingEpisodes } =
    useContext(WikiContext);

  useEffect(() => {
    handleActivedPage("episodios");
  });

  if (!episodes || loadingEpisodes) {
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

  return (
    <>
      <ListContainer>
        <h1>Episodios</h1>
        <CardContainer>
          {episodes.results.map((ep) => {
            return <CardComponent list={ep} key={ep.id} />;
          })}
        </CardContainer>
        <Pagination
          totalPages={episodes.info.pages}
          selectedPage={page}
          pageSelector={pageSelector}
        />
      </ListContainer>
    </>
  );
}
