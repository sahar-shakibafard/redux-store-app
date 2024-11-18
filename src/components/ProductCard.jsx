import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { TbListDetails } from "react-icons/tb";
import { TbShoppingBagCheck } from "react-icons/tb";
import { MdDeleteOutline } from "react-icons/md";

import { shortenText, productQuantity } from "../helpers/helper.js";
// import { useCart } from "../context/CartContext.jsx";
import {
  addItem,
  removeItem,
  increaseItem,
  decreaseItem,
} from "../features/cart/cartSlice.js";

import styles from "./ProductCard.module.css";

const ProductCard = ({ data }) => {
  const { id, title, image, price } = data;

  // const [state, dispatch] = useCart();
  const state = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  const quantity = productQuantity(state, id);

  // const cartHandler = (type) => {
  // dispatch({ type, payload: data });
  // };

  return (
    <>
      <section className={styles.card}>
        <img src={image} alt={title} />
        <h3>{shortenText(title)}</h3>
        <p>$ {price}</p>
        <div className={styles.actions}>
          <Link to={`/products/${id}`}>
            <TbListDetails />
          </Link>
          <div>
            {quantity === 1 && (
              <button onClick={() => dispatch(removeItem(data))}>
                <MdDeleteOutline />
              </button>
            )}
            {quantity > 1 && (
              <button onClick={() => dispatch(decreaseItem(data))}>-</button>
            )}
            {!!quantity && <span>{quantity}</span>}
            {quantity === 0 ? (
              <button onClick={() => dispatch(addItem(data))}>
                <TbShoppingBagCheck />
              </button>
            ) : (
              <button onClick={() => dispatch(increaseItem(data))}>+</button>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductCard;
