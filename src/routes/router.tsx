import { Route, Routes } from "react-router-dom";

import Fulfilment from "pages/Fulfilment";
import Integrations from "pages/Integrations";
import MainLayout from "../modules/MainLayout";
import { About } from "../pages/About";
import { Home } from "../pages/Home";
import Negotiations from "pages/Negotiations";
import Shipping from "pages/Shipping";
import LtlShipping from "pages/LtlShipping";
import Pricing from "pages/Pricing";
import Forwarding from "pages/Forwarding";
import TermsOfService from "pages/TermsOfService";

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
    element: <Pricing />,
    path: "/pricing",
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
    element: <LtlShipping />,
    path: "/ltlShipping",
  },
  {
    element: <Shipping />,
    path: "/shipping",
  },
  {
    element: <Negotiations />,
    path: "/negotiations",
  },
  {
    element: <TermsOfService />,
    path: "/terms-of-service",
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
