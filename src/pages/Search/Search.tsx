import React from "react";
import CompanyResults from "../../components/CompanyResults/CompanyResults";
import { useLocation } from "react-router-dom";

function Search() {
  const { state } = useLocation();

  return (
    <div>
      <CompanyResults companies={state.companies} />
    </div>
  );
}

export default Search;
