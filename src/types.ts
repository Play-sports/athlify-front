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

export type CourtData = {
  court_id: number;
  court_name: string;
  booked: any[];
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

type PlayerLevel = "Amateur" | "Casual" | "Intermediate";

interface Player {
  name: string;
  level: PlayerLevel;
}

export type Activity = {
  sport: "basketball" | "padel" | "tennis";
  title: string;
  description: string;
  location: "Thessaloniki" | "Athens";
  date: string; // Using ISO date format as string
  players: Player[];
};
