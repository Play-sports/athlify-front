import { createContext, useContext, useEffect, useState } from "react";
import { getCompanies } from "../services/Companies"; // Adjust the path as needed

const CompanyContext = createContext(null);

export const CompanyProvider = ({ children }) => {
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
    <CompanyContext.Provider value={companyData}>
      {children}
    </CompanyContext.Provider>
  );
};

// Custom hook for easy access
export const useCompany = () => useContext(CompanyContext);
