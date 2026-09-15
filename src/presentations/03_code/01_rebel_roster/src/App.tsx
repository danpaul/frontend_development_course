/*
  Bugs:
  - Add to roster → page reloads; the new pilot never sticks
  - Scramble two X-wings → count goes up by 1, not 2
  - Click Toggle ready next to Luke. Then click Dismiss next to Luke.
    You see: Wedge says "Airborne". Should be: "On deck".
  - Close comms → console still logs "This is Red Leader. Stay on target."
*/

import { useState, type FormEvent } from "react";
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

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    setPilots((current) => [
      ...current,
      { id: crypto.randomUUID(), name: name.trim() || "Unknown pilot" },
    ]);
    setName("");
  }

  function scrambleTwo() {
    setXWings(xWings + 1);
    setXWings(xWings + 1);
  }

  return (
    <>
      <h1>Rebel briefing</h1>
      <p className="lede">
        Roster the trench-run flight. Four things here are wrong.
      </p>

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
          {pilots.map((pilot, index) => (
            <PilotRow
              key={index}
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
