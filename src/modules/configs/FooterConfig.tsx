export interface FooterList {
  id: number;
  name: string;
  path: string;
  nav: boolean;
}

export const ServiceList: FooterList[] = [
  {
    id: 1,
    name: "Discounted Shipping",
    path: "/shipping",
    nav: true,
  },
  {
    id: 2,
    name: "Fulfilment & 3PL",
    path: "/fulfilment",
    nav: true,
  },
  {
    id: 3,
    name: "Freight Forwarding",
    path: "/forwarding",
    nav: true,
  },
  {
    id: 4,
    name: "LTL Shipping",
    path: "/ltlShipping",
    nav: true,
  },
  {
    id: 5,
    name: "Contract Negotiations",
    path: "/negotiations",
    nav: true,
  },
  {
    id: 6,
    name: "Regional Parcel Carriers",
    path: "/carriers",
    nav: true,
  },
];

export const CompanyList: FooterList[] = [
  {
    id: 1,
    name: "Integrations",
    path: "/integrations",
    nav: true,
  },
  {
    id: 2,
    name: "Pricing",
    path: "/pricing",
    nav: true,
  },
  {
    id: 3,
    name: "About Us",
    path: "/about",
    nav: true,
  },
];

export const ContactList: FooterList[] = [
  {
    id: 1,
    name: "844-549-7447",
    path: "tel:844-549-7447",
    nav: false,
  },
  {
    id: 2,
    name: "Email",
    path: "mailto:support@lgxconsulting.com",
    nav: false,
  },
  {
    id: 3,
    name: "Instagram",
    path: "/about",
    nav: false,
  },
  {
    id: 3,
    name: "LinkedIn",
    path: "/about",
    nav: false,
  },
];
