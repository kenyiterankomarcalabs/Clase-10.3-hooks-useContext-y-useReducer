import React, { useMemo } from "react";

export default function HijoMemo() {
  const contador = useMemo(() => {
    let count = 0;
    for (let k = 0; k < 1000000000; k++) {
      count = count + 1;
    }
    return count;
  }, []);
  return <div>HijoMemo {contador} </div>;
}
