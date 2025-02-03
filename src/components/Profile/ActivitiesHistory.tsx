import { Space, Table, Tag } from "antd";
import type { TableProps } from "antd";
import { Link } from "react-router-dom";

interface DataType {
  key: string;
  location: string;
  date: string;
  sport: string[];
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Location",
    dataIndex: "location",
    key: "location",
    render: (value) => <Link to="/club/10">{value}</Link>,
  },
  {
    title: "Sport",
    key: "sport",
    dataIndex: "sport",
    render: (_, { sport }) => (
      <>
        {sport.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
];

const data: DataType[] = [
  {
    key: "1",
    date: "2025-02-01",
    location: "Slice Padel Club",
    sport: ["Tennis"],
  },
  {
    key: "1",
    date: "2025-02-01",
    location: "Slice Padel Club",
    sport: ["Tennis"],
  },
  {
    key: "1",
    date: "2025-02-01",
    location: "Slice Padel Club",
    sport: ["Tennis"],
  },
  {
    key: "1",
    date: "2025-02-01",
    location: "Slice Padel Club",
    sport: ["Tennis"],
  },
  {
    key: "1",
    date: "2025-02-01",
    location: "Slice Padel Club",
    sport: ["Tennis"],
  },
];

function ActivitiesHistory() {
  return (
    <div className="activities-history-wrapper">
      <h2>Playing history</h2>
      <Table<DataType> columns={columns} dataSource={data} pagination={false} />
    </div>
  );
}

export default ActivitiesHistory;
