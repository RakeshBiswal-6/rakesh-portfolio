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

    // 1. SCENE & CAMERA
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x05060A, 0.022);

    const camera = new THREE.PerspectiveCamera(
      45,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 14);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    mount.appendChild(renderer.domElement);

    // 2. STUDIO LIGHTING
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const purpleLight = new THREE.DirectionalLight(0xA855F7, 2.2);
    purpleLight.position.set(8, 12, 10);
    scene.add(purpleLight);

    const blueLight = new THREE.DirectionalLight(0x38BDF8, 1.8);
    blueLight.position.set(-10, 6, 8);
    scene.add(blueLight);

    const topLight = new THREE.DirectionalLight(0xE2E8F0, 1.4);
    topLight.position.set(0, 20, 10);
    scene.add(topLight);

    // =========================================================================
    // ENVIRONMENT 0: 3D DEVELOPER WORKSTATION & FLOWING CONTOURS (Hero, Y = 0)
    // =========================================================================
    const heroEnv = new THREE.Group();
    heroEnv.position.set(0, -1.8, 0);
    scene.add(heroEnv);

    // A. Computer Desk (Modern dark wood & beveled frame)
    const deskGeo = new THREE.BoxGeometry(11.5, 0.35, 4.5);
    const deskMat = new THREE.MeshStandardMaterial({
      color: 0x0F1118,
      metalness: 0.85,
      roughness: 0.3,
    });
    const desk = new THREE.Mesh(deskGeo, deskMat);
    desk.position.set(0, -0.6, -0.5);
    heroEnv.add(desk);

    // Desk Legs
    const legGeo = new THREE.BoxGeometry(0.3, 4.2, 3.8);
    const legMat = new THREE.MeshStandardMaterial({ color: 0x080A10, metalness: 0.9, roughness: 0.2 });
    const legL = new THREE.Mesh(legGeo, legMat);
    legL.position.set(-5.2, -2.8, -0.5);
    heroEnv.add(legL);
    const legR = new THREE.Mesh(legGeo, legMat);
    legR.position.set(5.2, -2.8, -0.5);
    heroEnv.add(legR);

    // B. Desk Mat / Extended Mousepad
    const padGeo = new THREE.BoxGeometry(7.2, 0.04, 2.6);
    const padMat = new THREE.MeshStandardMaterial({ color: 0x141824, roughness: 0.8 });
    const deskPad = new THREE.Mesh(padGeo, padMat);
    deskPad.position.set(0, -0.4, 0.2);
    heroEnv.add(deskPad);

    // C. Large Curved Monitor
    const monitorFrameGeo = new THREE.BoxGeometry(6.4, 3.4, 0.2);
    const monitorFrameMat = new THREE.MeshStandardMaterial({ color: 0x1A1E29, metalness: 0.9, roughness: 0.2 });
    const monitor = new THREE.Mesh(monitorFrameGeo, monitorFrameMat);
    monitor.position.set(0, 1.8, -1.2);
    heroEnv.add(monitor);

    // Monitor Stand
    const standStemGeo = new THREE.CylinderGeometry(0.12, 0.12, 1.6, 16);
    const standMat = new THREE.MeshStandardMaterial({ color: 0x2A2E3D, metalness: 0.95, roughness: 0.15 });
    const standStem = new THREE.Mesh(standStemGeo, standMat);
    standStem.position.set(0, 0.3, -1.4);
    heroEnv.add(standStem);

    const standBaseGeo = new THREE.BoxGeometry(1.6, 0.08, 1.2);
    const standBase = new THREE.Mesh(standBaseGeo, standMat);
    standBase.position.set(0, -0.4, -1.3);
    heroEnv.add(standBase);

    // Code Editor Texture Canvas on Monitor Screen
    const codeCanvas = document.createElement('canvas');
    codeCanvas.width = 1024;
    codeCanvas.height = 512;
    const ctx = codeCanvas.getContext('2d');
    ctx.fillStyle = '#090B12';
    ctx.fillRect(0, 0, 1024, 512);

    // Title bar
    ctx.fillStyle = '#121624';
    ctx.fillRect(0, 0, 1024, 45);
    ctx.fillStyle = '#FF5F56';
    ctx.beginPath(); ctx.arc(25, 22, 6, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#FFBD2E';
    ctx.beginPath(); ctx.arc(45, 22, 6, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#27C93F';
    ctx.beginPath(); ctx.arc(65, 22, 6, 0, Math.PI * 2); ctx.fill();

    ctx.font = '22px "DM Mono", monospace';
    ctx.fillStyle = '#818CF8';
    ctx.fillText('RakeshBiswal.jsx — Active Development', 100, 30);

    // Code lines
    ctx.font = '20px "DM Mono", monospace';
    const lines = [
      { text: '// RAKESH BISWAL — Full-Stack Developer & AI/ML Engineer', color: '#64748B' },
      { text: 'import { Innovation, Performance } from "@digital/future";', color: '#C084FC' },
      { text: '', color: '' },
      { text: 'export default function DeveloperStation() {', color: '#38BDF8' },
      { text: '  const passion = ["Full-Stack", "AI / Machine Learning", "3D Web"];', color: '#E2E8F0' },
      { text: '  const mindset = "Building elegant solutions to real-world problems";', color: '#34D399' },
      { text: '', color: '' },
      { text: '  return <DigitalExperience ready={true} creator="Rakesh" />;', color: '#F472B6' },
      { text: '}', color: '#38BDF8' },
    ];
    lines.forEach((l, idx) => {
      ctx.fillStyle = l.color || '#E2E8F0';
      ctx.fillText(l.text, 35, 90 + idx * 38);
    });

    const codeTexture = new THREE.CanvasTexture(codeCanvas);
    const screenGeo = new THREE.PlaneGeometry(6.1, 3.1);
    const screenMat = new THREE.MeshBasicMaterial({ map: codeTexture });
    const screenMesh = new THREE.Mesh(screenGeo, screenMat);
    screenMesh.position.set(0, 1.8, -1.09);
    heroEnv.add(screenMesh);

    // D. Gaming PC Cabinet (Right side of desk)
    const pcCaseGeo = new THREE.BoxGeometry(1.6, 2.8, 2.6);
    const pcCaseMat = new THREE.MeshStandardMaterial({ color: 0x0A0D15, metalness: 0.85, roughness: 0.25 });
    const pcCase = new THREE.Mesh(pcCaseGeo, pcCaseMat);
    pcCase.position.set(4.2, 1.0, -0.6);
    heroEnv.add(pcCase);

    // Tempered Glass Panel
    const pcGlassGeo = new THREE.PlaneGeometry(2.3, 2.5);
    const pcGlassMat = new THREE.MeshPhysicalMaterial({
      color: 0x1E1B4B,
      transmission: 0.7,
      opacity: 1,
      transparent: true,
      roughness: 0.1,
      metalness: 0.1,
    });
    const pcGlass = new THREE.Mesh(pcGlassGeo, pcGlassMat);
    pcGlass.rotation.y = -Math.PI / 2;
    pcGlass.position.set(3.39, 1.0, -0.6);
    heroEnv.add(pcGlass);

    // Glowing RGB Dual Fans inside PC
    const fanGeo = new THREE.TorusGeometry(0.38, 0.05, 16, 32);
    const fanMat1 = new THREE.MeshBasicMaterial({ color: 0xA855F7 });
    const fanMat2 = new THREE.MeshBasicMaterial({ color: 0x38BDF8 });
    const pcFan1 = new THREE.Mesh(fanGeo, fanMat1);
    pcFan1.position.set(3.8, 1.5, -0.5);
    pcFan1.rotation.y = Math.PI / 2;
    heroEnv.add(pcFan1);

    const pcFan2 = new THREE.Mesh(fanGeo, fanMat2);
    pcFan2.position.set(3.8, 0.5, -0.5);
    pcFan2.rotation.y = Math.PI / 2;
    heroEnv.add(pcFan2);

    // E. Mechanical Keyboard
    const kbGeo = new THREE.BoxGeometry(2.4, 0.09, 0.95);
    const kbMat = new THREE.MeshStandardMaterial({ color: 0x171B26, metalness: 0.8, roughness: 0.3 });
    const keyboard = new THREE.Mesh(kbGeo, kbMat);
    keyboard.position.set(-0.6, -0.36, 0.3);
    heroEnv.add(keyboard);

    const kbGlowGeo = new THREE.BoxGeometry(2.35, 0.02, 0.9);
    const kbGlowMat = new THREE.MeshBasicMaterial({ color: 0xA855F7, transparent: true, opacity: 0.7 });
    const kbGlow = new THREE.Mesh(kbGlowGeo, kbGlowMat);
    kbGlow.position.set(-0.6, -0.32, 0.3);
    heroEnv.add(kbGlow);

    // F. Optical Mouse
    const mouseGeo = new THREE.BoxGeometry(0.36, 0.12, 0.6);
    const mouseMat = new THREE.MeshStandardMaterial({ color: 0x1E2433, metalness: 0.9, roughness: 0.2 });
    const mouseMesh = new THREE.Mesh(mouseGeo, mouseMat);
    mouseMesh.position.set(1.6, -0.36, 0.3);
    heroEnv.add(mouseMesh);

    // G. Desktop Studio Speakers (Left & Right)
    const speakerGeo = new THREE.BoxGeometry(0.8, 1.6, 1.0);
    const speakerMat = new THREE.MeshStandardMaterial({ color: 0x10131D, metalness: 0.9, roughness: 0.2 });
    const coneGeo = new THREE.TorusGeometry(0.24, 0.04, 16, 32);
    const coneMat = new THREE.MeshBasicMaterial({ color: 0x38BDF8 });

    const speakerL = new THREE.Mesh(speakerGeo, speakerMat);
    speakerL.position.set(-4.2, 0.45, -0.6);
    speakerL.rotation.y = 0.25;
    const coneL = new THREE.Mesh(coneGeo, coneMat);
    coneL.position.set(0, 0, 0.51);
    speakerL.add(coneL);
    heroEnv.add(speakerL);

    const speakerR = new THREE.Mesh(speakerGeo, speakerMat);
    speakerR.position.set(2.8, 0.45, -0.9);
    speakerR.rotation.y = -0.25;
    const coneR = new THREE.Mesh(coneGeo, coneMat);
    coneR.position.set(0, 0, 0.51);
    speakerR.add(coneR);
    heroEnv.add(speakerR);

    // H. Flowing Purple/Violet Contour Curves Behind Workstation (Reference Image 2 Inspired)
    const contourGroup = new THREE.Group();
    heroEnv.add(contourGroup);

    for (let c = 0; c < 12; c++) {
      const curvePoints = [];
      const yOffset = (c - 6) * 0.7;
      for (let p = -16; p <= 16; p += 1) {
        const x = p;
        const wave = Math.sin(p * 0.28 + c * 0.3) * 1.8 + Math.cos(p * 0.15) * 1.2;
        curvePoints.push(new THREE.Vector3(x, yOffset + wave + 2.5, -4 - c * 0.25));
      }
      const curve = new THREE.CatmullRomCurve3(curvePoints);
      const tubeGeo = new THREE.TubeGeometry(curve, 64, 0.025, 8, false);
      const tubeMat = new THREE.MeshBasicMaterial({
        color: c % 2 === 0 ? 0xA855F7 : 0x818CF8,
        transparent: true,
        opacity: 0.38 - (c * 0.02),
      });
      const tube = new THREE.Mesh(tubeGeo, tubeMat);
      contourGroup.add(tube);
    }

    // =========================================================================
    // ENVIRONMENT 1: ABOUT ME — FUTURISTIC PERSONAL UNIVERSE (Y ≈ -24)
    // =========================================================================
    const aboutEnv = new THREE.Group();
    aboutEnv.position.set(0, -24, 0);
    scene.add(aboutEnv);

    // Floating Glass Icosahedron with Orbital Rings
    const aboutCoreGeo = new THREE.IcosahedronGeometry(2.6, 1);
    const aboutCoreMat = new THREE.MeshPhysicalMaterial({
      color: 0x1E1B4B,
      metalness: 0.8,
      roughness: 0.15,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
    });
    const aboutCore = new THREE.Mesh(aboutCoreGeo, aboutCoreMat);
    aboutEnv.add(aboutCore);

    const aboutWireGeo = new THREE.IcosahedronGeometry(2.85, 1);
    const aboutWireMat = new THREE.MeshBasicMaterial({ color: 0x8B5CF6, wireframe: true, transparent: true, opacity: 0.35 });
    const aboutWire = new THREE.Mesh(aboutWireGeo, aboutWireMat);
    aboutEnv.add(aboutWire);

    const orbitRing1 = new THREE.Mesh(new THREE.TorusGeometry(4.2, 0.03, 16, 80), new THREE.MeshStandardMaterial({ color: 0xE2E8F0, metalness: 0.9 }));
    orbitRing1.rotation.x = Math.PI / 3;
    aboutEnv.add(orbitRing1);

    const orbitRing2 = new THREE.Mesh(new THREE.TorusGeometry(4.8, 0.025, 16, 80), new THREE.MeshStandardMaterial({ color: 0x38BDF8, metalness: 0.8 }));
    orbitRing2.rotation.y = Math.PI / 3.5;
    aboutEnv.add(orbitRing2);

    // =========================================================================
    // ENVIRONMENT 2: SKILLS — 3D TECHNOLOGY UNIVERSE (Y ≈ -48)
    // =========================================================================
    const skillsEnv = new THREE.Group();
    skillsEnv.position.set(0, -48, 0);
    scene.add(skillsEnv);

    // Central Glowing Tech Star
    const techStar = new THREE.Mesh(
      new THREE.OctahedronGeometry(2.2, 0),
      new THREE.MeshStandardMaterial({ color: 0x0E1424, metalness: 0.9, roughness: 0.15 })
    );
    const techStarWire = new THREE.Mesh(
      new THREE.OctahedronGeometry(2.35, 0),
      new THREE.MeshBasicMaterial({ color: 0x38BDF8, wireframe: true, transparent: true, opacity: 0.5 })
    );
    skillsEnv.add(techStar);
    skillsEnv.add(techStarWire);

    // Orbiting Satellite Tech Polyhedra
    const skillNodes = [];
    const techGeos = [
      new THREE.IcosahedronGeometry(0.7, 0),
      new THREE.BoxGeometry(0.9, 0.9, 0.9),
      new THREE.TorusGeometry(0.6, 0.18, 16, 32),
      new THREE.TetrahedronGeometry(0.8, 0),
    ];
    for (let s = 0; s < 6; s++) {
      const angle = (s / 6) * Math.PI * 2;
      const mesh = new THREE.Mesh(
        techGeos[s % techGeos.length],
        new THREE.MeshStandardMaterial({ color: 0x1E2235, metalness: 0.85, roughness: 0.25 })
      );
      const wire = new THREE.Mesh(
        techGeos[s % techGeos.length],
        new THREE.MeshBasicMaterial({ color: s % 2 === 0 ? 0xA855F7 : 0x38BDF8, wireframe: true })
      );
      mesh.add(wire);
      mesh.position.set(Math.cos(angle) * 5.2, Math.sin(angle) * 3.2, Math.sin(angle * 2) * 2.2);
      skillsEnv.add(mesh);
      skillNodes.push({ mesh, speed: 0.4 + s * 0.1, radius: 5.2, angle });
    }

    // =========================================================================
    // ENVIRONMENT 3: PROJECTS — DIGITAL LABORATORY (Y ≈ -72)
    // =========================================================================
    const projectsEnv = new THREE.Group();
    projectsEnv.position.set(0, -72, 0);
    scene.add(projectsEnv);

    // Laboratory Floor Grid
    const labGrid = new THREE.GridHelper(30, 24, 0x38BDF8, 0x1E293B);
    labGrid.position.y = -4.5;
    projectsEnv.add(labGrid);

    // Floating Hologram Screen Pedestals
    for (let p = 0; p < 4; p++) {
      const pX = (p % 2 === 0 ? -1 : 1) * 4.5;
      const pZ = (p < 2 ? -2 : 3);
      const ped = new THREE.Mesh(
        new THREE.BoxGeometry(1.6, 0.2, 1.2),
        new THREE.MeshStandardMaterial({ color: 0x0F172A, metalness: 0.9 })
      );
      ped.position.set(pX, -4.3, pZ);
      projectsEnv.add(ped);

      const holoLaser = new THREE.Mesh(
        new THREE.CylinderGeometry(0.02, 0.6, 4.5, 16, 1, true),
        new THREE.MeshBasicMaterial({ color: 0xA855F7, transparent: true, opacity: 0.25, side: THREE.DoubleSide })
      );
      holoLaser.position.set(pX, -2.1, pZ);
      projectsEnv.add(holoLaser);
    }

    // =========================================================================
    // ENVIRONMENT 4: EDUCATION & ACHIEVEMENTS — ARCHITECTURAL GALLERY (Y ≈ -96)
    // =========================================================================
    const eduEnv = new THREE.Group();
    eduEnv.position.set(0, -96, 0);
    scene.add(eduEnv);

    // Monolithic Minimal Pillars
    for (let m = -3; m <= 3; m += 2) {
      const pillar = new THREE.Mesh(
        new THREE.BoxGeometry(0.8, 12, 0.8),
        new THREE.MeshStandardMaterial({ color: 0x0B0E17, metalness: 0.9, roughness: 0.2 })
      );
      pillar.position.set(m * 3.8, 0, -4);
      eduEnv.add(pillar);

      const pRing = new THREE.Mesh(
        new THREE.BoxGeometry(0.9, 0.1, 0.9),
        new THREE.MeshBasicMaterial({ color: 0x38BDF8, wireframe: true })
      );
      pRing.position.set(m * 3.8, 2, -4);
      eduEnv.add(pRing);
    }

    // =========================================================================
    // ENVIRONMENT 5: GITHUB — DEVELOPER CONTROL ROOM (Y ≈ -120)
    // =========================================================================
    const gitEnv = new THREE.Group();
    gitEnv.position.set(0, -120, 0);
    scene.add(gitEnv);

    // Server Rack Rigs
    for (let r = 0; r < 4; r++) {
      const rack = new THREE.Mesh(
        new THREE.BoxGeometry(1.4, 6.5, 1.2),
        new THREE.MeshStandardMaterial({ color: 0x0A0D15, metalness: 0.95, roughness: 0.2 })
      );
      rack.position.set((r - 1.5) * 4.2, 0, -3.5);
      gitEnv.add(rack);

      const rackLights = new THREE.Mesh(
        new THREE.BoxGeometry(1.2, 6.2, 0.05),
        new THREE.MeshBasicMaterial({ color: r % 2 === 0 ? 0x38BDF8 : 0x10B981, wireframe: true })
      );
      rackLights.position.set((r - 1.5) * 4.2, 0, -2.85);
      gitEnv.add(rackLights);
    }

    // =========================================================================
    // ENVIRONMENT 6: CONTACT — FUTURISTIC 3D PORTAL (Y ≈ -144)
    // =========================================================================
    const portalEnv = new THREE.Group();
    portalEnv.position.set(0, -144, 0);
    scene.add(portalEnv);

    // Archway Stargate
    const archGeo = new THREE.TorusGeometry(5.2, 0.25, 24, 80);
    const archMat = new THREE.MeshStandardMaterial({ color: 0x161A28, metalness: 0.9, roughness: 0.15 });
    const portalArch = new THREE.Mesh(archGeo, archMat);
    portalEnv.add(portalArch);

    const portalGlowGeo = new THREE.TorusGeometry(4.9, 0.08, 16, 80);
    const portalGlowMat = new THREE.MeshBasicMaterial({ color: 0x8B5CF6 });
    const portalGlow = new THREE.Mesh(portalGlowGeo, portalGlowMat);
    portalEnv.add(portalGlow);

    // Swirling Portal Disk
    const portalDiscGeo = new THREE.CircleGeometry(4.7, 32);
    const portalDiscMat = new THREE.MeshBasicMaterial({
      color: 0x0A0C16,
      transparent: true,
      opacity: 0.75,
    });
    const portalDisc = new THREE.Mesh(portalDiscGeo, portalDiscMat);
    portalDisc.position.z = -0.1;
    portalEnv.add(portalDisc);

    // =========================================================================
    // SCROLL-CONTROLLED CAMERA NAVIGATION & MOUSE PARALLAX
    // =========================================================================
    let scrollProgress = 0;
    let targetScrollProgress = 0;
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      targetScrollProgress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
    };

    const handleMouseMove = (e) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 1.2;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 1.2;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const handleResize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // ANIMATION LOOP
    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Smooth interpolation for scroll and mouse
      scrollProgress += (targetScrollProgress - scrollProgress) * 0.05;
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Camera transitions through each 3D world (total travel: Y = 0 down to Y = -144)
      const currentCameraY = -scrollProgress * 144;
      camera.position.y = currentCameraY - (mouseY * 0.6);
      camera.position.x = mouseX * 1.4;
      camera.lookAt(0, currentCameraY, 0);

      // Environment 0 Animations (Workstation & Fans)
      pcFan1.rotation.z = elapsed * 3.5;
      pcFan2.rotation.z = -elapsed * 3.5;

      // Environment 1 Animations (About Core)
      aboutCore.rotation.y = elapsed * 0.2;
      aboutCore.rotation.x = Math.sin(elapsed * 0.3) * 0.15;
      aboutWire.rotation.y = -elapsed * 0.15;
      orbitRing1.rotation.z = elapsed * 0.2;
      orbitRing2.rotation.z = -elapsed * 0.15;

      // Environment 2 Animations (Skills Technology Star & Nodes)
      techStar.rotation.y = elapsed * 0.3;
      techStarWire.rotation.y = -elapsed * 0.2;
      skillNodes.forEach((node, i) => {
        const curAngle = node.angle + elapsed * 0.25 * (i % 2 === 0 ? 1 : -1);
        node.mesh.position.x = Math.cos(curAngle) * node.radius;
        node.mesh.position.z = Math.sin(curAngle) * (node.radius * 0.6);
        node.mesh.rotation.y = elapsed * 0.5;
        node.mesh.rotation.x = elapsed * 0.3;
      });

      // Environment 6 Animations (Contact Stargate)
      portalGlow.rotation.z = elapsed * 0.4;
      portalArch.rotation.z = -elapsed * 0.1;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (mount && renderer.domElement) {
        mount.removeChild(renderer.domElement);
      }
      deskGeo.dispose();
      deskMat.dispose();
      monitorFrameGeo.dispose();
      monitorFrameMat.dispose();
      screenGeo.dispose();
      screenMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none select-none z-0 overflow-hidden">
      <div ref={mountRef} className="w-full h-full opacity-90" />
      {/* Background vignette gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#05060A]/60 via-transparent to-[#05060A] pointer-events-none" />
    </div>
  );
}
