import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Check WebGL availability
    const isWebGLAvailable = () => {
      try {
        const canvas = document.createElement('canvas');
        return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
      } catch (e) {
        return false;
      }
    };

    if (!isWebGLAvailable()) return;

    // Scene & Camera - Isometric cinematic angle
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x060709, 0.028);

    const camera = new THREE.PerspectiveCamera(
      45,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    // Positioned at an elegant isometric elevation
    camera.position.set(0, 10, 22);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    mount.appendChild(renderer.domElement);

    // Studio Lighting: Restrained, luxury lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.45);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xE2E8F0, 1.8);
    mainLight.position.set(10, 25, 15);
    scene.add(mainLight);

    const cyanRimLight = new THREE.DirectionalLight(0x38BDF8, 2.5);
    cyanRimLight.position.set(-15, 8, -5);
    scene.add(cyanRimLight);

    const subtleFillLight = new THREE.DirectionalLight(0x6366F1, 1.2);
    subtleFillLight.position.set(0, -10, 10);
    scene.add(subtleFillLight);

    // 1. ISOMETRIC ARCHITECTURAL GRID FLOOR (Inspired by Merouane Bali reference)
    const gridGroup = new THREE.Group();
    scene.add(gridGroup);
    gridGroup.position.y = -4.5;
    gridGroup.rotation.x = -Math.PI / 2;

    const gridSize = 50;
    const gridDivisions = 35;
    const gridHelper = new THREE.GridHelper(gridSize, gridDivisions, 0x1E293B, 0x0F172A);
    gridHelper.rotation.x = Math.PI / 2;
    gridGroup.add(gridHelper);

    // Dotted Matrix intersections on floor
    const dotCount = 400;
    const dotPositions = new Float32Array(dotCount * 3);
    let dotIdx = 0;
    const step = gridSize / gridDivisions;
    for (let x = -gridSize / 2; x <= gridSize / 2; x += step * 2) {
      for (let y = -gridSize / 2; y <= gridSize / 2; y += step * 2) {
        if (dotIdx < dotCount * 3) {
          dotPositions[dotIdx] = x;
          dotPositions[dotIdx + 1] = y;
          dotPositions[dotIdx + 2] = 0.05;
          dotIdx += 3;
        }
      }
    }
    const dotGeo = new THREE.BufferGeometry();
    dotGeo.setAttribute('position', new THREE.BufferAttribute(dotPositions, 3));
    const dotMat = new THREE.PointsMaterial({
      size: 0.12,
      color: 0x38BDF8,
      transparent: true,
      opacity: 0.35,
    });
    const floorDots = new THREE.Points(dotGeo, dotMat);
    gridGroup.add(floorDots);

    // 2. CONNECTED CIRCUIT BUS LINES (Connecting central node to peripheral points)
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x38BDF8,
      transparent: true,
      opacity: 0.5,
    });

    const createCircuitPath = (x1, y1, x2, y2) => {
      const midX = (x1 + x2) / 2;
      const points = [
        new THREE.Vector3(x1, y1, 0.1),
        new THREE.Vector3(midX, y1, 0.1),
        new THREE.Vector3(midX, y2, 0.1),
        new THREE.Vector3(x2, y2, 0.1),
      ];
      const geo = new THREE.BufferGeometry().setFromPoints(points);
      return new THREE.Line(geo, lineMat);
    };

    gridGroup.add(createCircuitPath(0, 0, 14, 12));
    gridGroup.add(createCircuitPath(0, 0, -14, 12));
    gridGroup.add(createCircuitPath(0, 0, 15, -12));
    gridGroup.add(createCircuitPath(0, 0, -15, -12));
    gridGroup.add(createCircuitPath(0, 0, 0, 16));
    gridGroup.add(createCircuitPath(0, 0, 0, -16));

    // Peripheral Node Terminals
    const nodeGeo = new THREE.BoxGeometry(0.8, 0.8, 0.2);
    const nodeMat = new THREE.MeshStandardMaterial({
      color: 0x0F172A,
      metalness: 0.9,
      roughness: 0.2,
    });
    const nodeGlowMat = new THREE.MeshBasicMaterial({
      color: 0x38BDF8,
      wireframe: true,
    });

    const addTerminalNode = (x, y) => {
      const node = new THREE.Mesh(nodeGeo, nodeMat);
      node.position.set(x, y, 0.15);
      const glow = new THREE.Mesh(nodeGeo, glowMat);
      glow.scale.setScalar(1.1);
      node.add(glow);
      gridGroup.add(node);
    };

    const glowMat = new THREE.MeshBasicMaterial({ color: 0x38BDF8, wireframe: true });
    addTerminalNode(14, 12);
    addTerminalNode(-14, 12);
    addTerminalNode(15, -12);
    addTerminalNode(-15, -12);

    // 3. CENTRAL PLATFORM (Pedestal)
    const baseGeo = new THREE.BoxGeometry(3.5, 3.5, 0.4);
    const baseMat = new THREE.MeshStandardMaterial({
      color: 0x0B0F19,
      metalness: 0.8,
      roughness: 0.25,
    });
    const centralBase = new THREE.Mesh(baseGeo, baseMat);
    centralBase.position.set(0, 0, 0.2);
    gridGroup.add(centralBase);

    // Glowing rim around central base
    const rimGeo = new THREE.BoxGeometry(3.7, 3.7, 0.05);
    const rimMat = new THREE.MeshBasicMaterial({
      color: 0x38BDF8,
      transparent: true,
      opacity: 0.7,
    });
    const centralRim = new THREE.Mesh(rimGeo, rimMat);
    centralRim.position.set(0, 0, 0.45);
    gridGroup.add(centralRim);

    // 4. FLOATING SILVER & GLASS 3D CORE (Sculpture with restrained, calm rotation)
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);
    coreGroup.position.set(0, 0.8, 0);

    // Silver Brushed Icosahedron
    const coreGeo = new THREE.IcosahedronGeometry(2.4, 1);
    const coreMat = new THREE.MeshPhysicalMaterial({
      color: 0x1A202C,
      metalness: 0.9,
      roughness: 0.15,
      clearcoat: 1.0,
      clearcoatRoughness: 0.08,
      reflectivity: 0.95,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    coreGroup.add(coreMesh);

    // Subtle Electric Blue Inner Wireframe Cage
    const wireGeo = new THREE.IcosahedronGeometry(2.65, 1);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x38BDF8,
      wireframe: true,
      transparent: true,
      opacity: 0.28,
    });
    const wireMesh = new THREE.Mesh(wireGeo, wireMat);
    coreGroup.add(wireMesh);

    // Concentric Glass / Silver Orbital Ring
    const ringGeo = new THREE.TorusGeometry(3.8, 0.025, 16, 100);
    const ringMat = new THREE.MeshStandardMaterial({
      color: 0xE2E8F0,
      metalness: 0.95,
      roughness: 0.2,
    });
    const ring1 = new THREE.Mesh(ringGeo, ringMat);
    ring1.rotation.x = Math.PI / 2.8;
    coreGroup.add(ring1);

    const ring2 = new THREE.Mesh(ringGeo, ringMat);
    ring2.rotation.y = Math.PI / 3;
    ring2.scale.setScalar(1.15);
    coreGroup.add(ring2);

    // Minimal floating stardust
    const dustCount = 280;
    const dustPositions = new Float32Array(dustCount * 3);
    for (let i = 0; i < dustCount * 3; i += 3) {
      dustPositions[i] = (Math.random() - 0.5) * 40;
      dustPositions[i + 1] = Math.random() * 25 - 2;
      dustPositions[i + 2] = (Math.random() - 0.5) * 30;
    }
    const dustGeo = new THREE.BufferGeometry();
    dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3));
    const dustMat = new THREE.PointsMaterial({
      size: 0.07,
      color: 0xE2E8F0,
      transparent: true,
      opacity: 0.35,
    });
    const dustField = new THREE.Points(dustGeo, dustMat);
    scene.add(dustField);

    // Restrained, Calm Mouse & Scroll Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;
    let scrollY = 0;
    let targetScrollY = 0;

    const handleMouseMove = (e) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 0.8;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 0.8;
    };

    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      targetScrollY = maxScroll > 0 ? (window.scrollY / maxScroll) * 12 : 0;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    const handleResize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop: Restrained, smooth, deliberate motion (not fast spinning)
    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Smooth lag interpolation
      mouseX += (targetMouseX - mouseX) * 0.04;
      mouseY += (targetMouseY - mouseY) * 0.04;
      scrollY += (targetScrollY - scrollY) * 0.04;

      // Deliberate, calm rotation of the sculpture
      coreMesh.rotation.y = elapsed * 0.08;
      coreMesh.rotation.x = Math.sin(elapsed * 0.1) * 0.1;

      wireMesh.rotation.y = -elapsed * 0.06;
      wireMesh.rotation.z = elapsed * 0.04;

      ring1.rotation.z = elapsed * 0.05;
      ring2.rotation.x = Math.PI / 3 + elapsed * 0.04;

      // Subtle breathing levitation
      coreGroup.position.y = 0.8 + Math.sin(elapsed * 0.8) * 0.25 - (scrollY * 0.3);

      // Camera parallax responding with high restraint
      camera.position.x = mouseX * 2.5;
      camera.position.y = 10 - (mouseY * 1.5) - (scrollY * 0.2);
      camera.lookAt(0, -scrollY * 0.2, 0);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (mount && renderer.domElement) {
        mount.removeChild(renderer.domElement);
      }
      coreGeo.dispose();
      coreMat.dispose();
      wireGeo.dispose();
      wireMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      gridHelper.dispose();
      dotGeo.dispose();
      dotMat.dispose();
      lineMat.dispose();
      dustGeo.dispose();
      dustMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none select-none z-0 overflow-hidden">
      <div ref={mountRef} className="w-full h-full opacity-85" />
      {/* Subtle vignette gradient fade for readable typography */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#060709]/70 via-transparent to-[#060709] pointer-events-none" />
    </div>
  );
}
