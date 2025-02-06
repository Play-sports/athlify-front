import { useEffect, useState } from "react";
import ActivityCard from "./ActivityCard";
import "./Activities.css";
import ActivityModal from "./ActivityModal";
import Filterbar from "../CompanyResults/FilterBar/Filterbar";
import { Activity } from "../../types";
import { Pagination } from "antd";
import NewActivity from "./NewActivity.tsx/NewActivity";

function ActivitesView({ activities }: { activities: Activity[] }) {
  // Filter state
  const [activeSport, setActiveSport] = useState("all");
  const [filterText, setFilterText] = useState("");
  const [filteredActivities, setFilteredActivities] = useState<any[]>([]);

  // Modal data
  const [showActivityModal, setShowActivityModal] = useState(false);
  const [modalData, setModalData] = useState([]);

  //Pagination state
  const [startIndex, setStartIndex] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    setFilteredActivities(
      activities
        .slice((startIndex - 1) * pageSize, startIndex * pageSize)
        .filter((activity) => {
          const activityInSport =
            activity.sport == activeSport || activeSport === "all"; // Filter by sport

          const activityInLocation =
            activity.location
              .toLowerCase()
              .includes(filterText.toLowerCase()) || // Filter by location
            activity.title.toLowerCase().includes(filterText.toLowerCase()) || // Filter by title
            filterText === "";

          return activityInSport && activityInLocation;
        })
    );
  }, [activeSport, filterText, activities, startIndex, pageSize]);

  const handleActivitySelection = (data: any) => {
    setShowActivityModal(true);
    setModalData(data);
  };

  const handlePageChange = (value: number) => {
    setStartIndex(value);
  };
  return (
    <>
      <ActivityModal
        show={showActivityModal}
        onExit={() => setShowActivityModal(false)}
        data={modalData}
      />

      <div className="activities-wrapper">
        <Filterbar
          isHome={false}
          filterSport={(sport: string) => setActiveSport(sport.toLowerCase())}
          filterName={(txt) => setFilterText(txt)}
        />

        <div className="activities-card-wrapper slide-in-right">
          <NewActivity />
          {filteredActivities.map((e) => (
            <ActivityCard onClick={() => handleActivitySelection(e)} data={e} />
          ))}
        </div>
        <Pagination
          className="pagination-wrapper"
          total={activities.length}
          showTotal={(total) => `Total ${total} activities`}
          pageSize={pageSize}
          onChange={(page) => handlePageChange(page)}
          current={startIndex}
          pageSizeOptions={[10, 15, 20, 50]}
          onShowSizeChange={(_, size) => setPageSize(size)}
          showSizeChanger
        />
      </div>
      {/* <div className="activities-create-container ">
        <div>Can't find what you are looking for?</div>
        <button className="activity-create-btn">Start an activity now!</button>
      </div> */}
    </>
  );
}

export default ActivitesView;
