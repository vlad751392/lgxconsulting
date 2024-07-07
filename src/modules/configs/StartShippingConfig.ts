

export interface StartShippingList {
    id: number;
    number: string;
    delay: number;
    title: string;
    description: string;
  }
  

export const list : StartShippingList[] = [
    {
      id: 1,
      number: "1",
      delay: 300,
      title: "Get in touch",
      description:
        "Tell us about your business and logistics needs",
    },
    {
      id: 2,
      number: "2",
      delay: 600,
      title: "Analyze shipping data",
      description:
        "We find room for savings by optimizing carriers and services",
    },
    {
      id: 3,
      number: "3",
      delay: 900,
      title: "Start Saving!",
      description:
        "Connect your eCommerce store and start shipping",
    },
  ];