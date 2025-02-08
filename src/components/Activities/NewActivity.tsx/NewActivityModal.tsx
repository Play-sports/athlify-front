import { DatePicker, Modal, Select, Space, TimePicker } from "antd";
import sportsOptions from "../../../sportsOptions";

function NewActivityModal({
  show,
  onExit,
}: {
  show: boolean;
  onExit: () => void;
}) {
  return (
    <Modal
      title="Create new activity"
      open={show}
      onCancel={onExit}
      footer={null}
    >
      <div className="new-activity-modal-wrapper">
        <div>
          <div>
            <input placeholder="Activity title" />
          </div>
        </div>
        <div>
          <div>Sport & Players</div>
          <div className="new-activity-row">
            <Select
              variant="filled"
              defaultValue={{
                label: sportsOptions[1].options[0].label,
                value: sportsOptions[1].options[1].value,
              }}
              options={sportsOptions}
              optionRender={(option: any) => (
                <Space>
                  {option.data.src && (
                    <img
                      src={option.data.src}
                      alt={option.data.label}
                      width="14px"
                    />
                  )}
                  {option.data.label}
                </Space>
              )}
              labelRender={(selectedValue: any) => {
                const foundOption = sportsOptions
                  .flatMap((group) => group.options)
                  .find((opt) => opt.value === selectedValue.value);

                return foundOption ? (
                  <div
                    style={{
                      paddingLeft: "10pX",
                      width: "100%",
                      borderRadius: "6px",
                      display: "flex",
                      alignItems: "center",
                      gap: "15px",
                    }}
                  >
                    <img
                      src={foundOption.src}
                      alt={foundOption.label}
                      width="14px"
                    />
                    {foundOption.label}
                  </div>
                ) : (
                  selectedValue
                );
              }}
            />
            <input
              max={8}
              type="number"
              placeholder="Players #"
              className="activity-select-players"
            ></input>
          </div>
        </div>
        <div>
          <div>Time & Date</div>
          <div className="new-activity-row">
            <DatePicker
              placeholder="Filled"
              variant="filled"
              format={(value) => value.format("MMMM Do, YYYY")}
            />
            <TimePicker variant="filled" format={"hh:mm"} />
          </div>
        </div>
        <div>
          <div>Location</div>
          <div>
            <i>To be discussed</i>
          </div>
        </div>
        <div>
          <div>
            <textarea placeholder="Activity description" />
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default NewActivityModal;
