import { useState } from "react";
import "./NewActivity.css";
import NewActivityModal from "./NewActivityModal";

function NewActivity() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <NewActivityModal show={showModal} onExit={() => setShowModal(false)} />
      <div className="new-activity-wrapper" onClick={() => setShowModal(true)}>
        <div>Create a new activity</div>
      </div>
    </>
  );
}

export default NewActivity;
