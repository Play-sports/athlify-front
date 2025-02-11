import { useEffect, useState } from "react";
import "./Home.css";
import Stats from "../../components/Stats/Stats";
import { getCompanies } from "../../services/Companies";
import ComapnyResults from "../../components/CompanyResults/CompanyResults";
import ClubSearch from "../../components/Searchbar/SearchBar";
import AthlifyFeatures from "../../components/HowItWorks/AthlifyFeatures";

function Home() {
  const [companyData, setCompanyData] = useState([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const data = await getCompanies();
        setCompanyData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCompanies();
  }, []);

  return (
    <div className="main-wrapper">
      <div className="home-upper">
        <h1 style={{ fontSize: "64px" }}>Booking Games, Connecting People</h1>
        <ClubSearch companies={companyData} />
        <AthlifyFeatures />
      </div>
      <div className="home-middle">
        <ComapnyResults isHome={true} />
      </div>
      <Stats />
    </div>
  );
}

export default Home;
