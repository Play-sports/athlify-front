import { Company } from "../../../types";
import { Card } from "antd";
import { Link } from "react-router-dom";

const { Meta } = Card;

function CompanyCard({ data }: { data: Company }) {
  return (
    <Link to={`/club/${data.id}`} state={data}>
      <Card
        hoverable
        style={{ width: 350 }}
        cover={<img alt="Club image" src="/tmp_backdrop.jpg" />}
      >
        <Meta title={data.name} description={`${data.city}, ${data.area}`} />
      </Card>
    </Link>
  );
}

export default CompanyCard;
