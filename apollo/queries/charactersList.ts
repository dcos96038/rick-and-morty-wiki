import { gql } from "@apollo/client";

export const GET_FAVOURITES = (ids: number[]) => {
  const array = ids.toString();
  return gql`
    query {
      charactersByIds(ids: [${array}]) {
        id
        name
        species
        image
      }
    }
  `;
};
