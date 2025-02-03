import { Button } from "antd";
import "./CtaButton.css";

function CtaButton({ onClick }: { onClick: () => void }) {
  return (
    <Button className="cta-button" onClick={() => onClick()}>
      Join now
    </Button>
  );
}

export default CtaButton;
