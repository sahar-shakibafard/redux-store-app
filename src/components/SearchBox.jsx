import { ImSearch } from "react-icons/im";

import { createQueryObject } from "../helpers/helper.js";

import styles from "./SearchBox.module.css";

const SearchBox = ({search, setSearch, query, setQuery}) => {
    const changeHandler = (event) => {
        setSearch(event.target.value.toLowerCase());
      };
    
      const searchHandler = () => {
        setQuery((query) => createQueryObject(query, { search }));
      };

  return (
    <>
      <div className={styles.search}>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={changeHandler}
        />
        <button onClick={searchHandler}>
          <ImSearch />
        </button>
      </div>
    </>
  );
};

export default SearchBox;
