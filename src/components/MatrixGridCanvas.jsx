import React, { useEffect, useRef } from 'react';

/**
 * MatrixGridCanvas Component
 * Renders an animated matrix-dot grid on an HTML5 canvas that:
 * 1. Gently shifts perspective based on mouse cursor position
 * 2. Ripples radially and disperses energy when the mouse moves over it
 * 3. Illuminates dots in crisp neon emerald (#10b981) and bright lime (#a3e635)
 * 4. Connects nearby energized dots with delicate cyber constellation lines
 */
export const MatrixGridCanvas = ({ rippleMultiplier = 1, showConstellations = true }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Smoothed mouse state
    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      isHovering: false,
      speed: 0
    };

    let lastMousePos = { x: width / 2, y: height / 2 };
    const shockwaves = [];

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.isHovering = true;

      const distMoved = Math.hypot(mouse.targetX - lastMousePos.x, mouse.targetY - lastMousePos.y);
      mouse.speed = Math.min(distMoved, 30);
      lastMousePos = { x: mouse.targetX, y: mouse.targetY };

      if (distMoved > 25 && shockwaves.length < 5) {
        shockwaves.push({
          x: mouse.targetX,
          y: mouse.targetY,
          radius: 5,
          maxRadius: 160 * rippleMultiplier,
          alpha: 0.6,
          speed: 4.5
        });
      }
    };

    const handleMouseLeave = () => {
      mouse.isHovering = false;
      mouse.targetX = width / 2;
      mouse.targetY = height / 2;
    };

    const handleClick = (e) => {
      const rect = canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;

      shockwaves.push({
        x: clickX,
        y: clickY,
        radius: 5,
        maxRadius: 280 * rippleMultiplier,
        alpha: 0.9,
        speed: 6.5
      });
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('click', handleClick);

    const spacing = width < 640 ? 26 : 32;
    let time = 0;

    const render = () => {
      time += 0.022;

      // LERP mouse coordinates
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      ctx.clearRect(0, 0, width, height);

      // Update shockwaves
      for (let i = shockwaves.length - 1; i >= 0; i--) {
        const sw = shockwaves[i];
        sw.radius += sw.speed;
        sw.alpha *= 0.96;
        if (sw.radius >= sw.maxRadius || sw.alpha <= 0.02) {
          shockwaves.splice(i, 1);
        }
      }

      const cols = Math.ceil(width / spacing) + 2;
      const rows = Math.ceil(height / spacing) + 2;

      const normX = (mouse.x - width / 2) / (width / 2);
      const normY = (mouse.y - height / 2) / (height / 2);
      const maxPerspectiveShift = 14;

      const points = [];

      for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
          const baseGridX = (c - 1) * spacing;
          const baseGridY = (r - 1) * spacing;

          // 3D Perspective tilt
          const depthFactor = (baseGridY / height) * 0.8 + 0.6;
          const perspX = baseGridX + normX * maxPerspectiveShift * depthFactor;
          const perspY = baseGridY + normY * maxPerspectiveShift * (baseGridX / width * 0.5 + 0.7);

          // Subtle organic idle wave
          const ambientRipple = Math.sin(c * 0.28 + time) * Math.cos(r * 0.28 + time * 0.8) * 2.5;

          // Interactive cursor ripple
          const distToMouse = Math.hypot(perspX - mouse.x, perspY - mouse.y);
          const interactionRadius = 180 * rippleMultiplier;
          let dispX = 0;
          let dispY = 0;
          let proximityFactor = 0;

          if (distToMouse < interactionRadius) {
            proximityFactor = 1 - distToMouse / interactionRadius;
            const angle = Math.atan2(perspY - mouse.y, perspX - mouse.x);
            const pushDist = Math.sin(proximityFactor * Math.PI) * 12 * rippleMultiplier;
            dispX = Math.cos(angle) * pushDist;
            dispY = Math.sin(angle) * pushDist;
          }

          // Shockwave ripple dispersion
          let shockwaveEffect = 0;
          for (let k = 0; k < shockwaves.length; k++) {
            const sw = shockwaves[k];
            const d = Math.hypot(perspX - sw.x, perspY - sw.y);
            const ringDist = Math.abs(d - sw.radius);
            if (ringDist < 40) {
              const ringFactor = (1 - ringDist / 40) * sw.alpha;
              shockwaveEffect += ringFactor;
              const angle = Math.atan2(perspY - sw.y, perspX - sw.x);
              dispX += Math.cos(angle) * ringFactor * 16;
              dispY += Math.sin(angle) * ringFactor * 16;
            }
          }

          const finalX = perspX + dispX;
          const finalY = perspY + dispY + ambientRipple;

          const intensity = Math.min(1, proximityFactor * 1.2 + shockwaveEffect);
          const dotRadius = 1.1 + intensity * 2.2;

          let dotColor;
          if (intensity > 0.6) {
            dotColor = `rgba(163, 230, 53, ${0.4 + intensity * 0.55})`;
          } else if (intensity > 0.15) {
            dotColor = `rgba(16, 185, 129, ${0.25 + intensity * 0.6})`;
          } else {
            dotColor = 'rgba(16, 185, 129, 0.14)';
          }

          ctx.beginPath();
          ctx.arc(finalX, finalY, dotRadius, 0, Math.PI * 2);
          ctx.fillStyle = dotColor;

          if (intensity > 0.4) {
            ctx.shadowColor = intensity > 0.7 ? '#a3e635' : '#10b981';
            ctx.shadowBlur = 8 * intensity;
          } else {
            ctx.shadowBlur = 0;
          }

          ctx.fill();

          if (showConstellations && distToMouse < 90 && intensity > 0.3) {
            points.push({ x: finalX, y: finalY, intensity });
          }
        }
      }

      // Constellation lines
      if (showConstellations && points.length > 0) {
        ctx.shadowBlur = 0;
        for (let i = 0; i < points.length; i++) {
          for (let j = i + 1; j < points.length; j++) {
            const p1 = points[i];
            const p2 = points[j];
            const d = Math.hypot(p1.x - p2.x, p1.y - p2.y);
            if (d < 50) {
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              const lineAlpha = (1 - d / 50) * Math.min(p1.intensity, p2.intensity) * 0.35;
              ctx.strokeStyle = `rgba(16, 185, 129, ${lineAlpha})`;
              ctx.lineWidth = 0.8;
              ctx.stroke();
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('click', handleClick);
    };
  }, [rippleMultiplier, showConstellations]);

  return (
    <canvas
      ref={canvasRef}
      id="matrix-dot-grid"
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.95 }}
      aria-hidden="true"
    />
  );
};

export default MatrixGridCanvas;
