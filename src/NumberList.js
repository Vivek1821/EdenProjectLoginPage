import React, { useEffect, useState } from "react";
import "./NumberList.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useSearchParams,
  NavLink
} from "react-router-dom";
import WelcomePage from "./Components/WelcomePage";
import SetupPage from "./Components/SetupPage";
import PlanningPage from "./Components/PlanningPage";
import CongratulationsPage from "./Components/CongratulationsPage";
import NavElement from "./Components/Nav";

export const routes = [
  { path: "/", element: <WelcomePage /> },

  { path: "/SetupPage", element: <SetupPage /> },
  { path: "/PlanningPage", element: <PlanningPage /> },
  { path: "/CongratulationsPage", element: <CongratulationsPage /> }
];

const NumberList = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <BrowserRouter>
      <div className="content-wrapper">
        <div className="numberWrapper">
          <hr style={{ color: "black", marginBottom: "10px" }} />
          <NavElement />
        </div>

        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default NumberList;
