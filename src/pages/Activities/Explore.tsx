import { useState } from "react";
import ActivitesView from "../../components/Activities/ActivitesView";
import { Activity } from "../../types";
import { Segmented } from "antd";
import "./Explore.css";
import CompanyResults from "../../components/CompanyResults/CompanyResults";

const levels = ["Amateur", "Casual", "Intermediate"];
const sports = ["basketball", "padel", "tennis"];
const locations = ["Thessaloniki", "Athens"];
const names = [
  "Alex",
  "Niko",
  "Maria",
  "John",
  "Elena",
  "Chris",
  "George",
  "Anna",
  "Dimitris",
  "Sofia",
];

const getRandomElement = (arr: any) =>
  arr[Math.floor(Math.random() * arr.length)];

const generatePlayers = (): any[] => {
  const playerCount = Math.floor(Math.random() * 3) + 1; // 1 to 3 players
  return Array.from({ length: playerCount }, () => ({
    name: getRandomElement(names),
    level: getRandomElement(levels),
  }));
};

const generateRandomDate = (): string => {
  const day = Math.floor(Math.random() * 28) + 1; // Random day in February
  return `2024-02-${day.toString().padStart(2, "0")}`;
};

const generateTitle = (sport: string): string => {
  switch (sport) {
    case "basketball":
      return "Basketball 3x3";
    case "padel":
      return "Padel Doubles Match";
    case "tennis":
      return "Tennis Singles Game";
    default:
      return "Sports Event";
  }
};

const generateEvents = (count: number): Activity[] =>
  Array.from({ length: count }, () => {
    const sport = getRandomElement(sports);
    return {
      sport,
      title: generateTitle(sport),
      description: `Looking for ${
        Math.floor(Math.random() * 3) + 1
      } players to join a ${sport} game.`,
      location: getRandomElement(locations),
      date: generateRandomDate(),
      players: generatePlayers(),
    };
  });

const events: Activity[] = generateEvents(26);

function Explore() {
  const [exploreOption, setExploreOption] = useState("Sport center");

  return (
    <div className="wrapper">
      <div className="segment-wrapper">
        <Segmented
          style={{ fontSize: "24px" }}
          options={["Activities", "Sport Center"]}
          name="group"
          onChange={(value) => setExploreOption(value)}
        />
      </div>
      <div className="content-wrapper">
        {exploreOption === "Sport Center" ? (
          <CompanyResults isHome={false} />
        ) : (
          <ActivitesView activities={events} />
        )}
      </div>
    </div>
  );
}

export default Explore;
