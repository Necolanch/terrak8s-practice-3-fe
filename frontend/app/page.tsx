"use client";

import { useState } from "react";

export default function Home() {
  const [serviceA, setServiceA] = useState<string>("");
  const [serviceB, setServiceB] = useState<string>("");

  const callServiceA = async () => {
    const res = await fetch("http://localhost:3001/");
    const data = await res.json();
    setServiceA(JSON.stringify(data));
    console.log(serviceA);
  };

  const callServiceB = async () => {
    const res = await fetch("http://localhost:3002/");
    const data = await res.json();
    setServiceB(JSON.stringify(data));
    console.log(serviceB);
  };

  return (
    <main style={{ padding: 20 }}>
      <h1>Frontend</h1>

      <button onClick={callServiceA}>Call Service A</button>
      <pre>{serviceA}</pre>

      <button onClick={callServiceB}>Call Service B</button>
      <pre>{serviceB}</pre>
    </main>
  );
}
