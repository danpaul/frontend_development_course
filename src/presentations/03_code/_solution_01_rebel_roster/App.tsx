/*
  Solution: 01_rebel_roster App.tsx
  Drop this file over 01_rebel_roster/src/App.tsx

  1. Form reload — preventDefault so React state survives submit
  2. Scramble +1 — functional updates; both setters see the queued value
  3. Wrong row after dismiss — key={pilot.id} so child state stays with the pilot
  4. Comms after close — clear the interval in the effect cleanup
*/

import { useEffect, useState, type FormEvent } from "react";

type Pilot = { id: string; name: string };

function PilotRow({
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
      <button type="button" className="secondary" onClick={() => setReady((r) => !r)}>
        Toggle ready
      </button>
      <button type="button" className="secondary" onClick={onDismiss}>
        Dismiss
      </button>
    </li>
  );
}

function RebelRadio() {
  useEffect(() => {
    const id = setInterval(() => {
      console.log("This is Red Leader. Stay on target.");
    }, 1000);
    // Closing comms unmounts this component; without cleanup the interval keeps firing.
    return () => clearInterval(id);
  }, []);

  return <p className="radio">Comms open. Check the console.</p>;
}

export default function App() {
  const [pilots, setPilots] = useState<Pilot[]>([
    { id: "luke", name: "Luke" },
    { id: "wedge", name: "Wedge" },
    { id: "biggs", name: "Biggs" },
  ]);
  const [name, setName] = useState("");
  const [xWings, setXWings] = useState(0);
  const [commsOpen, setCommsOpen] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPilots((current) => [
      ...current,
      { id: crypto.randomUUID(), name: name.trim() || "Unknown pilot" },
    ]);
    setName("");
  }

  function scrambleTwo() {
    setXWings((n) => n + 1);
    setXWings((n) => n + 1);
  }

  return (
    <>
      <h1>Rebel briefing</h1>
      <p className="lede">Roster the trench-run flight.</p>

      <section>
        <h2>Add a pilot</h2>
        <form onSubmit={handleSubmit}>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Call sign"
            aria-label="Pilot name"
          />
          <button type="submit">Add to roster</button>
        </form>
      </section>

      <section>
        <h2>X-wings on deck: {xWings}</h2>
        <button type="button" onClick={scrambleTwo}>
          Scramble two X-wings
        </button>
      </section>

      <section>
        <h2>Flight roster</h2>
        <ul>
          {pilots.map((pilot) => (
            <PilotRow
              key={pilot.id}
              name={pilot.name}
              onDismiss={() =>
                setPilots((current) => current.filter((p) => p.id !== pilot.id))
              }
            />
          ))}
        </ul>
      </section>

      <section>
        <h2>Comms</h2>
        <button type="button" onClick={() => setCommsOpen((open) => !open)}>
          {commsOpen ? "Close comms" : "Open comms"}
        </button>
        {commsOpen && <RebelRadio />}
      </section>
    </>
  );
}
