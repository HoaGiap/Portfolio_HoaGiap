import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Rotate3d, Sparkles } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export const Hero3DCanvas: React.FC = () => {
  const { theme } = useTheme();
  const mountRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const previousMousePositionRef = useRef({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const outerMatRef = useRef<THREE.MeshBasicMaterial | null>(null);
  const innerMatRef = useRef<THREE.MeshBasicMaterial | null>(null);
  const centerMatRef = useRef<THREE.MeshBasicMaterial | null>(null);
  const ringMatRef = useRef<THREE.MeshBasicMaterial | null>(null);

  // Update materials when theme changes
  useEffect(() => {
    if (!outerMatRef.current || !innerMatRef.current || !centerMatRef.current || !ringMatRef.current) return;

    if (theme === 'cobalt') {
      outerMatRef.current.color.setHex(0xffffff);
      innerMatRef.current.color.setHex(0xa5c4ff);
      centerMatRef.current.color.setHex(0xffffff);
      ringMatRef.current.color.setHex(0xffffff);
    } else if (theme === 'light') {
      outerMatRef.current.color.setHex(0x0000f2);
      innerMatRef.current.color.setHex(0x000091);
      centerMatRef.current.color.setHex(0x0000f2);
      ringMatRef.current.color.setHex(0x0000f2);
    } else {
      outerMatRef.current.color.setHex(0x0000f2);
      innerMatRef.current.color.setHex(0x000091);
      centerMatRef.current.color.setHex(0xffffff);
      ringMatRef.current.color.setHex(0x0000f2);
    }
  }, [theme]);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth || 400;
    const height = mount.clientHeight || 360;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 6.2;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // Initial color setup
    const isCobalt = theme === 'cobalt';
    const isLight = theme === 'light';

    // 1. Hermes Agent Electric Blue Hyper-Polyhedron
    const outerGeo = new THREE.IcosahedronGeometry(1.6, 1);
    const outerMat = new THREE.MeshBasicMaterial({
      color: isCobalt ? 0xffffff : 0x0000f2,
      wireframe: true,
      transparent: true,
      opacity: 0.85,
    });
    outerMatRef.current = outerMat;
    const outerMesh = new THREE.Mesh(outerGeo, outerMat);
    masterGroup.add(outerMesh);

    // 2. Inner Mathematical Dual Core (Octahedron)
    const innerGeo = new THREE.OctahedronGeometry(1.0, 0);
    const innerMat = new THREE.MeshBasicMaterial({
      color: isCobalt ? 0xa5c4ff : 0x000091,
      wireframe: true,
      transparent: true,
      opacity: 0.6,
    });
    innerMatRef.current = innerMat;
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    masterGroup.add(innerMesh);

    // 3. Central Energy Node
    const centerGeo = new THREE.SphereGeometry(0.35, 16, 16);
    const centerMat = new THREE.MeshBasicMaterial({
      color: isLight ? 0x0000f2 : 0xffffff,
    });
    centerMatRef.current = centerMat;
    const centerMesh = new THREE.Mesh(centerGeo, centerMat);
    masterGroup.add(centerMesh);

    // 4. Mathematical Coordinate Ring (Wireframe Torus)
    const ringGeo = new THREE.TorusGeometry(2.4, 0.015, 16, 80);
    const ringMat = new THREE.MeshBasicMaterial({
      color: isCobalt ? 0xffffff : 0x0000f2,
      transparent: true,
      opacity: 0.5,
    });
    ringMatRef.current = ringMat;
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2.5;
    masterGroup.add(ring);

    // 5. Tech Satellites
    const satGroup = new THREE.Group();
    const satCount = 4;
    const satellites: THREE.Mesh[] = [];

    for (let i = 0; i < satCount; i++) {
      const satGeo = new THREE.BoxGeometry(0.12, 0.12, 0.12);
      const satMat = new THREE.MeshBasicMaterial({
        color: i % 2 === 0 ? (isCobalt ? 0xffffff : 0x0000f2) : 0xffffff,
      });
      const satellite = new THREE.Mesh(satGeo, satMat);
      satellites.push(satellite);
      satGroup.add(satellite);
    }
    masterGroup.add(satGroup);

    // Mouse / Touch Drag to Rotate
    const onMouseDown = (e: MouseEvent) => {
      isDraggingRef.current = true;
      previousMousePositionRef.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current) return;
      const deltaX = e.clientX - previousMousePositionRef.current.x;
      const deltaY = e.clientY - previousMousePositionRef.current.y;

      masterGroup.rotation.y += deltaX * 0.008;
      masterGroup.rotation.x += deltaY * 0.008;

      previousMousePositionRef.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDraggingRef.current = false;
    };

    const dom = renderer.domElement;
    dom.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    // Touch events for Mobile
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDraggingRef.current = true;
        previousMousePositionRef.current = {
          x: e.touches[0].clientX,
          y: e.touches[0].clientY,
        };
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDraggingRef.current || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - previousMousePositionRef.current.x;
      const deltaY = e.touches[0].clientY - previousMousePositionRef.current.y;

      masterGroup.rotation.y += deltaX * 0.008;
      masterGroup.rotation.x += deltaY * 0.008;

      previousMousePositionRef.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      };
    };

    const onTouchEnd = () => {
      isDraggingRef.current = false;
    };

    dom.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);

    const handleResize = () => {
      if (!mount) return;
      const newWidth = mount.clientWidth;
      const newHeight = mount.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      const t = clock.getElapsedTime();

      if (!isDraggingRef.current) {
        masterGroup.rotation.y += 0.005;
        outerMesh.rotation.x += 0.004;
        innerMesh.rotation.y -= 0.006;
      }

      ring.rotation.z = t * 0.3;

      satellites.forEach((sat, idx) => {
        const angle = t * 0.7 + (idx * Math.PI * 2) / satCount;
        const radius = 2.4;
        sat.position.x = Math.cos(angle) * radius;
        sat.position.z = Math.sin(angle) * radius;
        sat.position.y = Math.sin(angle * 2) * 0.4;
        sat.rotation.x += 0.02;
        sat.rotation.y += 0.02;
      });

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      dom.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      dom.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('resize', handleResize);
      if (mount && dom) {
        mount.removeChild(dom);
      }
      outerGeo.dispose();
      outerMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      centerGeo.dispose();
      centerMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      renderer.dispose();
    };
  }, []);

  const badgeThemeClasses = {
    dark: 'bg-[#101010] border-[#0000F2]/50 text-[#F2F2F2]',
    cobalt: 'bg-[#000091] border-white/50 text-white',
    light: 'bg-white border-[#0000F2]/50 text-[#0000F2]',
  };

  const hintThemeClasses = {
    dark: 'bg-[#101010] border-[#0000F2]/40 text-[#8e8e8e]',
    cobalt: 'bg-[#000091] border-white/40 text-white/80',
    light: 'bg-white border-[#0000F2]/40 text-[#0000F2]/80',
  };

  return (
    <div
      className="relative w-full h-[360px] sm:h-[400px] flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div ref={mountRef} className="w-full h-full" />

      {/* Technical Hermes Badge */}
      <div
        className={`absolute top-4 left-5 flex items-center gap-2 px-3 py-1 rounded-none border text-xs font-mono pointer-events-none transition-all ${badgeThemeClasses[theme]}`}
      >
        <Sparkles className="w-3.5 h-3.5" />
        <span>[ 3D_NEURAL_CORE // NOUS_SPEC ]</span>
      </div>

      {/* Technical Status Hint */}
      <div
        className={`absolute bottom-4 right-5 flex items-center gap-1.5 px-3 py-1 rounded-none border text-[11px] font-mono pointer-events-none transition-all duration-200 ${
          hintThemeClasses[theme]
        } ${isHovered ? 'opacity-100' : 'opacity-70'}`}
      >
        <Rotate3d className="w-3.5 h-3.5" />
        <span>[ DRAG_ROTATE // 360° ]</span>
      </div>
    </div>
  );
};
