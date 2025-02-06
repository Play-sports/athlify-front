import { SportCategory } from "./types";

const sportsOptions: SportCategory[] = [
  {
    label: "Team Sports",
    title: "team sports",
    options: [
      {
        label: "Football",
        value: "football",
        src: "/football.png",
      },
      {
        label: "Basketball",
        value: "basketball",
        src: "/basketball.png",
      },
      {
        label: "Volleyball",
        value: "volleyball",
        src: "/volleyball.png",
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
        src: "/tennis.png",
      },
      {
        label: "Padel",
        value: "padel",
        src: "/padel.png",
      },
    ],
  },
];

export default sportsOptions;
