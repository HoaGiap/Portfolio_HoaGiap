import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useTheme } from '../../context/ThemeContext';

export const ThreeBackground: React.FC = () => {
  const { theme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const colorsRef = useRef<Float32Array | null>(null);
  const geometryRef = useRef<THREE.BufferGeometry | null>(null);

  // Update particle colors when theme changes
  useEffect(() => {
    if (!colorsRef.current || !geometryRef.current) return;
    const colors = colorsRef.current;
    const particleCount = colors.length / 3;

    let col1: THREE.Color;
    let col2: THREE.Color;

    if (theme === 'cobalt') {
      col1 = new THREE.Color(0xffffff);
      col2 = new THREE.Color(0xa5c4ff);
    } else if (theme === 'light') {
      col1 = new THREE.Color(0x0000f2);
      col2 = new THREE.Color(0x000091);
    } else {
      col1 = new THREE.Color(0x0000f2);
      col2 = new THREE.Color(0x000091);
    }

    for (let i = 0; i < particleCount; i++) {
      const chosen = Math.random() > 0.4 ? col1 : col2;
      colors[i * 3] = chosen.r;
      colors[i * 3 + 1] = chosen.g;
      colors[i * 3 + 2] = chosen.b;
    }
    geometryRef.current.attributes.color.needsUpdate = true;
  }, [theme]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    camera.position.z = 320;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Hermes Agent Mathematical Coordinate Lattice
    const particleCount = window.innerWidth < 768 ? 60 : 110;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    colorsRef.current = colors;
    const originalPositions: { x: number; y: number; z: number; speed: number }[] = [];

    const cobaltBlue = new THREE.Color(0x0000f2);
    const ultramarine = new THREE.Color(0x000091);

    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * 550;
      const y = (Math.random() - 0.5) * 380;
      const z = (Math.random() - 0.5) * 220;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      originalPositions.push({
        x,
        y,
        z,
        speed: 0.15 + Math.random() * 0.35,
      });

      const chosenColor = Math.random() > 0.4 ? cobaltBlue : ultramarine;
      colors[i * 3] = chosenColor.r;
      colors[i * 3 + 1] = chosenColor.g;
      colors[i * 3 + 2] = chosenColor.b;
    }

    const geometry = new THREE.BufferGeometry();
    geometryRef.current = geometry;
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Sharp crosshair particle texture
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(14, 0, 4, 32);
      ctx.fillRect(0, 14, 32, 4);
      ctx.fillStyle = '#0000F2';
      ctx.fillRect(14, 14, 4, 4);
    }
    const texture = new THREE.CanvasTexture(canvas);

    const material = new THREE.PointsMaterial({
      size: 5,
      map: texture,
      transparent: true,
      opacity: 0.45,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Mouse Tracking for subtle camera parallax
    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current.targetX = (event.clientX / window.innerWidth - 0.5) * 40;
      mouseRef.current.targetY = -(event.clientY / window.innerHeight - 0.5) * 40;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    let animationFrameId: number;
    let isRunning = true;
    const clock = new THREE.Clock();

    const animate = () => {
      if (!isRunning) return;

      const elapsedTime = clock.getElapsedTime();

      // Camera lerp
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;
      camera.position.x = mouseRef.current.x;
      camera.position.y = mouseRef.current.y;
      camera.lookAt(scene.position);

      const pos = geometry.attributes.position.array as Float32Array;

      // Coordinate shift
      for (let i = 0; i < particleCount; i++) {
        const orig = originalPositions[i];
        pos[i * 3 + 1] = orig.y + Math.sin(elapsedTime * orig.speed + i) * 8;
        pos[i * 3] = orig.x + Math.cos(elapsedTime * (orig.speed * 0.6) + i) * 6;
      }
      geometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleVisibilityChange = () => {
      if (document.hidden) {
        isRunning = false;
        cancelAnimationFrame(animationFrameId);
      } else {
        isRunning = true;
        animate();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      isRunning = false;
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      texture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 pointer-events-none -z-10 overflow-hidden transition-opacity duration-300 ${
        theme === 'cobalt' ? 'opacity-75' : theme === 'light' ? 'opacity-35' : 'opacity-60'
      }`}
    />
  );
};
