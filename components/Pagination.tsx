import {
  ActivedPage,
  PageSelector,
  PaginationContainer,
} from "../styles/styles";

const Pagination = ({ totalPages, selectedPage, pageSelector }) => {
  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <PaginationContainer>
      {pages.map((page, index) => {
        return (
          <span key={index}>
            {selectedPage === page ? (
              <ActivedPage>{page}</ActivedPage>
            ) : (
              <PageSelector
                onClick={(event) => {
                  pageSelector(event);
                }}
              >
                {page}
              </PageSelector>
            )}
          </span>
        );
      })}
    </PaginationContainer>
  );
};

export default Pagination;
