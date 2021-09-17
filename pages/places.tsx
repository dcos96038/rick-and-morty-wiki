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

export default function Places() {
  const { handleActivedPage, locations, page, pageSelector, loadingLocations } =
    useContext(WikiContext);

  useEffect(() => {
    handleActivedPage("lugares");
  });

  if (!locations || loadingLocations) {
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
        <h1>Lugares</h1>
        <CardContainer>
          <CardContainer>
            {locations.results.map((place) => {
              return <CardComponent list={place} key={place.id} />;
            })}
          </CardContainer>
        </CardContainer>
        <Pagination
          totalPages={locations.info.pages}
          selectedPage={page}
          pageSelector={pageSelector}
        />
      </ListContainer>
    </>
  );
}

export async function getStaticProps() {
  const placesOptions = [
    { value: "name", label: "Nombre" },
    { value: "type", label: "Tipo" },
    { value: "dimension", label: "Dimension" },
  ];

  return {
    props: {
      options: placesOptions,
    },
  };
}
