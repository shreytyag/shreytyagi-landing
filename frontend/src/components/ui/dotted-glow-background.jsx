import React, { useEffect, useRef } from 'react';

export function DottedGlowBackground({
  className = '',
  opacity = 1,
  gap = 10,
  radius = 1.6,
  colorLightVar = '--color-neutral-500',
  glowColorLightVar = '--color-neutral-600',
  colorDarkVar = '--color-neutral-500',
  glowColorDarkVar = '--color-sky-800',
  backgroundOpacity = 0,
  speedMin = 0.3,
  speedMax = 1.6,
  speedScale = 1,
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const isDarkMode = document.documentElement.getAttribute('data-theme') === 'dark';
    
    // Set canvas size
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const dots = [];
    const dotRadius = radius;
    const gapSize = gap;

    // Create grid of dots
    for (let x = 0; x < rect.width; x += gapSize) {
      for (let y = 0; y < rect.height; y += gapSize) {
        dots.push({
          x,
          y,
          baseX: x,
          baseY: y,
          opacity: Math.random() * 0.5 + 0.25,
          speed: (Math.random() * (speedMax - speedMin) + speedMin) * speedScale,
          direction: Math.random() * Math.PI * 2,
        });
      }
    }

    let animationFrameId;
    const startTime = Date.now();

    const animate = () => {
      ctx.clearRect(0, 0, rect.width, rect.height);

      const elapsed = (Date.now() - startTime) / 1000;
      const color = isDarkMode ? 'rgba(148, 163, 184, ' : 'rgba(115, 115, 115, ';

      dots.forEach((dot) => {
        const x = dot.baseX + Math.cos(dot.direction + elapsed * dot.speed) * 2;
        const y = dot.baseY + Math.sin(dot.direction + elapsed * dot.speed) * 2;

        // Draw dot
        ctx.fillStyle = color + (dot.opacity * opacity) + ')';
        ctx.beginPath();
        ctx.arc(x, y, dotRadius, 0, Math.PI * 2);
        ctx.fill();

        // Draw glow
        const glowColor = isDarkMode 
          ? 'rgba(120, 119, 198, ' 
          : 'rgba(168, 85, 247, ';
        ctx.fillStyle = glowColor + (dot.opacity * opacity * 0.3) + ')';
        ctx.beginPath();
        ctx.arc(x, y, dotRadius * 3, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleThemeChange = () => {
      // Trigger re-render on theme change
    };

    window.addEventListener('themechange', handleThemeChange);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('themechange', handleThemeChange);
    };
  }, [opacity, gap, radius, speedMin, speedMax, speedScale]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        position: 'absolute',
        inset: 0,
        opacity,
        backgroundColor: `rgba(0, 0, 0, ${backgroundOpacity})`,
      }}
    />
  );
}
