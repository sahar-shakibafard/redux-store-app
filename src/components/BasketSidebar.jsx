import { useDispatch } from "react-redux";
import { TbChecklist } from "react-icons/tb";
import { FaHashtag } from "react-icons/fa6";
import { BsPatchCheck } from "react-icons/bs"

import { checkout } from "../features/cart/cartSlice";

import styles from "./BasketSidebar.module.css";

const BasketSidebar = ({state}) => {
    const dispatch = useDispatch();
    return (
        <>
            <section className={styles.sidebar}>
                <div>
                    <TbChecklist />
                    <p>Total:</p>
                    <span>$ {state.total}</span>
                </div>
                <div>
                    <FaHashtag />
                    <p>Quantity:</p>
                    <span>{state.itemsCounter}</span>
                </div>
                <div>
                    <BsPatchCheck />
                    <p>Status:</p>
                    {!state.checkout && <span>Pending</span>}
                </div>
                <button onClick={() => dispatch(checkout())}>Checkout</button>
            </section>
        </>
    );
};

export default BasketSidebar;