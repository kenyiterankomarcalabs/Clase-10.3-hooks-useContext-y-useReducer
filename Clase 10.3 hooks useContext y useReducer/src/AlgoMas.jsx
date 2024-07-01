import React, { useContext } from "react";
import MiContexto from "./context/context";

export default function AlgoMas() {
  const data = useContext(MiContexto);
  return (
    <div>
      {" "}
      {data.counter}
      <button onClick={() => data.increment()}>Click</button>
    </div>
  );
}
