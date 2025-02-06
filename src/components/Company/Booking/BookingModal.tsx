import { DatePicker, Divider, Modal, Steps } from "antd";

const tooltip = () => {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <div
          style={{
            height: "16px",
            width: "16px",
            border: "2px solid var(--header-bg-color)",
            borderRadius: "5px",
          }}
        ></div>
        Available
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <div
          style={{
            height: "16px",
            width: "16px",
            background: "var(--secondary-bg-color)",
            borderRadius: "5px",
          }}
        ></div>
        Taken
      </div>
    </div>
  );
};
function BookingModal({ show, onExit }: { show: boolean; onExit: () => void }) {
  const slots = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];
  return (
    <Modal title="Book a court" open={show} onCancel={onExit} footer={null}>
      <div className="booking-modal-wrapper">
        <div>
          <Steps
            size="small"
            current={2}
            items={[
              {
                title: "Select date",
              },
              {
                title: "Pick a slot",
              },
              {
                title: "Confirm booking",
              },
            ]}
          />
        </div>
        <div className="process-container">
          <div className="process-upper">
            <div>
              <Divider
                orientation="left"
                style={{ borderColor: "var(--header-bg-color)" }}
              >
                Date
              </Divider>
              <DatePicker variant="filled" style={{ width: "100%" }} />
            </div>
            <div>
              <Divider
                orientation="left"
                style={{ borderColor: "var(--header-bg-color)" }}
              >
                Time slots
              </Divider>
              <div className="time-slot-container">
                {slots.map((slot) => (
                  <div className="time-slot">{slot}:00</div>
                ))}
              </div>
              {tooltip()}
            </div>
          </div>
          <button className="confirm-button">Confirm</button>
        </div>
      </div>
    </Modal>
  );
}

export default BookingModal;
