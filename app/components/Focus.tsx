import { useEffect, useState, useRef } from "react";

export default function Focus() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsMoving(true);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        setIsMoving(false);
      }, 150);
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Aurora principal con múltiples capas */}
      <div
        className={`pointer-events-none fixed inset-0 z-30 transition-all duration-300 ${
          isMoving ? "opacity-100" : "opacity-60"
        }`}
        style={{
          background: `
            radial-gradient(circle 300px at ${mousePosition.x}px ${mousePosition.y}px, 
              rgba(59, 130, 246, 0.12) 0%, 
              rgba(147, 51, 234, 0.08) 25%, 
              rgba(236, 72, 153, 0.06) 50%, 
              transparent 70%),
            radial-gradient(circle 150px at ${mousePosition.x + 50}px ${mousePosition.y - 30}px, 
              rgba(34, 197, 94, 0.1) 0%, 
              transparent 50%),
            radial-gradient(circle 100px at ${mousePosition.x - 40}px ${mousePosition.y + 20}px, 
              rgba(251, 191, 36, 0.08) 0%, 
              transparent 60%)
          `,
        }}
      />

      {/* Aurora intensa central */}
      <div
        className={`pointer-events-none fixed inset-0 z-40 transition-all duration-200 ${
          isMoving ? "opacity-100" : "opacity-40"
        }`}
        style={{
          background: `radial-gradient(circle 80px at ${mousePosition.x}px ${mousePosition.y}px, 
            rgba(59, 130, 246, 0.3) 0%, 
            rgba(147, 51, 234, 0.2) 40%, 
            transparent 70%)`,
        }}
      />

      {/* Núcleo brillante */}
      <div
        className={`pointer-events-none fixed w-1 h-1 z-50 rounded-full transition-all duration-100 ${
          isMoving ? "opacity-100 scale-100" : "opacity-70 scale-75"
        }`}
        style={{
          left: mousePosition.x - 2,
          top: mousePosition.y - 2,
          background:
            "radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(59,130,246,0.8) 100%)",
          boxShadow: `
            0 0 10px rgba(59, 130, 246, 0.8),
            0 0 20px rgba(147, 51, 234, 0.6),
            0 0 30px rgba(236, 72, 153, 0.4)
          `,
        }}
      />

      {/* Partículas flotantes */}
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="pointer-events-none fixed w-1 h-1 z-45 rounded-full bg-white opacity-60 transition-all duration-300"
          style={{
            left:
              mousePosition.x +
              (i - 1) * 15 +
              Math.sin(Date.now() * 0.001 + i) * 10,
            top:
              mousePosition.y +
              (i - 1) * 10 +
              Math.cos(Date.now() * 0.001 + i) * 8,
            animationDelay: `${i * 0.1}s`,
            boxShadow: "0 0 5px rgba(255, 255, 255, 0.8)",
          }}
        />
      ))}
    </>
  );
}
