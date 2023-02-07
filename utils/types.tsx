export type Barbecue = {
  date: string;
  description: string;
  guestAndContribution: {
    guest: string;
    contribution: number;
  }[];
};
