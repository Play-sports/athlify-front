import React from "react";
import Feedback from "./Feedback";
import "./Profile.css";
import ActivitiesHistory from "./ActivitiesHistory";
import CurrentActivities from "./CurrentActivities";
import UserInfo from "./UserInfo";

function ProfileView() {
  return (
    <div className="profile-wrapper">
      <div className="profile-first-row">
        <UserInfo />
        <ActivitiesHistory />
      </div>
      <CurrentActivities />
      <Feedback />
    </div>
  );
}

export default ProfileView;
