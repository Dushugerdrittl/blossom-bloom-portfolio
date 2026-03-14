import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, Environment, ContactShadows, useAnimations, Center } from '@react-three/drei';
import { useRef, Suspense, useMemo, useState, useEffect } from 'react';
import * as THREE from 'three';
import { EffectComposer, Bloom, Vignette, Noise } from '@react-three/postprocessing';
import CanvasLoader from './CanvasLoader';

function AnimatedDragon() {
  const { scene, animations } = useGLTF('/dragon.glb');
  
  const dragonRef = useRef<THREE.Group>(null);
  const containerRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();
  
  // Extract animation tools
  const { names, actions, mixer } = useAnimations(animations, dragonRef);
  
  // Track animation index
  const [index, setIndex] = useState(0);

  // Handle animation playback and looping
  useEffect(() => {
    if (names.length === 0 || !actions) return;

    const name = names[index];
    const action = actions[name];

    if (action) {
      action.reset();
      action.setLoop(THREE.LoopOnce, 1);
      action.clampWhenFinished = true;
      action.fadeIn(0.5).play();
    }

    const handleFinished = () => {
      setIndex((prev) => (prev + 1) % names.length);
    };

    mixer.addEventListener('finished', handleFinished);

    return () => {
      mixer.removeEventListener('finished', handleFinished);
      action?.fadeOut(0.5);
    };
  }, [index, names, actions, mixer]);

  // Dynamic scale calculation
  const baseResponsiveScale = useMemo(() => {
    const baseScale = 3.5; 
    const scaleFactor = Math.max(viewport.width / 12, 0.8); 
    return baseScale * scaleFactor;
  }, [viewport.width]);

  useFrame((state) => {
    if (dragonRef.current && containerRef.current) {
      const time = state.clock.getElapsedTime();
      const { x, y } = state.pointer;

      // 1. POSITIONING & LEVITATION
      // We lower the container to the 'ground' and add subtle bobbing
      const baseGroundY = -2.5;
      containerRef.current.position.y = baseGroundY + Math.sin(time * 1.0) * 0.1;
      
      // 2. STABLE ROTATION (Mouse Tracking)
      // We remove the infinite Y rotation to keep it stable in frame
      // Instead, we use a controlled 'Look At' behavior
      const targetRotationX = THREE.MathUtils.clamp(-y * 0.4, -0.5, 0.5);
      const targetRotationY = THREE.MathUtils.clamp(x * 0.6, -0.8, 0.8);
      const swayZ = Math.sin(time * 0.5) * 0.02;

      // Smoothly interpolate the rotation
      dragonRef.current.rotation.x = THREE.MathUtils.lerp(dragonRef.current.rotation.x, targetRotationX, 0.03);
      dragonRef.current.rotation.y = THREE.MathUtils.lerp(dragonRef.current.rotation.y, targetRotationY, 0.03);
      dragonRef.current.rotation.z = THREE.MathUtils.lerp(dragonRef.current.rotation.z, swayZ + (x * 0.05), 0.03);
      
      // 3. BREATHING EFFECT
      const breathe = 1 + Math.sin(time * 2) * 0.01;
      const finalScale = baseResponsiveScale * breathe;
      dragonRef.current.scale.set(finalScale, finalScale, finalScale);
    }
  });

  return (
    <group ref={containerRef}>
      <Center top>
        <primitive 
          ref={dragonRef} 
          object={scene} 
        />
      </Center>
    </group>
  );
}

export default function DragonHero() {
  return (
    <div className="fixed inset-0 z-0 w-screen h-screen overflow-hidden bg-[#050505]">
      <Canvas shadows camera={{ position: [0, 0, 18], fov: 30, far: 100 }}>
        <Suspense fallback={<CanvasLoader />}>
          <Environment preset="night" />
          
          <AnimatedDragon />

          <ContactShadows 
            position={[0, -3.5, 0]} 
            opacity={0.4} 
            scale={20} 
            blur={2.5} 
            far={10} 
          />

          <EffectComposer disableNormalPass>
            <Bloom 
              luminanceThreshold={1} 
              mipmapBlur 
              intensity={1.2} 
              radius={0.4} 
            />
            <Vignette eskil={false} offset={0.1} darkness={1.1} />
            <Noise opacity={0.04} />
          </EffectComposer>
        </Suspense>

        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#FFCC00" />
        <spotLight 
          position={[-10, 10, 10]} 
          angle={0.2} 
          penumbra={1} 
          intensity={3} 
          color="#4A1504" 
        />
        <directionalLight position={[0, -5, -5]} intensity={0.5} color="#FFCC00" />
      </Canvas>
    </div>
  );
}

// Preload for performance
useGLTF.preload('/dragon.glb');
