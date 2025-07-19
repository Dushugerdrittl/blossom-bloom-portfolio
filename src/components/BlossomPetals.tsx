import { useEffect, useState } from 'react';

interface Petal {
  id: number;
  delay: number;
  size: number;
  left: number;
  color: 'pink' | 'blue';
}

const BlossomPetals = () => {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const generatePetals = () => {
      const newPetals: Petal[] = [];
      for (let i = 0; i < 15; i++) {
        newPetals.push({
          id: i,
          delay: Math.random() * 8,
          size: Math.random() * 8 + 4,
          left: Math.random() * 100,
          color: Math.random() > 0.6 ? 'blue' : 'pink'
        });
      }
      setPetals(newPetals);
    };

    generatePetals();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className={`absolute rounded-full opacity-60 ${
            petal.color === 'pink' ? 'bg-blossom-pink' : 'bg-blossom-blue'
          }`}
          style={{
            width: `${petal.size}px`,
            height: `${petal.size}px`,
            left: `${petal.left}%`,
            animationDelay: `${petal.delay}s`,
            animationDuration: `${8 + Math.random() * 4}s`
          }}
        >
          <div className={`w-full h-full rounded-full animate-blossom-float ${
            Math.random() > 0.5 ? 'animate-blossom-float-slow' : 'animate-blossom-float-fast'
          }`} />
        </div>
      ))}
    </div>
  );
};

export default BlossomPetals;