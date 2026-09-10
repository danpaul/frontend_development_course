/*
  Solution: 09_bottles.ts

  1. Excess property: object literals cannot have sparkles on Bottle — drop it
  2. sip() wants a number of gulps, not the string "two"
  3. unknown must be narrowed before .label
  4. async functions return Promise<T>; 42 is not a string
  5. After excluding "waiting", status is seated | over — over has no guest
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
};

function sip(bottle: Bottle, gulps: number): string {
  return `${bottle.label}: ${gulps} gulps of ${bottle.ounces}oz`;
}

console.log(sip(drinkMe, 2));

const mystery: unknown = JSON.parse(
  '{"label":"EAT ME","ounces":1,"drinkable":true}',
);

function isBottle(value: unknown): value is Bottle {
  return (
    typeof value === "object" &&
    value !== null &&
    "label" in value &&
    typeof value.label === "string"
  );
}

if (isBottle(mystery)) {
  console.log(mystery.label.toUpperCase());
}

async function fetchBlend(): Promise<string> {
  return "Earl Grey";
}

type PartyStatus =
  | { kind: "waiting" }
  | { kind: "seated"; guest: string }
  | { kind: "over"; reason: string };

function announce(status: PartyStatus): string {
  if (status.kind === "waiting") {
    return "No room! No room!";
  }
  if (status.kind === "over") {
    return `Party over: ${status.reason}`;
  }
  return `${status.guest} is seated.`;
}
