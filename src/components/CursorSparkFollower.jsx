import React, { useState, useEffect } from 'react';

/**
 * CursorSparkFollower Component (Easter Egg)
 * Subtle custom cursor follower that smoothly chases the mouse position across the screen,
 * casting an ambient emerald light halo and emitting gentle trailing sparks.
 */
export const CursorSparkFollower = () => {
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [sparks, setSparks] = useState([]);

  useEffect(() => {
    let mouseX = -100;
    let mouseY = -100;
    let chaseX = -100;
    let chaseY = -100;
    let animId;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setIsVisible(true);
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const onClick = (e) => {
      // Emit a burst of 6 gentle sparks on click
      const newSparks = Array.from({ length: 6 }).map((_, i) => ({
        id: Date.now() + i,
        x: e.clientX,
        y: e.clientY,
        vx: (Math.random() - 0.5) * 5,
        vy: (Math.random() - 0.5) * 5,
        alpha: 1,
        size: Math.random() * 3 + 2
      }));
      setSparks((prev) => [...prev.slice(-12), ...newSparks]);
    };

    const loop = () => {
      // Smooth LERP spring chase
      chaseX += (mouseX - chaseX) * 0.18;
      chaseY += (mouseY - chaseY) * 0.18;
      setTrailingPos({ x: chaseX, y: chaseY });

      // Update active particles
      setSparks((prev) =>
        prev
          .map((s) => ({
            ...s,
            x: s.x + s.vx,
            y: s.y + s.vy,
            alpha: s.alpha * 0.91,
            size: s.size * 0.96
          }))
          .filter((s) => s.alpha > 0.05)
      );

      animId = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('click', onClick);
    animId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('click', onClick);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block">
      {/* Subtle Ambient Halo */}
      <div
        className="fixed w-10 h-10 rounded-full bg-emerald-500/20 blur-md pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300"
        style={{
          left: `${trailingPos.x}px`,
          top: `${trailingPos.y}px`
        }}
      />
      {/* Crisp Trailing Spark Dot */}
      <div
        className="fixed w-2 h-2 rounded-full bg-lime-400 shadow-[0_0_10px_#a3e635] pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${trailingPos.x}px`,
          top: `${trailingPos.y}px`
        }}
      />
      {/* Click Burst Sparks */}
      {sparks.map((s) => (
        <div
          key={s.id}
          className="fixed rounded-full bg-emerald-400 shadow-[0_0_8px_#10b981] pointer-events-none -translate-x-1/2 -translate-y-1/2"
          style={{
            left: `${s.x}px`,
            top: `${s.y}px`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            opacity: s.alpha
          }}
        />
      ))}
    </div>
  );
};

export default CursorSparkFollower;
