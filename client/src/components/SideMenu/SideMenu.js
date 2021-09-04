import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import CartQuantityBadge from "../CartQuantityBadge/CartQuantityBadge";

import { SideMenuList, SideMenuWrapper } from "./styles";
import { BiCartAlt, BiHeart } from "react-icons/bi";

export default function SideMenu() {
  const [isOpen, setIsOpen] = useState(true);

  const handleMenu = () => {
    if (isOpen === false) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setIsOpen(false);
    }, 2000);
  }, []);

  return (
    <SideMenuWrapper onClick={() => handleMenu()} isOpen={isOpen}>
      <div className="hiddenMenu">
        <SideMenuList>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/categoria/aneis">Anéis</Link>
          </li>
          <li>
            <Link to="/categoria/pulseiras">Pulseiras</Link>
          </li>
          <li>
            <Link to="/categoria/colares">Colares</Link>
          </li>
          <li>
            <Link to="/categoria/brincos">Brincos</Link>
          </li>
        </SideMenuList>
        <div className="secondMenu">
          <Link to="/cart">
            <BiCartAlt />
            <span isOpen={isOpen}>Carinho</span> <CartQuantityBadge />
          </Link>
          <br />
          <a href="https://instagram.com/brillance.store">
            <BiHeart />
            <span isOpen={isOpen}>Like</span>
          </a>
        </div>
      </div>
      <div className="toggleMenu">
        M<br />
        E<br />
        N<br />
        U<br />
      </div>
    </SideMenuWrapper>
  );
}
