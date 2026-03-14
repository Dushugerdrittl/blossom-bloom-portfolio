import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, Environment, ContactShadows, useAnimations, Center, Sparkles } from '@react-three/drei';
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

  // Debug and fix model parts
  useEffect(() => {
    // Log bounding box to help determine scale
    const box = new THREE.Box3().setFromObject(scene);
    const size = box.getSize(new THREE.Vector3());
    console.log("Model Size:", size);

    scene.traverse((child) => {
      if ((child as any).isMesh) {
        const mesh = child as THREE.Mesh;
        mesh.frustumCulled = false;
        
        if (mesh.material) {
          const mat = mesh.material as THREE.Material;
          mat.side = THREE.DoubleSide;
        }
      }
    });
  }, [scene]);

  // Handle animation playback and looping
  useEffect(() => {
    if (names.length === 0 || !actions) return;

    const name = names[index];
    const action = actions[name];

    if (action) {
      action.reset();
      // Removed LoopOnce to let it play naturally or loop as defined in the model
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

  // Dynamic scale calculation - Increased to 4.0 for extra majesty
  const baseResponsiveScale = useMemo(() => {
    const baseScale = 4.0; 
    const scaleFactor = Math.min(viewport.width / 15, 1); 
    return baseScale * scaleFactor;
  }, [viewport.width]);

  useFrame((state) => {
    if (dragonRef.current && containerRef.current) {
      const time = state.clock.getElapsedTime();
      const { x, y } = state.pointer;

      // 1. POSITIONING - Bottom Center
      // Raised further from -3.0 to -1.5 to bring it more into the main view
      const baseGroundY = -1.5; 
      containerRef.current.position.y = baseGroundY + Math.sin(time * 0.5) * 0.2;
      
      // 2. CONTROLLED ROTATION
      const targetRotationX = THREE.MathUtils.clamp(-y * 0.2, -0.3, 0.3);
      const targetRotationY = THREE.MathUtils.clamp(x * 0.4, -0.5, 0.5);
      const swayZ = Math.sin(time * 0.5) * 0.02;

      dragonRef.current.rotation.x = THREE.MathUtils.lerp(dragonRef.current.rotation.x, targetRotationX, 0.03);
      dragonRef.current.rotation.y = THREE.MathUtils.lerp(dragonRef.current.rotation.y, targetRotationY, 0.03);
      dragonRef.current.rotation.z = THREE.MathUtils.lerp(dragonRef.current.rotation.z, swayZ + (x * 0.03), 0.03);
      
      // 3. BREATHING
      const breathe = 1 + Math.sin(time * 2) * 0.01;
      const finalScale = baseResponsiveScale * breathe;
      dragonRef.current.scale.set(finalScale, finalScale, finalScale);
    }
  });

  return (
    <group ref={containerRef}>
      <group>
        {/* We only Center the dragon so the sparkles don't mess up the bounding box */}
        <Center bottom>
          <primitive 
            ref={dragonRef} 
            object={scene} 
          />
        </Center>
        
        {/* Majestic Aura Sparkles - Positioned relative to the dragon but ignored by Center */}
        <Sparkles count={70} scale={15} size={10} speed={0.3} color="#D4AF37" />
        <Sparkles count={50} scale={12} size={8} speed={0.5} color="#FF69B4" />
      </group>
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
            position={[0, -6.5, 0]} 
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
