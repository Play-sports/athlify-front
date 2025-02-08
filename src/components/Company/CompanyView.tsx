import CompanyLocation from "./Details/CompanyLocation";
import "./CompanyView.css";
import Booking from "./Booking/Booking";
import CompanyDetails from "./Details/CompanyDetails";
import CompanyBanner from "./CompanyBanner";

function CompanyView({ data }: { data: any }) {
  return (
    <div className="company-main-wrapper wrapper">
      <CompanyBanner data={data} />
      <Booking clubId={data.id} />
      <CompanyDetails />
      <CompanyLocation data={data?.coordinates} />
    </div>
  );
}

export default CompanyView;
