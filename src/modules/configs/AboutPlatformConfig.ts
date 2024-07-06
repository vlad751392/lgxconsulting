import box from '../../assets/svg/box.svg';
import internet from '../../assets/svg/internet.svg';
import support from '../../assets/svg/support.svg';
import settings from '../../assets/svg/settings.svg';


export interface Carts {
    id: number;
    photo: string;
    title: string;
    description: string;
  }
  

export const carts : Carts[] = [
    {
      id: 0,
      photo: settings,
      title: "Connect your eCommerce store",
      description:
        "Easy integration with your existing store or marketplace like Shopify and Amazon. With over 60 integrations to streamline your shipping process.",
    },
    {
      id: 1,
      photo: box,
      title: "Automated label creation",
      description:
        "Customize and brand your labels for free, with no minimums. With powerful custom automation to speed up your orders.",
    },
    {
      id: 2,
      photo: internet,
      title: "Global tracking system",
      description:
        "Track your shipments with our comprehensive system with up-to-date estimates. Provide your customers with real-time shipping data.",
    },
    {
      id: 0,
      photo: support,
      title: "Returns, refunds and claims",
      description:
        "Our on-demand customer service works with carriers to resolve issues you might have, our in-house team works diligently to ensure every customer is satisfied.",
    },
  ];