import React from "react";

import { SideMenuList, SideMenuWrapper } from "./styles";
import { BiCartAlt, BiHeart } from "react-icons/bi";

export default function SideMenu() {
  return (
    <SideMenuWrapper>
      <SideMenuList>
        <li>
          <a href="#colars">Em destaque</a>
        </li>
        <li>
          <a href="#colars">Colares</a>
        </li>
        <li>
          <a href="#rings">Anéis</a>
        </li>
        <li>
          <a href="#bracelets">Pulseiras</a>
        </li>
        <li>
          <a href="#brincos">Brincos</a>
        </li>
      </SideMenuList>
      <div className="wrapper">
        <div className="interactiveMenu">
          <a href="#cart">
            <BiCartAlt size={34} />
            <span>Carrinho</span>
          </a>
        </div>
        <div className="interactiveMenu">
          <a href="#like">
            <BiHeart size={34} />
            <span>Like</span>
          </a>
        </div>
      </div>
    </SideMenuWrapper>
  );
}
