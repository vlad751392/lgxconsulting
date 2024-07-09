import dhl from '../../assets/jpeg/provider-dhl.jpg';
import ontrac from '../../assets/jpeg/provider-ontrac.jpg';
import shopify from '../../assets/jpeg/provider-shopify.jpg';
import fedex from '../../assets/jpeg/provider-fedex.jpg';
import usps from '../../assets/jpeg/provider-usps.jpg';


export interface Logos {
    id: number;
    photo: string;
}


export const logos: Logos[] = [
    {
        id: 0,
        photo: usps,
    },
    {
        id: 1,
        photo: fedex,
    },
    {
        id: 2,
        photo: dhl,
    },
    {
        id: 3,
        photo: ontrac,
    },
    {
        id: 4,
        photo: shopify,
    },
];