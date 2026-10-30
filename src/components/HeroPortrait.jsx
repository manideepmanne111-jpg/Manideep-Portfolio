import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
const spring = { stiffness: 110, damping: 18, mass: 0.6 };

/**
 * Background-free portrait over a glow and an orbit ring. Each layer shifts
 * by a different amount as the pointer moves, so the stack reads as depth.
 * Without a `src`, the monogram stands in for the photo.
 */
export default function HeroPortrait({ src = '', framed = false, monogram = '', reducedMotion = false, alt = '' }) {
  const ref = useRef(null);
  // Pointer position relative to the portrait centre, normalised to -1..1.
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, spring);
  const sy = useSpring(py, spring);

  const tiltY = useTransform(sx, [-1, 1], [-9, 9]);
  const tiltX = useTransform(sy, [-1, 1], [6, -6]);
  const personX = useTransform(sx, [-1, 1], [-14, 14]);
  const personY = useTransform(sy, [-1, 1], [-8, 8]);
  const glowX = useTransform(sx, [-1, 1], [-36, 36]);
  const glowY = useTransform(sy, [-1, 1], [-24, 24]);

  useEffect(() => {
    if (reducedMotion) return undefined;
    const clamp = (v) => Math.max(-1, Math.min(1, v));
    const onMove = (e) => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      px.set(clamp((e.clientX - (r.left + r.width / 2)) / r.width));
      py.set(clamp((e.clientY - (r.top + r.height / 2)) / r.height));
    };
    const onLeave = () => {
      px.set(0);
      py.set(0);
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    document.documentElement.addEventListener('pointerleave', onLeave);
    return () => {
      window.removeEventListener('pointermove', onMove);
      document.documentElement.removeEventListener('pointerleave', onLeave);
    };
  }, [reducedMotion, px, py]);

  const live = (style) => (reducedMotion ? undefined : style);

  return (
    <div className="hero-portrait" ref={ref}>
      <motion.span className="hero-portrait__glow" aria-hidden="true" style={live({ x: glowX, y: glowY })} />
      <span className={`hero-portrait__ring ${reducedMotion ? '' : 'is-spinning'}`} aria-hidden="true" />

      <motion.div
        className={`hero-portrait__person ${framed ? 'is-framed' : ''}`}
        style={live({ x: personX, y: personY, rotateX: tiltX, rotateY: tiltY })}
      >
        {src ? (
          <motion.img
            src={src}
            alt={alt}
            draggable="false"
            animate={reducedMotion ? undefined : { y: [0, -6, 0] }}
            transition={{ duration: 6, ease: 'easeInOut', repeat: Infinity }}
          />
        ) : (
          <motion.span
            className="hero-portrait__mono"
            aria-hidden="true"
            animate={reducedMotion ? undefined : { y: [0, -6, 0] }}
            transition={{ duration: 6, ease: 'easeInOut', repeat: Infinity }}
          >
            {monogram}
          </motion.span>
        )}
      </motion.div>
    </div>
  );
}
