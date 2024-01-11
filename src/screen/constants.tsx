export const API_URL =
  "https://mocki.io/v1/ec42d07b-99b4-4d9b-b678-4643ef8baad8";

export const FILTER = [
  { value: 1000000, category: "< 1M" },
  { value: 5000000, category: "< 5M" },
  { value: 10000000, category: "< 10M" },
];

export const columns = [
  { Header: "Country Name", accessor: "name" },
  { Header: "Code", accessor: "abbreviation" },
  { Header: "Capital", accessor: "capital" },
  { Header: "Ph Code", accessor: "phone" },
  { Header: "Population", accessor: "population" },
  {
    Header: "Flag",
    accessor: "media.flag",
    Cell: ({ value }: { value: string }) => (
      <img className="flag-img" src={value} alt="Flag" />
    ),
  },
  {
    Header: "Emblem",
    accessor: "media.emblem",
    Cell: ({ value }: { value: string }) => (
      <img className="flag-img" src={value} alt="Emblem" />
    ),
  },
];
