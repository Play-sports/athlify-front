export type Company = {
  id: string;
  area: string;
  city: string;
  name: string;
  sport: Sport;
};

type Sport = {
  id: number;
  name: string;
};

export type SportOption = {
  label: string;
  value: string;
  src: string;
};

export type SportCategory = {
  label: string;
  title: string;
  options: SportOption[];
};

export type CompanyResultsProps = {
  companies: Company[];
};
