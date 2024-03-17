import {
  IconDefinition,
  faCircleNotch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function AsyncButton(props: {
  title: string;
  icon: IconDefinition;
  action: () => Promise<void>;
  onAsyncError: (err: unknown) => void;
  onStart: () => void;
}) {
  const [isDoing, setIsDoing] = useState(false);
  const handleAction = async () => {
    try {
      setIsDoing(true);
      props.onStart();
      await props.action();
    } catch (err) {
      console.log("err: ", err);
      props.onAsyncError(err);
    } finally {
      setIsDoing(false);
    }
  };
  return (
    <button
      title={props.title}
      disabled={isDoing}
      onClick={handleAction}
      className="btn"
    >
      <FontAwesomeIcon icon={isDoing ? faCircleNotch : props.icon} />
    </button>
  );
}
