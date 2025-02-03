import Info from "./CompanyInfo";
import CompanySchedule from "./CompanySchedule";
import CompanyCarousel from "./CompanyCarousel";

function CompanyDetails() {
  return (
    <div>
      <h3>Club Details</h3>
      <div className="company-contact-wrapper">
        <Info />
        <div
          className="company-carousel"
          style={{ width: "100%", maxWidth: "450px" }}
        >
          <CompanyCarousel />
        </div>
        <CompanySchedule />
      </div>
    </div>
  );
}

export default CompanyDetails;
