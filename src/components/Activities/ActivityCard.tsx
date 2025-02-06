import {
  InfoCircleOutlined,
  ShareAltOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
import { Activity } from "../../types";

const { Meta } = Card;

function randomDarkHex() {
  let r = Math.floor(Math.random() * 200);
  let g = Math.floor(Math.random() * 200);
  let b = Math.floor(Math.random() * 200);

  return `#${r.toString(16).padStart(2, "0")}${g
    .toString(16)
    .padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
}
const getPlayerAvatar = (player: any) => {
  return (
    <Avatar
      style={{
        backgroundColor: randomDarkHex(),
      }}
    >
      {player.slice(0, 1)}
    </Avatar>
  );
};

function ActivityCard({
  data,
  onClick,
}: {
  data: Activity;
  onClick: () => void;
}) {
  return (
    <Card
      className="activity-card-container"
      cover={
        <img
          alt="example"
          src={`src\\assets\\test${data.sport}.jpg`}
          height={200}
          style={{ objectFit: "cover" }}
        />
      }
      actions={[
        <div className="activity-card-footer">
          <ShareAltOutlined key="edit" />
          <div>Share</div>
        </div>,
        <div className="activity-card-footer" onClick={() => onClick()}>
          <InfoCircleOutlined key="edit" />
          <div>Details</div>
        </div>,
      ]}
    >
      <Meta
        avatar={<img src={`src\\assets\\${data.sport}.png`} width={20} />}
        title={
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>{data.title}</div>
            <span style={{ fontFamily: "Montserrat !important" }}>
              <TeamOutlined />4
            </span>
          </div>
        }
        description={
          <div className="activity-card-preview">
            <div>{data.description}</div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div>Players joined</div>
              <div>
                <Avatar.Group
                  size="default"
                  className="activity-players-preview"
                  max={{
                    count: 2,
                    style: {
                      color: "#f56a00",
                      backgroundColor: "#fde3cf",
                      cursor: "pointer",
                    },
                    popover: { trigger: "click" },
                  }}
                >
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  {data.players.map((player, index) =>
                    index > 0 ? getPlayerAvatar(player.name) : null
                  )}
                </Avatar.Group>
              </div>
            </div>
          </div>
        }
      />
    </Card>
  );
}

export default ActivityCard;
