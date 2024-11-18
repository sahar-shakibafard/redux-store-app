import { FaListUl } from "react-icons/fa";

import { createQueryObject } from "../helpers/helper.js";
import { categories } from "../constants/list.js";

import styles from "./Sidebar.module.css";

const Sidebar = ({ query, setQuery }) => {
  const categoryHandler = (event) => {
    const { tagName } = event.target;
    const category = event.target.innerText.toLowerCase();
    setQuery((query) => createQueryObject(query, { category }));

    if (tagName !== "LI") return;
  };

  return (
    <>
      <section className={styles.sidebar}>
        <div>
          <FaListUl />
          <p>Categories</p>
        </div>
        <ul onClick={categoryHandler}>
          {categories.map(item => (<li key={item.id} className={item.type.toLowerCase() === query.category ? styles.selected : null}>{item.type}</li>))}
        </ul>
      </section>
    </>
  );
};

export default Sidebar;
