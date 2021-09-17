import { gql } from "@apollo/client";

export const GET_EPISODES = (page: number, filter: string) => {
  return gql`
    query {
      episodes(page: ${page}, filter: ${filter}) {
        info {
          pages
        }
        results {
          id
          name
          air_date
          episode
          characters {
            name
          }
          created
        }
      }
    }
  `;
};
