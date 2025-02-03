import { Button } from "antd";
import React from "react";

function Feedback() {
  const ratings = ["😡", "😕", "😐", "😃", "😍"];

  return (
    <div>
      <h2>We value your opinion</h2>
      <div className="feedback-wrapper">
        <div className="feedback-wrapper-section">
          <div>How would you rate your website experience</div>
          <div className="rating-wrapper">
            {ratings.map((rating) => (
              <div className="rating-option">{rating}</div>
            ))}
          </div>
        </div>
        <div className="feedback-wrapper-section">
          <textarea
            className="feedback-text"
            placeholder="Tell us what you think"
          />
          <button className="feedback-btn">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
