import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';

const NameModel = () => {
  const canvasRef = useRef(null);
  const groupRef = useRef(new THREE.Group());
  const [text, setText] = useState('KOTOE');

  useEffect(() => {
    let scene, camera, renderer;
    let textMesh1, textMesh2, textGeo;
    let font;
    let mouseX = 0, mouseY = 0;

    // Smaller Text & Scene
    const depth = 10, // Reduced depth
      size = 20, // Reduced size
      hover = 10, // Reduced hover distance
      curveSegments = 4,
      bevelThickness = 1,
      bevelSize = 0.8,
      mirror = true;

    const init = () => {
      // Scene & Camera
      scene = new THREE.Scene();
      scene.background = new THREE.Color("rgba(0, 0, 0, 0.5)"); // Transparent background = null

      camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 900);
      camera.position.set(0, 50, 300); // Bring camera closer
      camera.lookAt(new THREE.Vector3(0, 50, 0));

      // Lights
      const dirLight = new THREE.DirectionalLight(0xffffff, 0.6);
      dirLight.position.set(0, 0, 1).normalize();
      scene.add(dirLight);

      const pointLight = new THREE.PointLight(0xffffff, 2);
      pointLight.position.set(0, 50, 90);
      scene.add(pointLight);

      // Define materials
      const mainMaterial = new THREE.MeshPhongMaterial({ color: 0xC3B1E1, flatShading: true });
      const shadowMaterial = new THREE.MeshPhongMaterial({ color: 0xaaaaaa, flatShading: true });

      groupRef.current.position.y = 50;
      scene.add(groupRef.current);

      loadFont(mainMaterial, shadowMaterial);

      // Renderer with Transparent Background
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x000000, 0); // Transparent background
      canvasRef.current.appendChild(renderer.domElement);

      // Events
      window.addEventListener('resize', onWindowResize);
      window.addEventListener('mousemove', onMouseMove);

      animate();
    };

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    const onMouseMove = (event) => {
      // Normalize mouse position to range (-1 to 1)
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    const loadFont = (mainMaterial, shadowMaterial) => {
      const loader = new FontLoader();
      loader.load('https://threejs.org/examples/fonts/helvetiker_bold.typeface.json', (response) => {
        font = response;
        refreshText(mainMaterial, shadowMaterial);
      });
    };

    const createText = (mainMaterial, shadowMaterial) => {
      textGeo = new TextGeometry(text, {
        font: font,
        size: size,
        depth: depth,
        curveSegments: curveSegments,
        bevelThickness: bevelThickness,
        bevelSize: bevelSize,
        bevelEnabled: true
      });

      textGeo.computeBoundingBox();
      const centerOffset = -0.5 * (textGeo.boundingBox.max.x - textGeo.boundingBox.min.x);

      // Main Text
      textMesh1 = new THREE.Mesh(textGeo, mainMaterial);
      textMesh1.position.set(centerOffset, hover, 0);
      groupRef.current.add(textMesh1);

      // Shadow/Mirrored Text
      if (mirror) {
        textMesh2 = new THREE.Mesh(textGeo, shadowMaterial);
        textMesh2.position.set(centerOffset, -hover, depth);
        textMesh2.rotation.x = Math.PI;
        groupRef.current.add(textMesh2);
      }
    };

    const refreshText = (mainMaterial, shadowMaterial) => {
      groupRef.current.clear();
      createText(mainMaterial, shadowMaterial);
    };

    const animate = () => {
      requestAnimationFrame(animate);

      // Smooth rotation based on cursor movement
      groupRef.current.rotation.y += (mouseX * Math.PI * 0.1 - groupRef.current.rotation.y) * 0.1;
      groupRef.current.rotation.x += (mouseY * Math.PI * 0.1 - groupRef.current.rotation.x) * 0.1;

      camera.lookAt(new THREE.Vector3(0, 50, 0));
      renderer.render(scene, camera);
    };

    init();

    return () => {
      renderer.dispose();
      window.removeEventListener('resize', onWindowResize);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, [text]);

  return <div ref={canvasRef} />;
};

export default NameModel;
