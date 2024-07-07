import { Route, Routes } from "react-router-dom";

import Fulfilment from "pages/Fulfilment";
import Integrations from "pages/Integrations";
import MainLayout from "../modules/MainLayout";
import { About } from "../pages/About";
import { Home } from "../pages/Home";
import Negotiations from "pages/Negotiations";
import Shipping from "pages/Shipping";
import Forwarding from "pages/Forwarding";

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
  {
    element: <Fulfilment />,
    path: "/fulfilment",
  },
  {
    element: <Forwarding />,
    path: "/forwarding",
  },
  {
    element: <Shipping />,
    path: "/shipping",
  },
  {
    element: <Negotiations />,
    path: "/negotiations",
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
