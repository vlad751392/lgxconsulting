

export interface NavBarConfig {
    id: number;
    name: string;
    path: string;
  }
  

export const NavList : NavBarConfig[] = [
    {
      id: 1,
      name: "Shipping",
      path:
        "/shipping",
    },
    {
      id: 2,
      name: "Integrations",
      path:
        "/integrations",
    },
    {
      id: 3,
      name: "Pricing",
      path:
        "/pricing",
    },
    {
        id: 4,
        name: "About",
        path:
          "/about",
      },
  ];