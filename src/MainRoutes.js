import React from "react";
import Admin from "./pages/Admin/admin";
import { Route, Routes } from "react-router-dom";
import Menu from "./pages/Menu/menu";
import Edit from "./components/Edit/Edit"

function MainRoutes() {
  const PUBLIC = [
    { path: "/", element: <Admin />, key: 1 },
    { path: "/menu", element: <Menu />, key: 2 },
    { path: "/edit/:id", element: <Edit/>, key: 3 },
  ];
  return (
    <Routes>
      {PUBLIC.map((el) => (
        <Route path={el.path} element={el.element} key={el.key} />
      ))}
    </Routes>
  );
}

export default MainRoutes;
