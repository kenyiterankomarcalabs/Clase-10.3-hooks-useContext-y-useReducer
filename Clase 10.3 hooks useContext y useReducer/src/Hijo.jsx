import { useEffect } from "react";

function Hijo({ counter, incrementar }) {
  function escucharFuncion() {
    console.log("Se esta creando una función");
  }
  useEffect(escucharFuncion, [incrementar]);
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
}
export default Hijo;
