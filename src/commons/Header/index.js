import React from "react";
import { NavLink } from "react-router-dom";
import "./index.scss";
import { menu } from "./menu";

export const Header = props => {
  const menuItems = menu.map((item, index) => {
    return (
      <li key={index}>
        <NavLink to={item.path} exact>
          {item.name}
        </NavLink>
      </li>
    );
  });
  return (
    <header>
      <NavLink to="/" exact>
        <h1>Logo</h1>
      </NavLink>
      <nav>
        <ul>{menuItems}</ul>
      </nav>
    </header>
  );
};
