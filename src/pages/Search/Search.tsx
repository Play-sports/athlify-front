import CompanyResults from "../../components/CompanyResults/CompanyResults";
import { useLocation } from "react-router-dom";

function Search() {
  const { state } = useLocation();

  return (
    <div>
      <CompanyResults companies={state.companies} isHome={false} />
    </div>
  );
}

export default Search;
