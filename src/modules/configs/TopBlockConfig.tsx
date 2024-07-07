import magento from '../../assets/png/magento-40.png';
import squarespace from '../../assets/png/squarespace-40.png';
import shipstation from '../../assets/png/shipstation-40.png';
import shopify from '../../assets/png/shopify-40.png';


export interface Logos {
    id: number;
    photo: string;
  }
  

export const logos : Logos[] = [
    {
      id: 0,
      photo: magento,
    },
    {
      id: 1,
      photo: squarespace,
    },
    {
      id: 2,
      photo: shipstation,
    },
    {
      id: 3,
      photo: shopify,
    },
  ];