"use client";

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef, Suspense, useMemo } from 'react';
import * as THREE from 'three';

function Plexus() {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const groupRef = useRef<THREE.Group>(null);

  const particleCount = 80; // Massively reduced for performance
  const maxDistance = 2.2; // Increased to maintain connection density with fewer points

  const { positions, linePositions } = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const pts: THREE.Vector3[] = [];

    // Generate random points in a sphere volume
    for (let i = 0; i < particleCount; i++) {
      const r = 2 + Math.random() * 1.5;
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      
      pts.push(new THREE.Vector3(x, y, z));
    }

    // Generate lines between close points
    const lines: number[] = [];
    for (let i = 0; i < particleCount; i++) {
        for (let j = i + 1; j < particleCount; j++) {
            const dist = pts[i].distanceTo(pts[j]);
            if (dist < maxDistance) {
                lines.push(
                    pts[i].x, pts[i].y, pts[i].z,
                    pts[j].x, pts[j].y, pts[j].z
                );
            }
        }
    }

    const linePositions = new Float32Array(lines);
    return { positions, linePositions };
  }, []);

  // Smooth interpolation targets setup
  const current = useRef({ rotationY: 0, scale: 0.3 });
  const target = useRef({ rotationY: 0, scale: 0.3 });

  useFrame((state, delta) => {
    // 1. Inherent slow ambient rotation
    if (groupRef.current) {
        groupRef.current.rotation.x += delta * 0.05;
        groupRef.current.rotation.y += delta * 0.03;
    }

    // 2. Dynamic Scroll Reactivity
    const scrollY = window.scrollY || 0;
    // Map scroll to a 0 - 1 factor
    const scrollFactor = Math.min(scrollY / 3000, 1); 

    // Target values based on scroll
    target.current.rotationY = scrollFactor * Math.PI * 2; 
    target.current.scale = 0.3 + scrollFactor * 2.2; 

    // 3. Smooth interpolation (Lerp) to avoid stuttering
    current.current.rotationY = THREE.MathUtils.lerp(current.current.rotationY, target.current.rotationY, delta * 4);
    current.current.scale = THREE.MathUtils.lerp(current.current.scale, target.current.scale, delta * 4);

    if (groupRef.current) {
        groupRef.current.rotation.z = current.current.rotationY; // Apply extra rotation on Z axis
        groupRef.current.scale.set(current.current.scale, current.current.scale, current.current.scale);
    }
  });

  return (
    <group ref={groupRef}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#22c55e"
          size={0.08}
          sizeAttenuation={true}
          transparent
          opacity={0.8}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#34d399"
          transparent
          opacity={0.1}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          linewidth={1}
        />
      </lineSegments>
    </group>
  );
}

export default function Scene() {
  return (
    <div className="w-full h-screen fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-900/20 via-black to-black pointer-events-none">
      <Canvas 
        camera={{ position: [0, 0, 7], fov: 60 }} 
        dpr={1} // Force pixel ratio to 1 for max performance on all devices
        gl={{ antialias: false, powerPreference: "high-performance", alpha: false }} // Optimize WebGL context
      >
        <Suspense fallback={null}>
          <Plexus />
        </Suspense>
      </Canvas>
    </div>
  );
}
