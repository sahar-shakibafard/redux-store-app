import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { SiOpenproject } from "react-icons/si";
import { IoMdPricetag } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";

// import { useProductDetails } from "../context/ProductsContext.jsx";
import { fetchProducts } from "../features/products/productsSlice.js";
import Loader from "../components/Loader.jsx";

import styles from "./DetailsPage.module.css";

const DetailsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  const { id } = useParams();
  const productDetails = useSelector(store => store.products.products.find(item => item.id === +id));
  if (!productDetails) return <Loader />;
  return (
    <>
      <article className={styles.container}>
        <img src={productDetails.image} alt={productDetails.title} />
        <div className={styles.information}>
          <h3 className={styles.title}>{productDetails.title}</h3>
          <p className={styles.description}>{productDetails.description}</p>
          <p className={styles.category}>
            <SiOpenproject /> {productDetails.category}
          </p>
          <div>
            <span className={styles.price}>
              <IoMdPricetag /> {productDetails.price} $
            </span>
            <Link to="/products">
              <FaArrowLeft />
              <span> Back to shop</span>
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};

export default DetailsPage;
