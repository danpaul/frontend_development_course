/*
  The bottles in Wonderland are labeled. TypeScript is the labels.

  Several labels are wrong. Fix every type error.

  Rules:
  - Do not use `any`
  - Do not delete the functions — make the types and the values agree
  - Optional: paste into https://www.typescriptlang.org/play
*/

type Bottle = {
  label: string;
  ounces: number;
  drinkable: boolean;
};

const drinkMe: Bottle = {
  label: "DRINK ME",
  ounces: 4,
  drinkable: true,
  sparkles: true,
};

function sip(bottle: Bottle, gulps: number): string {
  return `${bottle.label}: ${gulps} gulps of ${bottle.ounces}oz`;
}

console.log(sip(drinkMe, "two"));

const mystery: unknown = JSON.parse('{"label":"EAT ME","ounces":1,"drinkable":true}');
console.log(mystery.label.toUpperCase());

async function fetchBlend(): Promise<string> {
  return 42;
}

type PartyStatus =
  | { kind: "waiting" }
  | { kind: "seated"; guest: string }
  | { kind: "over"; reason: string };

function announce(status: PartyStatus): string {
  if (status.kind === "waiting") {
    return "No room! No room!";
  }
  return `${status.guest} is seated.`;
}
