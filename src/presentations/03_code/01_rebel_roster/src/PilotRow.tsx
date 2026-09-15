import { useState } from "react";

export default function PilotRow({
  name,
  onDismiss,
}: {
  name: string;
  onDismiss: () => void;
}) {
  const [ready, setReady] = useState(false);

  return (
    <li>
      <span className="pilot-name">{name}</span>
      <span className="status">{ready ? "Airborne" : "On deck"}</span>
      <button
        type="button"
        className="secondary"
        onClick={() => setReady((r) => !r)}
      >
        Toggle ready
      </button>
      <button type="button" className="secondary" onClick={onDismiss}>
        Dismiss
      </button>
    </li>
  );
}
