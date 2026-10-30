import { useEffect, useRef } from 'react';

const COLORS = ['243, 223, 181', '255, 255, 255']; // champagne, white
const MAX_BUBBLES = 60;

/**
 * Soap-bubble trail that follows the pointer across the whole page.
 * One fixed canvas, no pointer events; the loop sleeps when nothing is on screen.
 * Skipped entirely for users who prefer reduced motion.
 */
export default function BubbleTrail() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const bubbles = [];
    let raf = 0;
    let last = { x: 0, y: 0, t: 0 };
    let dpr = 1;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const spawn = (x, y, speed) => {
      const count = speed > 40 ? 2 : 1;
      for (let i = 0; i < count && bubbles.length < MAX_BUBBLES; i++) {
        bubbles.push({
          x: x + (Math.random() - 0.5) * 14,
          y: y + (Math.random() - 0.5) * 14,
          r: 2 + Math.random() * 5,
          vx: (Math.random() - 0.5) * 0.6,
          vy: -(0.4 + Math.random() * 1.1),
          wobble: Math.random() * Math.PI * 2,
          life: 0,
          max: 60 + Math.random() * 60,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);
      for (let i = bubbles.length - 1; i >= 0; i--) {
        const b = bubbles[i];
        b.life += 1;
        b.wobble += 0.08;
        b.x += b.vx + Math.sin(b.wobble) * 0.35;
        b.y += b.vy;
        b.vy *= 0.995;
        const p = b.life / b.max;
        if (p >= 1) {
          bubbles.splice(i, 1);
          continue;
        }
        // Grow in quickly, then fade out; the last frames swell slightly as if popping.
        const alpha = p < 0.15 ? p / 0.15 : 1 - (p - 0.15) / 0.85;
        const r = b.r * (p < 0.15 ? 0.5 + p / 0.3 : 1 + Math.max(0, p - 0.85) * 2);

        ctx.beginPath();
        ctx.arc(b.x, b.y, r, 0, Math.PI * 2);
        const fill = ctx.createRadialGradient(b.x - r * 0.3, b.y - r * 0.3, r * 0.1, b.x, b.y, r);
        fill.addColorStop(0, `rgba(${b.color}, 0)`);
        fill.addColorStop(0.8, `rgba(${b.color}, ${0.04 * alpha})`);
        fill.addColorStop(1, `rgba(${b.color}, ${0.12 * alpha})`);
        ctx.fillStyle = fill;
        ctx.fill();
        ctx.lineWidth = 0.75;
        ctx.strokeStyle = `rgba(${b.color}, ${0.32 * alpha})`;
        ctx.stroke();

        // Specular highlight
        ctx.beginPath();
        ctx.arc(b.x - r * 0.35, b.y - r * 0.35, Math.max(0.6, r * 0.16), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${0.45 * alpha})`;
        ctx.fill();
      }
      raf = bubbles.length ? requestAnimationFrame(draw) : 0;
    };

    const onMove = (e) => {
      const now = performance.now();
      const dist = Math.hypot(e.clientX - last.x, e.clientY - last.y);
      // Throttle by distance and time so slow moves leave a sparse trail.
      if (dist < 18 && now - last.t < 90) return;
      spawn(e.clientX, e.clientY, dist);
      last = { x: e.clientX, y: e.clientY, t: now };
      if (!raf) raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="bubble-trail" aria-hidden="true" />;
}
