import { SearchContainer, SearchInput, StyledSelect } from "../styles/styles";
import React, { useContext, useEffect, useState } from "react";
import { WikiContext } from "../context/WikiContext";

const SearchComponent = ({ option }) => {
  const [type, setType] = useState(null);
  const [search, setSearch] = useState();
  const textInput = React.useRef();

  const { setSearchString, activedPage } = useContext(WikiContext);

  const handleSearchType = (type) => {
    setType(type);
  };

  const handleSearch = (search) => {
    const searchValue = search.target.value;
    const typeValue = type.value;
    const searchString = `{${typeValue}: "${searchValue}"}`;
    if (searchValue.length > 3) {
      setSearchString(searchString);
    } else {
      setSearchString("{}");
    }
  };

  useEffect(() => {
    setSearch(null);
    setType(null);
  }, [activedPage]);

  // (selectInput.current.props.value);

  return (
    <SearchContainer>
      <h3>BUSQUEDA</h3>
      <div>
        <StyledSelect
          id="type-select"
          instanceId="type-select"
          placeholder={"Tipo de busqueda"}
          options={option}
          value={type}
          onChange={handleSearchType}
        />
        <SearchInput
          defaultValue={""}
          ref={textInput}
          value={search}
          onChange={handleSearch}
        />
      </div>
    </SearchContainer>
  );
};

export default React.memo(SearchComponent);
