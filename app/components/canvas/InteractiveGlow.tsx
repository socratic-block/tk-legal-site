"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function InteractiveGlow() {
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  useFrame((state) => {
    if (!materialRef.current) return;
    // Injecting actual elapsed time to drive the breathing math
    materialRef.current.uniforms.uTime.value = state.clock.getElapsedTime();
  });

  return (
    <mesh position={[-5, 5, -5]}>
      <planeGeometry args={[60, 40]} />
      <shaderMaterial
        ref={materialRef}
        transparent
        blending={THREE.AdditiveBlending}
        uniforms={{
          uTime: { value: 0 },
          uColor: { value: new THREE.Color("#4338ca") } 
        }}
        vertexShader={`
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        fragmentShader={`
          uniform float uTime;
          uniform vec3 uColor;
          varying vec2 vUv;

          void main() {
            vec2 uv = vUv * 2.0 - 1.0;
            vec2 anchor = vec2(-0.85, 0.85); // Locked top-left
            float dist = length(uv - anchor);
            
            // High-contrast brightness core
            float intensity = smoothstep(1.8, 0.0, dist);
            float glow = pow(intensity, 2.2) * 4.2; 
            
            // SLOW BREATH: 0.3 speed for institutional weight
            // Intensity varies between 90% and 100%
            float breath = 0.90 + 0.10 * sin(uTime * 0.3);

            gl_FragColor = vec4(uColor, glow * breath);
          }
        `}
      />
    </mesh>
  );
}