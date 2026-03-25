"use client";

import { useState } from "react";

export default function Page() {
  const [candidates, setCandidates] = useState<any[]>([]);

  return (
    <div style={{ padding: 20 }}>
      <h1>HRIS AI (Live)</h1>

      <input
        type="file"
        onChange={async (e) => {
          const file = e.target.files?.[0];
          if (!file) return;

          const text = await file.text();

          setCandidates([
            ...candidates,
            { id: Date.now(), summary: text.slice(0, 100) },
          ]);
        }}
      />

      <ul>
        {candidates.map((c) => (
          <li key={c.id}>{c.summary}</li>
        ))}
      </ul>
    </div>
  );
}
