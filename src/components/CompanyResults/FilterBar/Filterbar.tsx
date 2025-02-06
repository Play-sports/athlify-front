import { useState } from "react";

const sports = [
  {
    name: "All",
    src: "/all.png",
  },
  {
    name: "Football",
    src: "/football.png",
  },
  {
    name: "Basketball",
    src: "/basketball.png",
  },
  {
    name: "Tennis",
    src: "/tennis.png",
  },
  {
    name: "Padel",
    src: "/padel.png",
  },
  {
    name: "Volleyball",
    src: "/volleyball.png",
  },
];

function Filterbar({
  filterSport,
  filterName,
  isHome,
}: {
  filterSport: (sport: string) => void;
  filterName: (text: string) => void;
  isHome: boolean;
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleFilterChange = (index: number) => {
    filterSport(sports[index].name);
    setActiveIndex(index);
  };

  return (
    <div className="filter-wrapper">
      <div style={{ display: "flex" }}>
        {sports.map((sport, index) => {
          return (
            <div
              className={`filter-item ${
                index === activeIndex ? "filter-item-active" : ""
              }`}
              onClick={() => handleFilterChange(index)}
            >
              <img src={sport.src} width={"20px"}></img>
              <div>{sport.name}</div>
            </div>
          );
        })}
      </div>
      {!isHome && (
        <input
          className="filter-input"
          placeholder="Search for club"
          type="search"
          onChange={(e) => filterName(e.target.value)}
        ></input>
      )}
    </div>
  );
}

export default Filterbar;
