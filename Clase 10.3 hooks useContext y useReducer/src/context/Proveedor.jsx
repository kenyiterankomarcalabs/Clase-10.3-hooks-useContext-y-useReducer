import React, { useEffect, useState } from "react";
import MiContexto from "./context";
import Algo from "../Algo";

export default function Proveedor() {
  let [counter, setCounter] = useState(0);
  let [data, setData] = useState({
    counter: counter,
    increment: () => {},
  });

  function increment() {
    setCounter(counter + 1);
  }
  useEffect(() => {
    setData({
      counter,
      increment,
    });
  }, [counter]);
  return (
    <MiContexto.Provider value={data}>
      <Algo />
    </MiContexto.Provider>
  );
}
