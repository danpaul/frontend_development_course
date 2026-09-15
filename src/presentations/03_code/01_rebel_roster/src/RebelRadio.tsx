import { useEffect } from "react";

export default function RebelRadio() {
  useEffect(() => {
    const id = setInterval(() => {
      console.log("This is Red Leader. Stay on target.");
    }, 1000);
  }, []);

  return <p className="radio">Comms open. Check the console.</p>;
}
