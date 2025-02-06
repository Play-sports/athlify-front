import CourtCard from "./CourtCard";

function Booking() {
  const courts = [1, 2, 3];
  return (
    <div className="court-wrapper">
      {courts.map(() => {
        return <CourtCard />;
      })}
    </div>
  );
}

export default Booking;
