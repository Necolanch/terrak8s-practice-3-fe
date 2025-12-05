"use client";

import { useState } from "react";

export default function Home() {
  const [serviceA, setServiceA] = useState<string>("");
  const [serviceB, setServiceB] = useState<string>("");

  const callServiceA = async () => {
    await fetch("http://localhost:3001/")
          .then(response => response.json())
          .then(data => setServiceA(JSON.stringify(data)))
          .catch(error => console.error('Error fetching Service A:', error));
    console.log(serviceA);
  };

  const callServiceB = async () => {
    await fetch("http://localhost:3002/")
          .then(response => response.json())
          .then(data => setServiceB(JSON.stringify(data)))
          .catch(error => console.error('Error fetching Service B:', error));
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
