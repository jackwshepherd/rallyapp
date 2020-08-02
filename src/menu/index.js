import React from "react";
import "../index.css";

const Menu = ({ name, route, setRoute, setRequestsExist, type, active }) => (
  <div
    className={`menu-item ${type} ${active ? "active" : "inactive"} `}
    onClick={() => {
      setRoute(route);
      if (setRequestsExist) setRequestsExist();
    }}
  >
    <span>{name}</span>
  </div>
);

export default Menu;
