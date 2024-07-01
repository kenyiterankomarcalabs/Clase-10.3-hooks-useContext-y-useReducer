import { useCallback, useState } from "react";
import Hijo from "./Hijo";

function Padre() {
  let [counter, setCounter] = useState(0);
  function incrementar() {
    setCounter((nuevo) => nuevo + 1);
  }
  const incrementarCallback = useCallback(incrementar, []);
  return (
    <>
      <Hijo incrementar={incrementar} counter={counter} />
    </>
  );
}

export default Padre;
