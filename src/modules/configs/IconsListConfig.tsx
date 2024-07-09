/// <reference types="vite-plugin-svgr/client" />

import ontrack from '../../assets/jpeg/ontrac.jpg'
import uds from '../../assets/jpeg/uds.jpg'
import ldo from '../../assets/jpeg/lso.jpg'
import cdl from '../../assets/jpeg/cd.jpg'

import Box from '../../assets/svg/box.svg?react';
import Presentation from '../../assets/svg/presentation.svg?react';
import Cart from '../../assets/svg/cart.svg?react';
import Circule from '../../assets/svg/circule.svg?react';
import Plane from '../../assets/svg/plane.svg?react';
import Cargo from '../../assets/svg/cargo.svg?react';
import Truck from '../../assets/svg/truck.svg?react';
import Papper from '../../assets/svg/papper.svg?react';
import Diamond from '../../assets/svg/diamond.svg?react';
import Stats from '../../assets/svg/stats.svg?react';
import Rates from '../../assets/svg/rates.svg?react';
import Terms from '../../assets/svg/terms.svg?react';
import Road from '../../assets/svg/road.svg?react';
import Fast from '../../assets/svg/fast.svg?react';
import Coast from '../../assets/svg/coast.svg?react';

export interface IconsListConfig {
  icon: any;
  title: string;
  text: string;
  svg?: boolean;
}

export const iconsList: IconsListConfig[] = [
  {
    icon: <Box className="fill-blue-regular" />,
    title: "Procurement",
    text: "Managing inventory, storage, and stock levels.",
  },
  {
    icon: <Presentation className="fill-blue-regular" />,
    title: "Storage",
    text: "Ensuring the safety and security of goods.",
  },
  {
    icon: <Cart className="fill-blue-regular" />,
    title: "Order Fulfillment",
    text: "Pick, pack, and ship to your customers.",
  },
  {
    icon: <Circule className="fill-blue-regular" />,
    title: "Transparency",
    text: "Providing tracking and efficient delivery.",
  },
];

export const iconsListForwarding: IconsListConfig[] = [
  {
    icon: <Plane className="fill-blue-regular" />,
    title: "Air Shipping",
    text: "Ship quickly and easily worldwide with enhanced security.",
  },
  {
    icon: <Cargo className="fill-blue-regular" />,
    title: "Cargo Shipping",
    text: "Although longer delivery times, cargo shipping offers cheaper rates and the easiest transport options for your heavy and bulky items.",
  },
  {
    icon: <Truck className="fill-blue-regular" />,
    title: "Truck Shipping",
    text: "Find fast, door-to-door services with easy drop-offs and pickups, more flexibility, and easy tracking.",
  },
];

export const iconsListLtl: IconsListConfig[] = [
  {
    icon: <Papper className="fill-blue-regular" />,
    title: "Expedited Shipping",
    text: "From overnight to 3-day, find carries that can make the quick delivery.",
  },
  {
    icon: <Presentation className="fill-blue-regular" />,
    title: "Tracking",
    text: "Most LTL shipping carriers offer real-time tracking for your and your customers’ convenience.",
  },
  {
    icon: <Diamond className="fill-blue-regular" />,
    title: "White-Glove",
    text: "We’ll help you find carriers that can provide an extra hand with excellent care for your package.",
  },
  {
    icon: <Circule className="fill-blue-regular" />,
    title: "Limited Access",
    text: "Carrier that can bring your delivery indoors.",
  },
];

export const iconsListNegotiation: IconsListConfig[] = [
  {
    icon: <Stats className="fill-blue-regular" />,
    title: "Audit and Analyze Data",
    text: "We’ll break down your shipping volume, inventory, location, specific needs, and other data points.",
  },
  {
    icon: <Presentation className="fill-blue-regular" />,
    title: "Optimize Rates",
    text: "We’ll search out the hidden fees and other misaligned terms, ensuring they’re more favorable for your business.",
  },
  {
    icon: <Diamond className="fill-blue-regular" />,
    title: "On Your Terms",
    text: "We’ll find the most ideal rates based on your data, walk you through the proposal and negotiation process, and secure a better pricing contract.",
  },
];

export const iconsListCarriers: IconsListConfig[] = [
  {
    icon: ontrack,
    title: "West Coast",
    text: "Mid-day service, same-day ground shipping, and DirectPost®.",
    svg: false,
  },
  {
    icon: uds,
    title: "Midwest",
    text: "Same-day and next-day delivery.",
    svg: false,
  },
  {
    icon: ldo,
    title: "Texas",
    text: "Multiple same-day and next-day options, plus Saturdays.",
    svg: false,
  },
  {
    icon: cdl,
    title: "East Coast",
    text: "Same-day, next-day, and overnight delivery.",
    svg: false,
  },
];

export const iconsListCarriers2: IconsListConfig[] = [
  {
    icon: <Coast className="fill-blue-regular" />,
    title: "Audit and Analyze Data",
    text: "We’ll break down your shipping volume, inventory, location, specific needs, and other data points.",
  },
  {
    icon: <Fast className="fill-blue-regular" />,
    title: "Optimize Rates",
    text: "We’ll search out the hidden fees and other misaligned terms, ensuring they’re more favorable for your business.",
  },
  {
    icon: <Road className="fill-blue-regular" />,
    title: "On Your Terms",
    text: "We’ll find the most ideal rates based on your data, walk you through the proposal and negotiation process, and secure a better pricing contract.",
  },
];