import { useDispatch } from "react-redux";
import { MdDeleteOutline } from "react-icons/md";

import { shortenText } from "../helpers/helper.js";
import { removeItem, decreaseItem, increaseItem } from "../features/cart/cartSlice.js";

import styles from "./BasketCard.module.css";

const BasketCard = ({data}) => {
    const {image, title, price, quantity} = data;
    const dispatch = useDispatch();
    return (
        <>
            <section className={styles.card}>
                <img src={image} alt={title} />
                <p>{shortenText(title)}</p>
                <p>$ {price}</p>
                <div className={styles.actions}>
                    {quantity === 1 && (<button onClick={() => dispatch(removeItem(data))}><MdDeleteOutline /></button>)}
                    {quantity > 1 && (<button onClick={() => dispatch(decreaseItem(data))}>-</button>)}
                    <span>{quantity}</span>
                    <button onClick={() => dispatch(increaseItem(data))}>+</button>
                </div>
            </section>
        </>
    );
};

export default BasketCard;