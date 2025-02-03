import { SportCategory } from "./types";

const sportsOptions: SportCategory[] = [
  {
    label: "Team Sports", // ❌ Removed <b> JSX
    title: "team sports",
    options: [
      {
        label: "Football",
        value: "football",
        src: "../src/assets/football.png", // ✅ Corrected image path
      },
      {
        label: "Basketball",
        value: "basketball",
        src: "../src/assets/basketball.png",
      },
      {
        label: "Volleyball",
        value: "volleyball",
        src: "../src/assets/volleyball.png",
      },
    ],
  },
  {
    label: "Racket Sports",
    title: "racket sports",
    options: [
      {
        label: "Tennis",
        value: "tennis",
        src: "../src/assets/tennis.png",
      },
      {
        label: "Padel",
        value: "padel",
        src: "../src/assets/padel.png",
      },
    ],
  },
];

export default sportsOptions;
