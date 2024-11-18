import { Link } from "react-router-dom";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { useSelector } from "react-redux";

// import { useCart } from "../context/CartContext.jsx";

import styles from "./Layout.module.css";

const Layout = ({children}) => {
    // const [state] = useCart();
    const state = useSelector(store => store.cart)

    return (
        <>
            <header className={styles.header}>
                <Link to="/products">Botostart</Link>
                <Link to="/checkout">
                    <div>
                        <PiShoppingCartSimpleBold />
                        {!!state.itemsCounter && <span>{state.itemsCounter}</span>}
                    </div>
                </Link>
            </header>
            {children}
            <footer className={styles.footer}>
                <p>Developed By Sahar</p>
            </footer>
        </>
    );
};

export default Layout;