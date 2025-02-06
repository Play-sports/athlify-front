import { Badge, Divider, Modal } from "antd";
import { Avatar, List } from "antd";
import { CalendarOutlined, EnvironmentOutlined } from "@ant-design/icons";

function ActivityModal({
  show,
  onExit,
  data,
}: {
  data: any;
  show: boolean;
  onExit: () => void;
}) {
  return (
    <Modal
      title="Activity details"
      open={show}
      onCancel={onExit}
      footer={null}
      width={800}
    >
      <div className="activity-modal-wrapper">
        <div className="activity-modal-details">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <h3 className="activity-detail-header">Sport</h3>
              <div className="activity-detail">
                <img
                  src={`src\\assets\\${data.sport}.png`}
                  width={16}
                  height={16}
                />
                <div>{data.sport}</div>
              </div>
            </div>
            <div style={{ width: "100px" }}>
              <h3 className="activity-detail-header">Players</h3>
              <div>4</div>
            </div>
          </div>
          <Divider />

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <h3 className="activity-detail-header">When</h3>
              <div className="activity-detail">
                <CalendarOutlined />
                <div>{data.date}</div>
              </div>
            </div>
            <div>
              <div style={{ width: "100px" }}>
                <h3 className="activity-detail-header">Time</h3>
                <div>19:30</div>
              </div>
            </div>
          </div>
          <Divider />
          <div>
            <h3 className="activity-detail-header">Where</h3>
            <div className="activity-detail">
              <EnvironmentOutlined />
              <div>Thessaloniki, Paralia</div>
            </div>
          </div>
          <Divider />

          <div>
            <h3 className="activity-detail-header">Description</h3>
            <i>{data.description}</i>
          </div>
        </div>
        <div className="activity-modal-players">
          <div>
            <h3 className="activity-detail-header">People joined</h3>
            <List
              itemLayout="horizontal"
              dataSource={data.players}
              renderItem={(player: any, index) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={
                      <Avatar
                        src={`https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png`}
                      />
                    }
                    title={
                      index === 0 ? (
                        <Badge.Ribbon text="Creator" color="volcano">
                          <b>{player.name}</b>
                        </Badge.Ribbon>
                      ) : (
                        <b>{player.name}</b>
                      )
                    }
                    description={player.level}
                  />
                </List.Item>
              )}
            />
          </div>
          <button className="join-button">Join now</button>
        </div>
      </div>
    </Modal>
  );
}

export default ActivityModal;
