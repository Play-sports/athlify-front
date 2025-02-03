import { useLocation } from "react-router-dom";
import "./Company.css";
import CompanyView from "../../components/Company/CompanyView";

function Company() {
  const { state } = useLocation();
  console.log(state);

  return (
    <div>
      <CompanyView data={state} />
    </div>
  );
}

export default Company;
