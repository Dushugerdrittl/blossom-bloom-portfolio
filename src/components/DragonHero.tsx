import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, Environment, ContactShadows, useAnimations } from '@react-three/drei';
import { useRef, Suspense, useMemo, useState, useEffect } from 'react';
import * as THREE from 'three';
import CanvasLoader from './CanvasLoader';

function AnimatedDragon() {
  // Step 1: Load the high-detail model
  const { scene, animations } = useGLTF('/dragon.glb');
  const dragonRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();
  
  // Step 2: Extract animation tools
  const { names, actions, mixer } = useAnimations(animations, dragonRef);
  
  // Step 3: Track animation index
  const [index, setIndex] = useState(0);

  // Step 4 & 5: Handle animation playback and looping
  useEffect(() => {
    if (names.length === 0 || !actions) return;

    const name = names[index];
    const action = actions[name];

    if (action) {
      // Configure for sequential playback
      action.reset();
      action.setLoop(THREE.LoopOnce, 1);
      action.clampWhenFinished = true;
      action.fadeIn(0.5).play();
    }

    // Step 6: Listen for 'finished' event to cycle index
    const handleFinished = () => {
      setIndex((prev) => (prev + 1) % names.length);
    };

    mixer.addEventListener('finished', handleFinished);

    return () => {
      mixer.removeEventListener('finished', handleFinished);
      action?.fadeOut(0.5);
    };
  }, [index, names, actions, mixer]);

  // Reduced responsive scale
  const baseResponsiveScale = useMemo(() => {
    const baseScale = 3.5; 
    const scaleFactor = Math.max(viewport.width / 12, 0.8); 
    return baseScale * scaleFactor;
  }, [viewport.width]);

  // Step 7: Keep heavy mouse tracking lerp
  useFrame((state) => {
    if (dragonRef.current) {
      const time = state.clock.getElapsedTime();
      const { x, y } = state.pointer;

      // Biological movements (Levitation & Sway)
      // Base Y lowered to -2.0 to sit on the 'ground'
      const baseGroundY = -2.0;
      dragonRef.current.position.y = baseGroundY + Math.sin(time * 1.2) * 0.1;
      const swayZ = Math.sin(time * 0.8) * 0.03;

      // Heavy Mouse Tracking - Clamped to prevent going too far
      const baseRotationY = time * 0.05; 
      const targetRotationX = THREE.MathUtils.clamp(-y * 0.3, -0.4, 0.4);
      const targetRotationY = baseRotationY + (x * 0.5);

      dragonRef.current.rotation.x = THREE.MathUtils.lerp(dragonRef.current.rotation.x, targetRotationX, 0.02);
      dragonRef.current.rotation.y = THREE.MathUtils.lerp(dragonRef.current.rotation.y, targetRotationY, 0.02);
      dragonRef.current.rotation.z = THREE.MathUtils.lerp(dragonRef.current.rotation.z, swayZ + (x * 0.05), 0.02);
      
      // Breathing scale applied to base scale
      const breathe = 1 + Math.sin(time * 2) * 0.015;
      const finalScale = baseResponsiveScale * breathe;
      dragonRef.current.scale.set(finalScale, finalScale, finalScale);
    }
  });

  return (
    <primitive 
      ref={dragonRef} 
      object={scene} 
      position={[0, -0.5, 0]}
    />
  );
}

export default function DragonHero() {
  return (
    <div className="fixed inset-0 z-0 w-screen h-screen overflow-hidden bg-[#050505]">
      <Canvas shadows camera={{ position: [0, 0, 15], fov: 35 }}>
        {/* Step 1: Wrap in Suspense */}
        <Suspense fallback={<CanvasLoader />}>
          <Environment preset="night" />
          
          <AnimatedDragon />

          <ContactShadows 
            position={[0, -3.5, 0]} 
            opacity={0.4} 
            scale={15} 
            blur={2.5} 
            far={4} 
          />
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
