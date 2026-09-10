/*
  Solution: 10_tea_card.ts

  Errors:
  1. guests.join — guests is optional, so it may be undefined (optional props)
  2. sugar: true — excess property on an object literal assigned to TeaCardProps
  3. return state.cup after the if — idle | pouring have no cup (union not narrowed)

  teaCard({ blend: "Earl Grey" }) is fine: guests is optional.
  state.cup inside `status === "served"` is fine.
*/

type TeaCardProps = {
  blend: string;
  guests?: string[];
};

function teaCard({ blend, guests = [] }: TeaCardProps): string {
  return `${blend} for ${guests.join(", ")}`;
}

teaCard({ blend: "Earl Grey" });

teaCard({
  blend: "Earl Grey",
  guests: ["Alice", "Hatter"],
});

type PourState =
  | { status: "idle" }
  | { status: "pouring" }
  | { status: "served"; cup: string };

function label(state: PourState): string {
  if (state.status === "served") {
    return state.cup;
  }
  return state.status;
}
