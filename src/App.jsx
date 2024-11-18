import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "./layout/Layout.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";
import DetailsPage from "./pages/DetailsPage.jsx";
import CheckoutPage from "./pages/CheckoutPage.jsx";
import Page404 from "./pages/Page404.jsx";

// import ProductsProvider from "./context/ProductsContext.jsx";
// import CartProvider from "./context/CartContext.jsx";

function App() {
  return (
    <>
      {/* <ProductsProvider> */}
        {/* <CartProvider> */}
          <Layout>
            <Routes>
              <Route path="/" element={<Navigate to="/products" />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/products/:id" element={<DetailsPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/*" element={<Page404 />} />
            </Routes>
          </Layout>
        {/* </CartProvider> */}
      {/* </ProductsProvider> */}
    </>
  );
}

export default App;
