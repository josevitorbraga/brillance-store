import React from "react";
import { useCartContext } from "../../context/CartContext";

import { Badge } from "./styles";

export default function CartQuantityBadge() {
  const { cart } = useCartContext();

  return <Badge>{cart.products.length}</Badge>;
}
