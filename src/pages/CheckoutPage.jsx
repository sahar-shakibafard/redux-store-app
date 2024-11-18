import { useSelector } from "react-redux";
// import { useCart } from "../context/CartContext.jsx";
import BasketCard from "../components/BasketCard.jsx";
import BasketSidebar from "../components/BasketSidebar.jsx";

import styles from "./CheckoutPage.module.css";

const Checkout = () => {
  // const [state, dispatch] = useCart();
  const state = useSelector((store) => store.cart);

  // const clickHandler = (type, payload) => {
  //   dispatch({ type, payload });
  // };

  if (!state.itemsCounter)
    return (
      <div className={styles.container}>
        <p>Empty!</p>
      </div>
    );

  return (
    <>
      <section className={styles.container}>
        <BasketSidebar state={state} />
        <div className={styles.products}>
          {state.selectedItems.map((product) => (
            <BasketCard key={product.id} data={product} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Checkout;
