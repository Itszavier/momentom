/** @format */

import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      hello world, {count}
      <button onClick={() => setCount((prev) => prev + 1)}>add</button>
    </div>
  );
}
