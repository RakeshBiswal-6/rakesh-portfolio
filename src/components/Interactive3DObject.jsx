import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Interactive3DObject({ shape = 'icosahedron', color = 0x38BDF8, size = 1.2 }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.z = 3.6;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(color, 2.5);
    dirLight1.position.set(5, 5, 4);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xE2E8F0, 1.5);
    dirLight2.position.set(-5, -5, 2);
    scene.add(dirLight2);

    // Geometries
    let geometry;
    switch (shape) {
      case 'octahedron':
        geometry = new THREE.OctahedronGeometry(size, 0);
        break;
      case 'torus':
        geometry = new THREE.TorusGeometry(size * 0.75, 0.28, 16, 60);
        break;
      case 'box':
        geometry = new THREE.BoxGeometry(size * 1.1, size * 1.1, size * 1.1);
        break;
      case 'icosahedron':
      default:
        geometry = new THREE.IcosahedronGeometry(size, 0);
        break;
    }

    const material = new THREE.MeshStandardMaterial({
      color: 0x1A1E27,
      metalness: 0.85,
      roughness: 0.2,
      wireframe: false,
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Wireframe overlay
    const wireMat = new THREE.MeshBasicMaterial({
      color: color,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const wireMesh = new THREE.Mesh(geometry, wireMat);
    wireMesh.scale.setScalar(1.02);
    scene.add(wireMesh);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    const handleMove = (e) => {
      const rect = mount.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX = x * 2;
      mouseY = y * 2;
    };

    mount.addEventListener('mousemove', handleMove);

    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      mesh.rotation.y = elapsed * 0.8 + mouseX;
      mesh.rotation.x = elapsed * 0.5 + mouseY;
      wireMesh.rotation.y = mesh.rotation.y;
      wireMesh.rotation.x = mesh.rotation.x;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      mount.removeEventListener('mousemove', handleMove);
      cancelAnimationFrame(animationFrameId);
      if (mount && renderer.domElement) {
        mount.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      wireMat.dispose();
      renderer.dispose();
    };
  }, [shape, color, size]);

  return (
    <div
      ref={mountRef}
      className="w-full h-full flex items-center justify-center select-none cursor-grab active:cursor-grabbing"
    />
  );
}
