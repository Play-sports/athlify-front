const URL = "https://www.athlify.gr";

const getCompanies = async () => {
  try {
    const data = await fetch(`${URL}/user/companies`);
    return data.json();
  } catch (e) {
    console.error(e);
    return false;
  }
};

export { getCompanies };

// COURT AVAILABILITY  ROUTE -->  /company/id/availability  ~id is parameter
export type API_COURTS = {
  data: courtAvailability[]; // Should return array of objects with the following format
};

type courtAvailability = {
  courtId: string;
  schedule: Schedule[];
};

type Schedule = {
  bookings: {
    startTime: Date; // 06-09-2025 13:00
    endTime: Date; // 06-09-2025 15:00
  }[];
};

// ACTIVITIES  ROUTE -->  /get/activities
export type API_ACTIVITIES = {
  data: Activity[]; // Should return array of objects with the following format
};

type Activity = {
  id: string;
  sport: string;
  title: string;
  description: string;
  location: string;
  date: Date;
  players: Player[];
};

type Player = {
  id: string;
  name: string;
  sportLevel: string; // Beginner, Casual, Intermediate, Advanced etc
};
