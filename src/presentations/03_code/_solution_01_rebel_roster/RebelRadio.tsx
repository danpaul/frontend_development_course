import { useEffect } from "react";

export default function RebelRadio() {
  useEffect(() => {
    const id = setInterval(() => {
      console.log("This is Red Leader. Stay on target.");
    }, 1000);
    // Closing comms unmounts this component; without cleanup the interval keeps firing.
    return () => clearInterval(id);
  }, []);

  return <p className="radio">Comms open. Check the console.</p>;
}
