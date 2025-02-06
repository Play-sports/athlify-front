import { Modal } from "antd";

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
      <div>Sport & Players</div>
      <div>Time & Date</div>
      <div>Location</div>
      <div>Description</div>
    </Modal>
  );
}

export default NewActivityModal;
