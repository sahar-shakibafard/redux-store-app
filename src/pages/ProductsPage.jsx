import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// import { useProducts } from "../context/ProductsContext.jsx";
import { fetchProducts } from "../features/products/productsSlice.js";
import {
  searchProducts,
  filterProducts,
  getInitialQuery,
} from "../helpers/helper.js";

import styles from "./ProductsPage.module.css";

import ProductCard from "../components/ProductCard.jsx";
import Loader from "../components/Loader.jsx";
import Sidebar from "../components/Sidebar.jsx";
import SearchBox from "../components/SearchBox.jsx";

const ProductsPage = () => {
  // const products = useProducts();
  const dispatch = useDispatch();
  const products = useSelector((store) => store.products);
  // const products = [];

  const [displayed, setDisplayed] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState({});

  const [searchParams, setSearchParams] = useSearchParams();

  // useEffect(() => {
  //   setDisplayed(products);
  //   setQuery(getInitialQuery(searchParams));
  // }, [products]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    setSearchParams(query);
    setSearch(query.search || "");

    let finalProducts = searchProducts(products.products, query.search);
    finalProducts = filterProducts(finalProducts, query.category);
    setDisplayed(finalProducts);
  }, [query]);

  return (
    <>
      <SearchBox
        search={search}
        setSearch={setSearch}
        query={query}
        setQuery={setQuery}
      />
      <div className={styles.container}>
        <section className={styles.products}>
          {products.loading && <Loader />}
          {products.products.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </section>
        <Sidebar query={query} setQuery={setQuery} />
      </div>
    </>
  );
};

export default ProductsPage;
