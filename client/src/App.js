import React, { useRef } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import { ScrolledHeader } from "./styles";
import useOnScreen from "./hooks/useOnScreen";
import miniLogo from "./assets/miniLogo.svg";
import brillanceLogo from "./assets/brillance-logo.svg";
import { BiCartAlt } from "react-icons/bi";

import HomePage from "./pages/HomePage/HomePage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import LoginPage from "./pages/LoginPage/LoginPage.js";
import AdminPage from "./pages/AdminPage/AdminPage";
import CreateProductPage from "./pages/CreateProductPage/CreateProductPage";
import EditProductPage from "./pages/EditProductPage/EditProductPage";
import CartProvider from "./context/CartContext";
import CartPage from "./pages/CartPage/CartPage";
import CartQuantityBadge from "./components/CartQuantityBadge/CartQuantityBadge";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import PlaceOrderPage from "./pages/PlaceOrderPage/PlaceOrderPage";
import StatusPedido from "./pages/StatusPedidoPage/StatusPedido";
import AdminOrdersPage from "./pages/AdminOrders/AdminOrdersPage";
import AdminOrderPage from "./pages/AdminOrderPage/AdminOrderPage";

export default function App() {
  const ref = useRef();
  const isVisible = useOnScreen(ref);

  return (
    <CartProvider>
      <BrowserRouter>
        <header>
          <div ref={ref} className="header">
            <div className="header-content"></div>
            <Link to="/">
              <img className="logoIcon" src={brillanceLogo} alt="Brillance" />
            </Link>
            <div className="header-content"></div>
          </div>
          <ScrolledHeader isOnTop={isVisible}>
            <div className="contentHeader">
              <img src={miniLogo} alt="Brillance Store" />
              <div className="cart">
                <Link to="/cart">
                  <BiCartAlt size={30} /> <h2> Carrinho</h2>
                  <CartQuantityBadge />
                </Link>
              </div>
            </div>
          </ScrolledHeader>
        </header>

        <main>
          <Switch>
            <Route path="/pagamento/:orderId/" component={StatusPedido} />
            <Route path="/novopedido" component={PlaceOrderPage} />
            <Route path="/cart" component={CartPage} />
            <Route path="/admin/product/create" component={CreateProductPage} />
            <Route
              path="/produto/edit/:productId"
              component={EditProductPage}
            />
            <Route path="/produto/:productId" component={ProductPage} />
            <Route path="/categoria/:category" component={CategoryPage} />
            <Route
              path="/admin/pedidos/:orderId"
              component={AdminOrderPage}
              exact
            />
            <Route path="/admin/pedidos" component={AdminOrdersPage} exact />
            <Route path="/admin/home" component={AdminPage} exact />
            <Route path="/admin/login" component={LoginPage} exact />
            <Route path="/" component={HomePage} exact />
          </Switch>
          <ToastContainer />
        </main>
      </BrowserRouter>
    </CartProvider>
  );
}
