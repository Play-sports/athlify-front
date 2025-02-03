import { Button } from "antd";
import "./Search.css";
import SportInput from "./SportInput";
import ClubInput from "./ClubInput";
import { Company } from "../../types";

function SearchBar({ companies }: { companies: Company[] }) {
  return (
    <div className="search-wrapper">
      <SportInput />
      <ClubInput
        autoCompleteOptions={Array.from(new Set(companies.map((c) => c.name)))} // Remove duplicates
      />
      <Button className="btn-search">Search</Button>
    </div>
  );
}

export default SearchBar;
