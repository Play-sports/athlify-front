import { DatePicker, Divider, Modal, Steps } from "antd";
import { Dayjs } from "dayjs";
import { DateTime } from "luxon";
import { useEffect, useState } from "react";

const tooltip = () => {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <div
          style={{
            height: "16px",
            width: "16px",
            border: "2px solid var(--header-bg-color)",
            borderRadius: "5px",
          }}
        ></div>
        Available
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <div
          style={{
            height: "16px",
            width: "16px",
            background: "var(--secondary-bg-color)",
            borderRadius: "5px",
          }}
        ></div>
        Taken
      </div>
    </div>
  );
};

const filterBookingsByDate = (bookings: any[], bookingDate: DateTime) => {
  console.log(bookingDate.toFormat("yyyy MM dd"));
  return bookings.filter((booking) => {
    const startDate = DateTime.fromISO(booking.start_time)
      .setZone(bookingDate.zone)
      .startOf("day");
    const selectedDate = bookingDate.startOf("day");
    return startDate.equals(selectedDate);
  });
};

const extractHours = (bookings: any[]) => {
  return bookings.map((booking) => DateTime.fromISO(booking.start_time).hour);
};

function BookingModal({
  show,
  bookedDates,
  onExit,
}: {
  show: boolean;
  bookedDates: any[];
  onExit: () => void;
}) {
  const slots = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];

  const [selectedSlot, setSelectedSlot] = useState(0);
  const [bookingDate, setBookingDate] = useState<DateTime>(null);
  const [filteredBookings, setFilteredBookings] = useState<any>([]);
  const [bookedHoursForDay, setBookedHoursForDate] = useState<any>([]);

  useEffect(() => {
    setBookedHoursForDate(extractHours(filteredBookings)); // Extract and store hours
    console.log(extractHours(filteredBookings));
  }, [filteredBookings]);

  const onDateChange = (value: Dayjs) => {
    if (value) {
      setBookingDate(DateTime.fromJSDate(value.toDate()));
      const filteredBookings = filterBookingsByDate(
        bookedDates,
        DateTime.fromJSDate(value.toDate())
      );
      console.log(filteredBookings);
      setFilteredBookings(filteredBookings);
    } else {
      setSelectedSlot(0);
      setFilteredBookings([]);
      setBookedHoursForDate([]);
    }
  };

  const print = () => {
    console.log("Sending payload");
    console.log(bookingDate);
    console.log({
      user_id: 5123,
      court_id: 1,
      booking: bookingDate
        .set({ hour: selectedSlot })
        .toFormat("yyyy LLL dd, HH:mm"),
    });
  };

  const handleSlotSelect = (slot: number) => {
    if (bookedHoursForDay.includes(slot)) {
      console.log("Ooops! Cant select that!");
      return;
    }

    setSelectedSlot(slot);
  };

  return (
    <Modal title="Book a court" open={show} onCancel={onExit} footer={null}>
      <div className="booking-modal-wrapper">
        <div>
          <Steps
            size="small"
            current={2}
            items={[
              {
                title: "Select date",
              },
              {
                title: "Pick a slot",
              },
              {
                title: "Confirm booking",
              },
            ]}
          />
        </div>
        <div className="process-container">
          <div className="process-upper">
            <div>
              <Divider
                orientation="left"
                style={{ borderColor: "var(--header-bg-color)" }}
              >
                Date
              </Divider>
              <DatePicker
                variant="filled"
                style={{ width: "100%" }}
                format={(value) => value.format("MMMM Do, YYYY")}
                onChange={(value) => onDateChange(value)}
              />
            </div>
            <div>
              <Divider
                orientation="left"
                style={{ borderColor: "var(--header-bg-color)" }}
              >
                Time slots
              </Divider>
              <div className="time-slot-container">
                {slots.map((slot) => (
                  <div
                    className={`time-slot 
                      ${selectedSlot === slot ? "time-slot-selected" : ""}
                      ${
                        bookedHoursForDay.includes(slot)
                          ? "time-slot-taken"
                          : ""
                      }`}
                    onClick={() => handleSlotSelect(slot)}
                  >
                    {slot}:00
                  </div>
                ))}
              </div>
              {tooltip()}
            </div>
          </div>
          <button className="confirm-button" onClick={print}>
            Confirm
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default BookingModal;
