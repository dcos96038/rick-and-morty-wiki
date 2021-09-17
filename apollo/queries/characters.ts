import { gql } from "@apollo/client";

export const GET_CHARACTERS = (page: number, filter: string) => {
  return gql`
  query {
    characters(page: ${page}, filter: ${filter}) {
      info{
        pages
      }
      results {
        id
        name
        species
        image
        status
        gender
        origin {
          name
        }
        episode {
          name
        }
      }
    }
  }
  `;
};
