import React from "react";
import AnimatedNumbers from "react-animated-numbers";
import "./Stats.css";
import CtaButton from "../CtaButton/CtaButton";
import { useAuthModal } from "../../hooks/useAuthModal";

const AnimatedNumber = ({ number }: { number: number }) => {
  return (
    <AnimatedNumbers
      includeComma
      transitions={(index) => ({
        type: "keyframes",
        duration: index,
      })}
      animateToNumber={number}
      fontStyle={{
        fontSize: 100,
        color: "white",
      }}
    />
  );
};

function Stats() {
  const { openSignUp } = useAuthModal();

  return (
    <div className="stats-wrapper">
      <div className="numbers-wrapper">
        <div className="stat-category">
          <div>Sports</div>
          <AnimatedNumber number={4} />
        </div>
        <div className="stat-category">
          <div>Clubs</div>
          <AnimatedNumber number={25} />
        </div>
        <div className="stat-category">
          <div>Players</div>
          <AnimatedNumber number={1182} />
        </div>
      </div>
      <h2>Looking for a challenge? Start your search here!</h2>
      <CtaButton onClick={() => openSignUp()} />
    </div>
  );
}

export default Stats;
