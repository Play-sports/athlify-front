import { useState } from "react";
import { Card } from "antd";
import BookingModal from "./BookingModal";
import "./Booking.css";

const { Meta } = Card;

function CourtCard() {
  const [showBooking, setShowBooking] = useState(false);
  return (
    <Card
      hoverable
      className="court-container"
      cover={<img alt="example" src="/testcourt.jpg" />}
    >
      <BookingModal show={showBooking} onExit={() => setShowBooking(false)} />
      <Meta title="Court #1" />
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
