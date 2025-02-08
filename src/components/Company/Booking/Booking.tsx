import { useEffect, useState } from "react";
import CourtCard from "./CourtCard";
import { getCourtAvailability } from "../../../services/Companies";
import { CourtData } from "../../../types";

function Booking({ clubId }: { clubId: string }) {
  const [courts, setCourts] = useState<any>([]);

  const fetchAvailability = async () => {
    try {
      const data = await getCourtAvailability(clubId);
      setCourts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAvailability();
  }, []);

  return (
    <div className="court-wrapper">
      {courts.map((c: CourtData) => {
        return <CourtCard courtData={c} />;
      })}
    </div>
  );
}

export default Booking;
