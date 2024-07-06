import { Navigate, Route, Routes } from "react-router-dom";

import { Home } from "../pages/Home";
import { About } from "../pages/About";
import MainLayout from "../modules/MainLayout";
import Integrations from "pages/Integrations";

const routes = [
  {
    element: <Home />,
    path: "/",
  },
  {
    element: <About />,
    path: "login",
  },
  {
    element: <Integrations />,
    path: "/integrations",
  },
  {
    element: <About />,
    path: "/about",
  },
];

const AppRoutes = () => {
  return (
    <Routes>
      {routes.map(({ element, path }) => (
        <Route
          key={path}
          path={path}
          element={<MainLayout>{element}</MainLayout>}
        />
      ))}
    </Routes>
  );
};

export default AppRoutes;
