'use client';

import { useRef, useMemo, useState, Suspense } from 'react';
import { Canvas, useFrame, ThreeEvent } from '@react-three/fiber';
import { OrbitControls, Stars, Float, Line } from '@react-three/drei';
import * as THREE from 'three';

type NodeData = {
  label: string;
  target: string;
  position: [number, number, number];
  color: string;
  emissive: string;
};

const NODES: NodeData[] = [
  {
    label: 'Tech',
    target: '#tech',
    position: [2.2, 1.0, 0.5],
    color: '#3b82f6',
    emissive: '#1d4ed8',
  },
  {
    label: 'Yoga',
    target: '#yoga',
    position: [-2.0, -0.6, 0.8],
    color: '#10b981',
    emissive: '#047857',
  },
  {
    label: 'Art',
    target: '#art',
    position: [0.3, -1.8, -0.5],
    color: '#ec4899',
    emissive: '#be185d',
  },
];

function GlowNode({
  node,
  onHover,
}: {
  node: NodeData;
  onHover: (label: string | null) => void;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const haloRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (meshRef.current) {
      meshRef.current.position.y =
        node.position[1] + Math.sin(t * 1.5 + node.position[0]) * 0.15;
      const targetScale = hovered ? 1.35 : 1.0;
      meshRef.current.scale.lerp(
        new THREE.Vector3(targetScale, targetScale, targetScale),
        0.1
      );
    }
    if (haloRef.current) {
      const mat = haloRef.current.material as THREE.MeshBasicMaterial;
      mat.opacity = hovered ? 0.25 : 0.06;
      const haloScale = hovered ? 2.2 : 1.6;
      haloRef.current.scale.lerp(
        new THREE.Vector3(haloScale, haloScale, haloScale),
        0.1
      );
    }
  });

  const handleClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    const el = document.querySelector(node.target);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <group position={node.position}>
      {/* Soft glowing core sphere */}
      <mesh
        ref={meshRef}
        onClick={handleClick}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
          onHover(node.label);
          document.body.style.cursor = 'pointer';
        }}
        onPointerOut={() => {
          setHovered(false);
          onHover(null);
          document.body.style.cursor = 'auto';
        }}
      >
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial
          color={node.color}
          emissive={node.emissive}
          emissiveIntensity={hovered ? 2.0 : 1.2}
          roughness={0.15}
          metalness={0.6}
          transparent
          opacity={0.9}
        />
      </mesh>

      {/* Halo glow sphere — appears on hover */}
      <mesh ref={haloRef}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshBasicMaterial
          color={node.color}
          transparent
          opacity={0.06}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
}

function HubConnectors() {
  const lines = useMemo(() => {
    const center: [number, number, number] = [0, 0, 0];
    return NODES.map((n) => ({
      start: center,
      end: n.position,
      color: n.color,
    }));
  }, []);

  return (
    <>
      {lines.map((line, i) => (
        <Line
          key={i}
          points={[line.start, line.end]}
          color={line.color}
          lineWidth={1.5}
          transparent
          opacity={0.25}
          dashed
          dashSize={0.08}
          gapSize={0.06}
        />
      ))}
    </>
  );
}

function CentralCrystal() {
  const innerRef = useRef<THREE.Mesh>(null);
  const outerRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (innerRef.current) {
      innerRef.current.rotation.y = t * 0.2;
      innerRef.current.rotation.x = t * 0.12;
    }
    if (outerRef.current) {
      outerRef.current.rotation.y = -t * 0.15;
      outerRef.current.rotation.z = t * 0.08;
    }
    if (glowRef.current) {
      const mat = glowRef.current.material as THREE.MeshBasicMaterial;
      mat.opacity = 0.04 + Math.sin(t * 1.5) * 0.03;
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.4}>
      {/* Inner crystal wireframe — neon purple */}
      <mesh ref={innerRef}>
        <icosahedronGeometry args={[0.55, 1]} />
        <meshBasicMaterial
          color="#a855f7"
          wireframe
          transparent
          opacity={0.6}
        />
      </mesh>

      {/* Outer crystal wireframe — cyan, counter-rotating */}
      <mesh ref={outerRef} scale={1.15}>
        <octahedronGeometry args={[0.55, 0]} />
        <meshBasicMaterial
          color="#22d3ee"
          wireframe
          transparent
          opacity={0.35}
        />
      </mesh>

      {/* Pulsing glow core */}
      <mesh ref={glowRef} scale={0.8}>
        <sphereGeometry args={[0.55, 16, 16]} />
        <meshBasicMaterial
          color="#a855f7"
          transparent
          opacity={0.06}
        />
      </mesh>
    </Float>
  );
}

function CosmicScene({ onHover }: { onHover: (label: string | null) => void }) {
  return (
    <group>
      <ambientLight intensity={0.25} />
      <pointLight position={[5, 5, 5]} intensity={0.6} color="#a855f7" />
      <pointLight position={[-5, -5, 3]} intensity={0.4} color="#22d3ee" />
      <pointLight position={[0, 0, 5]} intensity={0.3} color="#ec4899" />

      <Stars radius={50} depth={50} count={1200} factor={4} saturation={0} fade speed={1} />

      <CentralCrystal />
      <HubConnectors />

      {NODES.map((node) => (
        <GlowNode key={node.label} node={node} onHover={onHover} />
      ))}

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.8}
      />
    </group>
  );
}

export default function CosmicCanvas() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  return (
    <div className="relative h-full w-full">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <CosmicScene onHover={setHoveredNode} />
        </Suspense>
      </Canvas>
      {hoveredNode && (
        <div className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full glass px-4 py-1.5 text-sm font-medium text-white/80">
          {hoveredNode} — click to explore
        </div>
      )}
    </div>
  );
}
