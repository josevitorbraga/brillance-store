import React from "react";
import { Link } from "react-router-dom";

import CartQuantityBadge from "../CartQuantityBadge/CartQuantityBadge";

import { SideMenuList, SideMenuWrapper } from "./styles";
import { BiCartAlt, BiHeart } from "react-icons/bi";

export default function SideMenu() {
  return (
    <SideMenuWrapper>
      <SideMenuList>
        <li>
          <Link to="/">Em destaque</Link>
        </li>
        <li>
          <Link to="/categoria/colares">Colares</Link>
        </li>
        <li>
          <Link to="/categoria/aneis">Anéis</Link>
        </li>
        <li>
          <Link to="/categoria/pulseiras">Pulseiras</Link>
        </li>
        <li>
          <Link to="/categoria/brincos">Brincos</Link>
        </li>
      </SideMenuList>
      <div className="wrapper">
        <div className="interactiveMenu">
          <Link to="/cart">
            <BiCartAlt size={34} />
            <span>Carrinho</span>
            <CartQuantityBadge />
          </Link>
        </div>
        <div className="interactiveMenu">
          <Link to="#">
            <BiHeart size={34} />
            <span>Like</span>
          </Link>
        </div>
      </div>
    </SideMenuWrapper>
  );
}
