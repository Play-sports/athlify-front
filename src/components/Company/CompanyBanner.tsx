import { Company } from "../../types";

function CompanyBanner({ data }: { data: Company }) {
  return (
    <div className="banner-wrapper">
      <div className="banner-overlay"></div>
      <h1>{data.name}</h1>
      <div>
        {data.city}, {data.area}
      </div>
    </div>
  );
}

export default CompanyBanner;
