export type CountriesData = [CountriesItems];

export type CountriesItems = {
  abbreviation: string;
  capital: string;
  currency: string;
  name: string;
  phone: string;
  population: number;
  media: {
    flag: string;
    emblem: string;
    orthographic: string;
  };
  id: number;
};

export type Options = {
  value: number;
  category: string;
};
