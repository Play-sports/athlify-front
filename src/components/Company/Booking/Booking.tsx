import type { BadgeProps, CalendarProps } from "antd";
import { Badge, Calendar } from "antd";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";

const getListData = (value: Dayjs) => {
  let listData: { type: string; content: string }[] = []; // Specify the type of listData
  switch (value.date()) {
    case 1:
    case 15:
    case 20:
      listData = [{ type: "success", content: "5 matches booked" }];
      break;
    case 3:
    case 9:
    case 17:
      listData = [{ type: "success", content: "3 matches booked" }];
      break;
    case 7:
    case 25:
    case 30:
      listData = [{ type: "success", content: "7 matches booked" }];
      break;
    default:
  }
  return listData || [];
};

const getMonthData = () => {
  return 0;
};

function Booking() {
  const monthCellRender = () => {
    const num = getMonthData();
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };

  const dateCellRender = (value: Dayjs) => {
    const listData = getListData(value);

    return (
      <ul className="events">
        {listData.map((item) => (
          <div key={item.content}>
            <Badge
              status={item.type as BadgeProps["status"]}
              text={item.content}
            />
          </div>
        ))}
      </ul>
    );
  };

  const cellRender: CalendarProps<Dayjs>["cellRender"] = (current, info) => {
    if (info.type === "date") return dateCellRender(current);
    if (info.type === "month") return monthCellRender();
    return info.originNode;
  };

  const startDate = dayjs("2025-02-03"); // Start of range
  const endDate = dayjs("2025-02-15"); // End of range

  // Function to disable dates outside the range
  const disabledDate = (current) => {
    return (
      current.isBefore(startDate, "day") || current.isAfter(endDate, "day")
    );
  };

  return (
    <Calendar
      cellRender={cellRender}
      mode="month"
      disabledDate={disabledDate}
      style={{ height: "430px", overflow: "scroll" }}
    />
  );
}

export default Booking;
