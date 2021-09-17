import { gql } from "@apollo/client";

export const GET_PLACES = (page: number, filter: string) => {
  return gql`
    query {
      locations(page: ${page}, filter: ${filter}) {
        info{
          pages
        }
        results {
          id
          name
          type
          dimension
          residents {
            name
          }
          created
        }
      }
    }
  `;
};
