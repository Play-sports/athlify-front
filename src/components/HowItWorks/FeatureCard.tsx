import { useAuthModal } from "../../hooks/useAuthModal";
import { notification } from "antd";

type featureProps = {
  title: string;
  content: string;
  cta: string;
  link: string;
};

type NotificationType = "success" | "info" | "warning" | "error";

function FeatureCard({ data }: { data: featureProps }) {
  const { openSignUp } = useAuthModal();
  const [api, contextHolder] = notification.useNotification();

  const openNotificationWithIcon = (type: NotificationType) => {
    navigator.clipboard.writeText("https://www.athlify.gr");
    api[type]({
      message: "Copied URL to clipboard!",
      placement: "bottomRight",
      showProgress: true,
      duration: 2,
      style: {
        background: "palegreen",
        borderRadius: "10px",
      },
    });
  };
  return (
    <div className="feature-card-wrapper">
      {contextHolder}
      <img src="/all.png" width={60} className="feature-icon"></img>
      <h3 style={{ fontSize: "24px" }}>{data.title}</h3>
      <div>{data.content}</div>

      {data.title === "Welcome" && (
        <button onClick={() => openSignUp()} className="feature-button">
          {data.cta}
        </button>
      )}

      {data.title === "Have fun!" && (
        <button
          onClick={() => openNotificationWithIcon("success")}
          className="feature-button"
        >
          {data.cta}
        </button>
      )}
    </div>
  );
}

export default FeatureCard;
