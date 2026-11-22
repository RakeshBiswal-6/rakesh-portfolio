import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Hero3DCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // SCENE, CAMERA, RENDERER
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      55,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 18;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentMount.appendChild(renderer.domElement);

    // PARTICLES GEOMETRY
    const particlesCount = 3800;
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);

    const cyanColor = new THREE.Color('#00F5FF');
    const magentaColor = new THREE.Color('#FF007F');
    const purpleColor = new THREE.Color('#8B5CF6');

    const radius = 7.5;

    for (let i = 0; i < particlesCount; i++) {
      // Fibonacci sphere distribution for uniform organic particle sphere
      const phi = Math.acos(1 - 2 * (i + 0.5) / particlesCount);
      const theta = Math.PI * (1 + Math.sqrt(5)) * (i + 0.5);

      // Add dynamic noise perturbation
      const r = radius + (Math.random() - 0.5) * 1.8;
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // Color gradient: blend cyan, purple, and magenta based on position
      const mixRatio = (y + radius) / (2 * radius);
      const particleColor = new THREE.Color();
      if (mixRatio < 0.5) {
        particleColor.lerpColors(cyanColor, purpleColor, mixRatio * 2);
      } else {
        particleColor.lerpColors(purpleColor, magentaColor, (mixRatio - 0.5) * 2);
      }

      colors[i * 3] = particleColor.r;
      colors[i * 3 + 1] = particleColor.g;
      colors[i * 3 + 2] = particleColor.b;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Custom Canvas Texture for glowing circular particles
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
    gradient.addColorStop(0.3, 'rgba(255, 255, 255, 0.8)');
    gradient.addColorStop(0.6, 'rgba(0, 245, 255, 0.4)');
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 64, 64);

    const texture = new THREE.CanvasTexture(canvas);

    const material = new THREE.PointsMaterial({
      size: 0.22,
      vertexColors: true,
      map: texture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // OUTER AMBIENT DUST
    const dustCount = 800;
    const dustPositions = new Float32Array(dustCount * 3);
    for (let i = 0; i < dustCount * 3; i += 3) {
      dustPositions[i] = (Math.random() - 0.5) * 45;
      dustPositions[i + 1] = (Math.random() - 0.5) * 45;
      dustPositions[i + 2] = (Math.random() - 0.5) * 30;
    }
    const dustGeometry = new THREE.BufferGeometry();
    dustGeometry.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3));
    const dustMaterial = new THREE.PointsMaterial({
      size: 0.12,
      color: 0x00f5ff,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending,
    });
    const dust = new THREE.Points(dustGeometry, dustMaterial);
    scene.add(dust);

    // MOUSE PARALLAX TRACKING
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handlePointerMove = (e) => {
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      mouseX = (e.clientX - windowHalfX) * 0.0012;
      mouseY = (e.clientY - windowHalfY) * 0.0012;
    };

    window.addEventListener('pointermove', handlePointerMove);

    // RESIZE LISTENER
    const handleResize = () => {
      if (!currentMount) return;
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // ANIMATION LOOP
    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth camera / object interpolation
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      // Base auto rotation + mouse interaction
      particles.rotation.y = elapsedTime * 0.12 + targetX * 2;
      particles.rotation.x = Math.sin(elapsedTime * 0.1) * 0.2 + targetY * 1.5;
      particles.rotation.z = elapsedTime * 0.05;

      dust.rotation.y = elapsedTime * 0.03;
      dust.rotation.x = elapsedTime * 0.02;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      texture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
      <div ref={mountRef} className="w-full h-full opacity-90" />
      {/* Subtle vignette shadow overlay */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#030712]/40 to-[#030712] pointer-events-none" />
    </div>
  );
}
