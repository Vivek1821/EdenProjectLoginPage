import React from "react";
import { routes } from "../NumberList";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NavElement = () => {
  const location = useLocation();

  useEffect(() => {
    console.log(location);
  });

  return (
    <>
      <nav className="numberList">
        {routes.map((route, index) => (
          <NavLink
            className={({ isActive, isPending }) =>
              `numbers ${isActive ? "active" : ""}`
            }
            to={route.path}
            key={index}
          >
            {index + 1}
          </NavLink>
        ))}
      </nav>
      ;
    </>
  );
};

export default NavElement;
