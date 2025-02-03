import React from "react";

import { Table } from "antd";
import type { TableColumnsType } from "antd";

interface DataType {
  key: React.Key;
  location: string;
  date: string;
  sport: string;
  details: string;
}

const columns: TableColumnsType<DataType> = [
  { title: "Date", dataIndex: "date", key: "name" },
  { title: "Location", dataIndex: "location", key: "age" },
  { title: "Sport", dataIndex: "sport", key: "address" },
];

const data: DataType[] = [
  {
    key: 1,
    location: "Slice Tennis Club",
    date: "2025-02-08",
    details: "Booking details will show here",
    sport: "Tennis",
  },
  {
    key: 2,
    location: "Basket 3x3",
    date: "2025-02-09",
    details: "Booking details will show here",
    sport: "Basketball",
  },
];

const bookingDetails = () => {
  return (
    <div className="booking-details-wrapper">
      <div className="booking-details-title">
        Booking <b>#21191</b>
      </div>
      <div className="booking-details">
        <div>Players: 6</div>
        <div>Court: 3</div>
        <div>Duration: 2h</div>
        <div>Paid: Yes</div>
      </div>
    </div>
  );
};

function CurrentActivities() {
  return (
    <div>
      <h2>Upcoming activities </h2>
      <Table<DataType>
        columns={columns}
        expandable={{
          expandedRowRender: () => bookingDetails(),
          rowExpandable: () => true,
        }}
        dataSource={data}
      />
    </div>
  );
}

export default CurrentActivities;
