import { useState } from "react"
import { LampContext } from "."

export function LampProvider({ children }) {
  const [lampOn, setLampOn] = useState(false);

  const toggleLamp = () => setLampOn((prev) => !prev);

  return (
    <LampContext.Provider value={{ lampOn, setLampOn, toggleLamp }}>
      {children}
    </LampContext.Provider>
  );
}