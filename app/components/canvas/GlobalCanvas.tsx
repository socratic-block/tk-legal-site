"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import InteractiveGlow from "./InteractiveGlow";

export default function GlobalCanvas() {
  return (
    // We change -z-10 to z-0 so it sits ON TOP of the background color
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <Suspense fallback={null}>
          <InteractiveGlow />
        </Suspense>
      </Canvas>
    </div>
  );
}