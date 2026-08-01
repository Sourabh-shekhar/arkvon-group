"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html, Stars, Trail } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function GroupCore() {
  const ref = useRef();
  useFrame((state, delta) => {
    ref.current.rotation.y += delta * 0.15;
    ref.current.rotation.x += delta * 0.04;
  });
  return (
    <group ref={ref}>
      <mesh>
        <icosahedronGeometry args={[1.15, 1]} />
        <meshStandardMaterial
          color="#0F1B2D"
          emissive="#B08D57"
          emissiveIntensity={0.15}
          metalness={0.6}
          roughness={0.3}
          wireframe={false}
        />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[1.3, 1]} />
        <meshBasicMaterial color="#B08D57" wireframe transparent opacity={0.25} />
      </mesh>
      <Html center distanceFactor={8} style={{ pointerEvents: "none" }}>
        <div className="text-paper text-xs font-semibold tracking-widest whitespace-nowrap">
          ARKVON GROUP
        </div>
      </Html>
    </group>
  );
}

function OrbitingSubsidiary({ label, radius = 3.4, speed = 0.35, tilt = 0.25 }) {
  const pivot = useRef();
  const nodeRef = useRef();

  useFrame((state, delta) => {
    pivot.current.rotation.y += delta * speed;
    if (nodeRef.current) {
      nodeRef.current.rotation.y += delta * 0.8;
      nodeRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.2) * 0.15;
    }
  });

  return (
    <group ref={pivot} rotation={[tilt, 0, 0]}>
      <Trail width={1.5} length={5} color={"#B08D57"} attenuation={(t) => t * t}>
        <group ref={nodeRef} position={[radius, 0, 0]}>
          <mesh>
            <sphereGeometry args={[0.32, 32, 32]} />
            <meshStandardMaterial
              color="#D4B483"
              emissive="#B08D57"
              emissiveIntensity={0.4}
              metalness={0.4}
              roughness={0.4}
            />
          </mesh>
          <Html center distanceFactor={8} style={{ pointerEvents: "none" }}>
            <div className="text-ink text-[11px] font-semibold bg-paper/90 px-2 py-1 rounded-full whitespace-nowrap shadow">
              {label}
            </div>
          </Html>
        </group>
      </Trail>
    </group>
  );
}

function OrbitRing({ radius = 3.4, tilt = 0.25 }) {
  const points = useMemo(() => {
    const pts = [];
    for (let i = 0; i <= 128; i++) {
      const a = (i / 128) * Math.PI * 2;
      pts.push(new THREE.Vector3(Math.cos(a) * radius, 0, Math.sin(a) * radius));
    }
    return pts;
  }, [radius]);
  const geometry = useMemo(
    () => new THREE.BufferGeometry().setFromPoints(points),
    [points]
  );
  return (
    <line rotation={[tilt, 0, 0]} geometry={geometry}>
      <lineBasicMaterial color="#B08D57" transparent opacity={0.25} />
    </line>
  );
}

export default function Scene3D({ companies }) {
  return (
    <div className="w-full h-[420px] sm:h-[540px] rounded-2xl overflow-hidden bg-ink">
      <Canvas camera={{ position: [0, 2.4, 7], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} intensity={1.2} color="#D4B483" />
        <pointLight position={[-5, -3, -5]} intensity={0.4} color="#0F1B2D" />
        <Stars radius={40} depth={30} count={1200} factor={2} fade speed={0.4} />

        <GroupCore />

        {companies.map((c, i) => (
          <group key={c.slug}>
            <OrbitRing radius={3.4 + i * 1.1} tilt={0.2 + i * 0.15} />
            <OrbitingSubsidiary
              label={c.name}
              radius={3.4 + i * 1.1}
              speed={0.35 - i * 0.05}
              tilt={0.2 + i * 0.15}
            />
          </group>
        ))}

        <OrbitControls
          enablePan={false}
          enableZoom={true}
          minDistance={4}
          maxDistance={12}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}