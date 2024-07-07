import box from "../../assets/svg/box.svg";

export interface IconsListConfig {
  icon: string;
  title: string;
  text: string;
}

export const iconsList: IconsListConfig[] = [
  {
    icon: box,
    title: "Procurement",
    text: "Managing inventory, storage, and stock levels.",
  },
  {
    icon: box,
    title: "Storage",
    text: "Ensuring the safety and security of goods.",
  },
  {
    icon: box,
    title: "Order Fulfillment",
    text: "Pick, pack, and ship to your customers.",
  },
  {
    icon: box,
    title: "Transparency",
    text: "Providing tracking and efficient delivery.",
  },
];
