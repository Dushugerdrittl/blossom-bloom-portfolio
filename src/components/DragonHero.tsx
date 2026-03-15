import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, Environment, ContactShadows, useAnimations, Center, Sparkles } from '@react-three/drei';
import { useRef, Suspense, useMemo, useState, useEffect } from 'react';
import * as THREE from 'three';
import { MeshoptDecoder } from 'meshoptimizer';
import { EffectComposer, Bloom, Vignette, Noise } from '@react-three/postprocessing';
import CanvasLoader from './CanvasLoader';

function AnimatedDragon() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const modelPath = isMobile ? '/dragon-lite.glb' : '/dragon-hq.glb';
  
  // Use MeshoptDecoder for the compressed lite model
  const { scene, animations } = useGLTF(modelPath, false, true, (loader) => {
    loader.setMeshoptDecoder(MeshoptDecoder);
  });
  
  const dragonRef = useRef<THREE.Group>(null);
  const containerRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();
  
  // Extract animation tools
  const { names, actions, mixer } = useAnimations(animations, dragonRef);
  
  // Track animation index
  const [index, setIndex] = useState(0);

  // Step 3: Mobile Detection for Framerate Capping (uses state from above)
  let frameCount = 0;

  // Fix and optimize model meshes
  useEffect(() => {
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.frustumCulled = false; 
        
        if (child.material) {
          if (Array.isArray(child.material)) {
            child.material.forEach(m => m.side = THREE.DoubleSide);
          } else {
            child.material.side = THREE.DoubleSide;
          }
        }
      }
    });
  }, [scene]);

  // Handle animation playback and looping
  useEffect(() => {
    if (names.length === 0 || !actions) return;

    // Get current animation name
    const name = names[index];
    const action = actions[name];

    if (action) {
      // Configure the action to play once and then signal 'finished'
      action.reset();
      action.setLoop(THREE.LoopOnce, 1);
      action.clampWhenFinished = true;
      action.fadeIn(0.5).play();
    }

    // Set up the listener for when an animation finishes
    const handleFinished = () => {
      // Fade out current and move to next index
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
    // Step 3: Cap Framerate on Mobile (approx. 30fps)
    if (isMobile) {
      frameCount++;
      if (frameCount % 2 !== 0) return;
    }

    if (dragonRef.current && containerRef.current) {
      const { x, y } = state.pointer;
      const t = state.clock.getElapsedTime();

      // 1. POSITIONING - Bottom Center
      const baseGroundY = -1.5; 
      containerRef.current.position.y = baseGroundY + Math.sin(t * 0.5) * 0.2;
      
      // 2. CONTROLLED ROTATION
      const targetRotationX = THREE.MathUtils.clamp(-y * 0.2, -0.3, 0.3);
      const targetRotationY = THREE.MathUtils.clamp(x * 0.4, -0.5, 0.5);
      const swayZ = Math.sin(t * 0.5) * 0.02;

      dragonRef.current.rotation.x = THREE.MathUtils.lerp(dragonRef.current.rotation.x, targetRotationX, 0.03);
      dragonRef.current.rotation.y = THREE.MathUtils.lerp(dragonRef.current.rotation.y, targetRotationY, 0.03);
      dragonRef.current.rotation.z = THREE.MathUtils.lerp(dragonRef.current.rotation.z, swayZ + (x * 0.03), 0.03);
      
      // 3. BREATHING
      const breathe = 1 + Math.sin(t * 2) * 0.01;
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
        <Sparkles count={70} scale={15} size={10} speed={0.3} color="#D4AF37" frustumCulled={false} />
        <Sparkles count={50} scale={12} size={8} speed={0.5} color="#FF69B4" frustumCulled={false} />
      </group>
    </group>
  );
}

export default function DragonHero() {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    /* Step 4: Wrapper absolute/fixed prevents scrolling interference */
    <div className="fixed inset-0 -z-10 h-[100dvh] w-screen pointer-events-none overflow-hidden bg-[#050505]">
      {/* Step 1 & 2: Lock Pixel Ratio (dpr) and Optimize WebGL Engine (gl) */}
      <Canvas 
        shadows={!isMobile} // Disable shadows on mobile for stability
        dpr={isMobile ? 1 : [1, 2]} // Allow higher quality on desktop, lock to 1 on mobile
        gl={{ 
          powerPreference: "high-performance", 
          antialias: !isMobile, // Disable antialiasing on mobile
          stencil: false, 
          depth: true,
          alpha: false,
          preserveDrawingBuffer: false
        }}
        camera={{ position: [0, 0, 18], fov: 30, far: 100 }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <Environment preset={isMobile ? "city" : "night"} />
          
          <AnimatedDragon />

          {!isMobile && (
            <ContactShadows 
              position={[0, -6.5, 0]} 
              opacity={0.4} 
              scale={20} 
              blur={2.5} 
              far={10} 
            />
          )}

          <EffectComposer disableNormalPass multisampling={isMobile ? 0 : 8}>
            {/* Conditional Bloom: Only if not mobile or very low intensity */}
            {!isMobile && (
              <Bloom 
                luminanceThreshold={1} 
                mipmapBlur 
                intensity={1.2} 
                radius={0.4} 
              />
            )}
            <Vignette eskil={false} offset={0.1} darkness={1.1} />
            {!isMobile && <Noise opacity={0.04} />}
          </EffectComposer>
        </Suspense>

        <ambientLight intensity={isMobile ? 0.8 : 0.5} />
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

// Step 7: Preload Both Assets
useGLTF.preload('/dragon-hq.glb');
useGLTF.preload('/dragon-lite.glb', false, true, (loader) => {
  loader.setMeshoptDecoder(MeshoptDecoder);
});
