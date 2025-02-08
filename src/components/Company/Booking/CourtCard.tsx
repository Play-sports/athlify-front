import { useState } from "react";
import { Card } from "antd";
import BookingModal from "./BookingModal";
import "./Booking.css";
import { CourtData } from "../../../types";

const { Meta } = Card;

function CourtCard({ courtData }: { courtData: CourtData }) {
  const [showBooking, setShowBooking] = useState(false);
  return (
    <Card
      hoverable
      style={{ width: "320px" }}
      className="court-container"
      cover={<img alt="example" src="/testcourt.jpg" />}
    >
      <BookingModal
        show={showBooking}
        onExit={() => setShowBooking(false)}
        bookedDates={courtData.booked}
      />
      <Meta title={`Court #${courtData.court_id}`} />
      <button className="book-button" onClick={() => setShowBooking(true)}>
        Book now
      </button>
      <div>
        <i>6 bookings this month</i>
      </div>
    </Card>
  );
}

export default CourtCard;
