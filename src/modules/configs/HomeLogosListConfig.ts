import dhl from '../../assets/jpeg/provider-dhl.jpg';
import ontrac from '../../assets/jpeg/provider-ontrac.jpg';
import shopify from '../../assets/jpeg/provider-shopify.jpg';


export interface Logos {
    id: number;
    photo: string;
  }
  

export const logos : Logos[] = [
    {
      id: 0,
      photo: dhl,
    },
    {
      id: 1,
      photo: ontrac,
    },
    {
      id: 2,
      photo: shopify,
    },
  ];