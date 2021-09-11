import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = useState({
    products: [],
    total: 0,
  });

  // set the cart from local storage only when the component mounts
  useEffect(() => {
    const cartFromStorage = JSON.parse(localStorage.getItem("cart"));
    if (cartFromStorage) {
      setCart(cartFromStorage);
    }
  }, []);

  // add a product to the cart if already in the cart update the quantity
  const addToCart = product => {
    const productAlreadyInCart = cart.products.find(
      item => item._id === product._id
    );
    if (productAlreadyInCart) {
      setCart({
        products: cart.products.map(item =>
          item._id === product._id
            ? {
                ...item,
                quantity:
                  item.quantity < item.stock
                    ? item.quantity + 1
                    : item.quantity,
              }
            : item
        ),
        total: Number(cart.total) + Number(product.unit_price),
      });
    } else {
      setCart({
        products: [...cart.products, { ...product, quantity: 1 }],
        total: Number(cart.total) + Number(product.unit_price),
      });
    }
  };

  // remove one unit of a product from the cart
  const removeProductUnit = product => {
    const productAlreadyInCart = cart.products.find(
      item => item._id === product._id
    );
    if (productAlreadyInCart) {
      if (productAlreadyInCart.quantity === 1) {
        return;
      }

      setCart({
        products: cart.products.map(item =>
          item._id === product._id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),

        total: Number(cart.total) - Number(product.unit_price),
      });
    }
  };

  // remove item from cart by id
  const removeItem = id => {
    const newCart = cart.products.filter(product => product._id !== id);
    setCart({
      products: newCart,
      total:
        cart.total -
        cart.products.find(product => product._id === id).unit_price *
          cart.products.find(product => product._id === id).quantity,
    });
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  // save the cart to local storage when it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{ cart, setCart, removeItem, addToCart, removeProductUnit }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  const context = useContext(CartContext);
  if (!context)
    throw new Error("useCartContext must be used within a CartProvider");
  const { cart, setCart, removeItem, addToCart, removeProductUnit } = context;
  return { cart, setCart, removeItem, addToCart, removeProductUnit };
}
