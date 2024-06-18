// components/ThreeCube.js
import React, { useEffect, useRef, RefObject } from 'react';
import { useTheme } from 'next-themes';
import * as THREE from 'three';

const Cube: React.FC = () => {
    const mountRef: RefObject<HTMLDivElement> = useRef(null);
    const { theme } = useTheme()

    useEffect(() => {
        console.log(theme)
        if (!mountRef.current) return;

        let velX = 0.006
        let velY = 0.006

        // Scene
        const scene = new THREE.Scene();

        // Camera
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;

        // Renderer
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);

        // Cube geometry and material
        const geometry = new THREE.BoxGeometry(2.4, 2.4, 2.4); // Increase the size of the cube
        const material = new THREE.MeshPhysicalMaterial({
            color: theme === 'dark' ? 0xc084fc : 0xff0000,
            clearcoat: 1,
            clearcoatRoughness: 1,
        });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
        scene.add(ambientLight);

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);

            cube.rotation.x += velX
            cube.rotation.y += velY

            renderer.render(scene, camera);
        };

        animate();

        window.addEventListener('mousedown',(e) => {
            velX = -velX
            velY = -velY
        })

        // Handle window resize
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);
        
        // Cleanup on unmount
        return () => {
            if (mountRef.current) {
                mountRef.current.removeChild(renderer.domElement);
            }
            window.removeEventListener('resize', handleResize);
        };
    }, [theme]);

    return <div className='rilative h-full w-full flex items-center justify-center' ref={mountRef} />;
};

export default Cube;
