'use client';

import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

// Animated 3D geometric shape
function AnimatedShape() {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.001;
      meshRef.current.rotation.y += 0.002;
      meshRef.current.rotation.z += 0.001;
      
      // Subtle floating animation
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Main icosahedron */}
      <mesh position={[0, 0, 0]}>
        <icosahedronGeometry args={[1.5, 4]} />
        <meshPhongMaterial
          color="#6366f1"
          emissive="#4f46e5"
          shininess={100}
          wireframe={false}
        />
      </mesh>

      {/* Surrounding particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <mesh key={i} position={[
          Math.cos((i / 20) * Math.PI * 2) * 3,
          Math.sin((i / 20) * Math.PI * 2) * 3,
          Math.cos((i / 20) * Math.PI * 2) * 2,
        ]}>
          <sphereGeometry args={[0.1, 8, 8]} />
          <meshPhongMaterial color="#818cf8" emissive="#6366f1" />
        </mesh>
      ))}
    </group>
  );
}

export function Hero3D() {
  return (
    <div className="relative w-full h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <Canvas className="absolute inset-0">
        <PerspectiveCamera makeDefault position={[0, 0, 4]} />
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <pointLight position={[-10, -10, 10]} intensity={0.4} color="#6366f1" />
        
        <AnimatedShape />
        
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>

      {/* Content overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white z-10">
          <h1 className="text-6xl md:text-7xl font-bold mb-4">
            Aseem Pudasaini
          </h1>
          <p className="text-xl md:text-2xl text-indigo-300 mb-8">
            UI/UX Designer & Front-end Engineer
          </p>
          <p className="text-gray-400 max-w-md mx-auto mb-12">
            Crafting intuitive digital experiences with design thinking
          </p>
          <div className="flex gap-4 justify-center">
            <button className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg transition text-white font-semibold">
              View My Work
            </button>
            <button className="px-8 py-3 border-2 border-indigo-400 hover:bg-indigo-400/10 rounded-lg transition text-white font-semibold">
              Get in Touch
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white opacity-60 animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
}
