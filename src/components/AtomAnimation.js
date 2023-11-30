import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const AtomAnimation = () => {
  const containerRef = useRef(null); // Reference to the container div
  const rendererRef = useRef(null); // Reference to the renderer

  useEffect(() => {
    // Initialize Three.js components
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 3;

    const renderer = new THREE.WebGLRenderer({ alpha: true }); // Set alpha to true
    renderer.setClearColor(0x000000, 0); // 0 alpha for the background
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Append renderer's DOM element to the container
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer; // Save reference for cleanup

    const ringGeometry = new THREE.RingGeometry(0.892, 0.9, 64, 8, 0, Math.PI * 2);
    const ringMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide });

    const rings = []; // Array to store ring meshes
    const rotationSpeeds = [0.002, 0.003, 0.004, 0.005, 0.006, 0.007]; // Specify rotation speeds

    // Create and position rings with specified rotation speeds
    for (let i = 0; i < 6; i++) {
      const ringMesh = new THREE.Mesh(ringGeometry, ringMaterial);
      ringMesh.position.set(0, 0, 0);
      scene.add(ringMesh);
      rings.push({ mesh: ringMesh, speed: rotationSpeeds[i] });
    }

    // Set up animation loop for ring rotation
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate rings with specified speeds
      rings.forEach(({ mesh, speed }) => {
        mesh.rotation.x += speed;
        mesh.rotation.y -= speed;
      });

      renderer.render(scene, camera);
    };
    animate();

    // Return a clean-up function to dispose Three.js resources on unmount
    return () => {
      if (rendererRef.current) {
        rendererRef.current.domElement.remove();
        rendererRef.current.dispose();
      }
    };
  }, []);

  return <div id="atom-animation-container" ref={containerRef}></div>;
};

export default AtomAnimation;
