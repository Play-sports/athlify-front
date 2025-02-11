import { useEffect, useState } from "react";
import { Company } from "../../types";
import CompanyCard from "./CompanyCard/CompanyCard";
import "./CompanyResults.css";
import Filterbar from "./FilterBar/Filterbar";
import { Link } from "react-router-dom";
import { useCompany } from "../../hooks/useCompanyContext";

function CompanyResults({ isHome }: { isHome: boolean }) {
  const [activeSport, setActiveSport] = useState("all");
  const [filterText, setFilterText] = useState("");

  const [filteredCompanies, setFilteredCompanies] = useState<Company[]>([]);
  const companies = useCompany();

  useEffect(() => {
    setFilteredCompanies(
      companies.filter((company) => {
        const companyInSport =
          company.sport.name == activeSport || activeSport === "all";

        const companyInText =
          company.name.toLowerCase().includes(filterText.toLowerCase()) ||
          filterText === "";

        return companyInSport && companyInText;
      })
    );
  }, [activeSport, filterText, companies]);

  return (
    <div className="main-results-section">
      {isHome && <h2 style={{ color: "black" }}>Featured clubs</h2>}
      <Filterbar
        filterSport={(sport: string) => setActiveSport(sport.toLowerCase())}
        filterName={(txt) => setFilterText(txt)}
        isHome={isHome}
      />
      <div className="results-wrapper slide-in-left">
        {filteredCompanies.length === 0 ? (
          <div>
            `No sport centers for <b>{activeSport}</b> have been added yet.
            Check back later!
          </div>
        ) : (
          filteredCompanies.map((company: Company) => {
            return <CompanyCard data={company} />;
          })
        )}
      </div>
      {isHome && (
        <Link className="view-more-button" to={"/explore"}>
          View more
        </Link>
      )}
    </div>
  );
}

export default CompanyResults;
