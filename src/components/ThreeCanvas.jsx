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

    // Scene & Camera
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x08090C, 0.035);

    const camera = new THREE.PerspectiveCamera(
      45,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 16);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    mount.appendChild(renderer.domElement);

    // Cinematic Lighting (Luxury palette: Soft electric blue, subtle violet, clean white)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const blueLight = new THREE.DirectionalLight(0x38BDF8, 2.2);
    blueLight.position.set(12, 12, 10);
    scene.add(blueLight);

    const violetLight = new THREE.DirectionalLight(0x818CF8, 1.8);
    violetLight.position.set(-12, -8, 8);
    scene.add(violetLight);

    const topWhiteLight = new THREE.PointLight(0xffffff, 1.5, 40);
    topWhiteLight.position.set(0, 15, 5);
    scene.add(topWhiteLight);

    // Central Hero 3D Sculpture: Refined Metallic Glass Icosahedron & Orbiting Rings
    const sculptureGroup = new THREE.Group();
    scene.add(sculptureGroup);

    // Core Gem Geometry
    const coreGeometry = new THREE.IcosahedronGeometry(3.6, 1);
    const coreMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x131620,
      metalness: 0.85,
      roughness: 0.18,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      wireframe: false,
      reflectivity: 0.9,
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    sculptureGroup.add(coreMesh);

    // Wireframe Outer Cage for intricate architectural depth
    const wireframeGeometry = new THREE.IcosahedronGeometry(4.1, 1);
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x38BDF8,
      wireframe: true,
      transparent: true,
      opacity: 0.22,
    });
    const wireframeMesh = new THREE.Mesh(wireframeGeometry, wireframeMaterial);
    sculptureGroup.add(wireframeMesh);

    // Concentric Gyro Rings
    const ring1Geo = new THREE.TorusGeometry(5.2, 0.04, 16, 120);
    const ringMat1 = new THREE.MeshStandardMaterial({
      color: 0xE2E8F0,
      metalness: 0.95,
      roughness: 0.2,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    sculptureGroup.add(ring1);

    const ring2Geo = new THREE.TorusGeometry(6.0, 0.03, 16, 120);
    const ringMat2 = new THREE.MeshStandardMaterial({
      color: 0x818CF8,
      metalness: 0.9,
      roughness: 0.3,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ringMat2);
    ring2.rotation.y = Math.PI / 4;
    sculptureGroup.add(ring2);

    // Floating Geometric Field (3D elements throughout the space)
    const floatingGroup = new THREE.Group();
    scene.add(floatingGroup);

    const geometries = [
      new THREE.OctahedronGeometry(0.8, 0),
      new THREE.TetrahedronGeometry(0.7, 0),
      new THREE.IcosahedronGeometry(0.6, 0),
      new THREE.BoxGeometry(0.7, 0.7, 0.7),
    ];

    const floatMaterials = [
      new THREE.MeshStandardMaterial({ color: 0x1E222D, metalness: 0.8, roughness: 0.2 }),
      new THREE.MeshStandardMaterial({ color: 0x38BDF8, metalness: 0.9, roughness: 0.1, wireframe: true }),
      new THREE.MeshStandardMaterial({ color: 0xE2E8F0, metalness: 0.7, roughness: 0.3 }),
      new THREE.MeshStandardMaterial({ color: 0x818CF8, metalness: 0.85, roughness: 0.2, wireframe: true }),
    ];

    const floatingObjects = [];
    for (let i = 0; i < 35; i++) {
      const geo = geometries[i % geometries.length];
      const mat = floatMaterials[i % floatMaterials.length];
      const mesh = new THREE.Mesh(geo, mat);

      // Spread along the deep vertical viewport
      mesh.position.set(
        (Math.random() - 0.5) * 36,
        (Math.random() - 0.5) * 45,
        (Math.random() - 0.5) * 20 - 5
      );

      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );

      floatingGroup.add(mesh);
      floatingObjects.push({
        mesh,
        rotSpeedX: (Math.random() - 0.5) * 0.015,
        rotSpeedY: (Math.random() - 0.5) * 0.015,
        initialY: mesh.position.y,
        floatSpeed: 0.5 + Math.random() * 0.8,
      });
    }

    // Subtle Particle Stardust
    const starsCount = 700;
    const starPositions = new Float32Array(starsCount * 3);
    for (let i = 0; i < starsCount * 3; i += 3) {
      starPositions[i] = (Math.random() - 0.5) * 50;
      starPositions[i + 1] = (Math.random() - 0.5) * 60;
      starPositions[i + 2] = (Math.random() - 0.5) * 30 - 8;
    }
    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    const starMat = new THREE.PointsMaterial({
      size: 0.08,
      color: 0xE2E8F0,
      transparent: true,
      opacity: 0.45,
    });
    const starField = new THREE.Points(starGeo, starMat);
    scene.add(starField);

    // Mouse & Scroll Tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;
    let scrollY = 0;
    let targetScrollY = 0;

    const handleMouseMove = (e) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 1.5;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 1.5;
    };

    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      targetScrollY = maxScroll > 0 ? (window.scrollY / maxScroll) * 35 : 0;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Window Resize
    const handleResize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Smooth interpolation
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;
      scrollY += (targetScrollY - scrollY) * 0.05;

      // Sculpture Rotation
      coreMesh.rotation.y = elapsed * 0.15;
      coreMesh.rotation.x = Math.sin(elapsed * 0.2) * 0.2;

      wireframeMesh.rotation.y = -elapsed * 0.12;
      wireframeMesh.rotation.z = elapsed * 0.08;

      ring1.rotation.x = Math.PI / 3 + elapsed * 0.25;
      ring1.rotation.y = elapsed * 0.15;

      ring2.rotation.y = Math.PI / 4 - elapsed * 0.2;
      ring2.rotation.z = elapsed * 0.1;

      // Parallax interaction with mouse
      sculptureGroup.position.x = mouseX * 2.2;
      sculptureGroup.position.y = -mouseY * 2.2 - (scrollY * 0.4);
      sculptureGroup.rotation.y = mouseX * 0.8;
      sculptureGroup.rotation.x = mouseY * 0.8;

      // Floating items animation
      floatingObjects.forEach((item) => {
        item.mesh.rotation.x += item.rotSpeedX;
        item.mesh.rotation.y += item.rotSpeedY;
        item.mesh.position.y = item.initialY + Math.sin(elapsed * item.floatSpeed) * 0.6;
      });

      // Camera responds to scroll depth
      camera.position.y = -scrollY * 0.25;

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
      coreGeometry.dispose();
      coreMaterial.dispose();
      wireframeGeometry.dispose();
      wireframeMaterial.dispose();
      ring1Geo.dispose();
      ringMat1.dispose();
      ring2Geo.dispose();
      ringMat2.dispose();
      starGeo.dispose();
      starMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none select-none z-0 overflow-hidden">
      <div ref={mountRef} className="w-full h-full opacity-80" />
      {/* Cinematic Dark Vignette overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#08090C]/60 via-transparent to-[#08090C] pointer-events-none" />
    </div>
  );
}
