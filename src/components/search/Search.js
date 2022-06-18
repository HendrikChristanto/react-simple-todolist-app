import React, { useState } from "react";
import { AiOutlineSearch, AiOutlineCloseCircle } from "react-icons/ai";

import "./search.css";

const Search = (props) => {
  const [iconActive, setIconActive] = useState(false);

  const handleIcon = (value) => {
    if (value.length > 0 && !iconActive) {
      setIconActive(true);
    }
    if (value.length === 0 && iconActive) {
      setIconActive(false);
    }
  };

  return (
    <section className="search">
      <div className="container search__container">
        <div className="search__form">
          <AiOutlineSearch size="1.5rem" />
          <input
            className="search__input"
            type="text"
            placeholder="Search todo..."
            value={props.searchText}
            onChange={(event) => {
              const newValue = event.target.value;
              props.handleSearchText(newValue);
              handleIcon(newValue);
            }}
          />
          <AiOutlineCloseCircle
            className={
              iconActive
                ? "search__close-icon icon-active"
                : "search__close-icon"
            }
            size="1.5rem"
            onClick={(event) => {
              props.handleSearchText("");
              handleIcon("");
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Search;
