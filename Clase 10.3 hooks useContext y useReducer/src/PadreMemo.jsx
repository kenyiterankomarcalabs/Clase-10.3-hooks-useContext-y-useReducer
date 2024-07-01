import React, { useState } from "react";
import HijoMemo from "./HijoMemo";

export default function PadreMemo() {
  let [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>Titulo</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
        omnis, iusto cupiditate obcaecati expedita sit!
      </p>
      <h2>Prueba nuestro contador</h2>
      <p>
        <b>{counter}</b>
      </p>
      <button onClick={() => setCounter(counter + 1)}>Incrementar</button>
      <hr />
      <HijoMemo />
    </div>
  );
}
