/*
  Solution: 01_rebel_roster
  Drop these files over 01_rebel_roster/src/

  1. Form reload — preventDefault so React state survives submit
  2. Scramble +1 — functional updates; both setters see the queued value
  3. Wrong row after dismiss — key={pilot.id} so child state stays with the pilot
  4. Comms after close — clear the interval in the effect cleanup
*/

import { useState, type SubmitEvent } from "react";
import PilotRow from "./PilotRow";
import RebelRadio from "./RebelRadio";

type Pilot = { id: string; name: string };

export default function App() {
  const [pilots, setPilots] = useState<Pilot[]>([
    { id: "luke", name: "Luke" },
    { id: "wedge", name: "Wedge" },
    { id: "biggs", name: "Biggs" },
  ]);
  const [name, setName] = useState("");
  const [xWings, setXWings] = useState(0);
  const [commsOpen, setCommsOpen] = useState(false);

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
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
