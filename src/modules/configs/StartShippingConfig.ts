

export interface StartShippingList {
    id: number;
    number: string;
    title: string;
    description: string;
  }
  

export const list : StartShippingList[] = [
    {
      id: 1,
      number: "1",
      title: "Get in touch",
      description:
        "Tell us about your business and logistics needs",
    },
    {
      id: 2,
      number: "2",
      title: "Analyze shipping data",
      description:
        "We find room for savings by optimizing carriers and services",
    },
    {
      id: 3,
      number: "3",
      title: "Start Saving!",
      description:
        "Connect your eCommerce store and start shipping",
    },
  ];