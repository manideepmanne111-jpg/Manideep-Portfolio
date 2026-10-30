import { useRef } from 'react';

/**
 * Category card with a restrained 3D tilt (max 4°) on fine pointers only.
 * Writes CSS variables directly — no React state, so no re-renders on move.
 */
export default function SkillCard({ group }) {
  const ref = useRef(null);

  const onMove = (e) => {
    if (e.pointerType !== 'mouse' || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    ref.current.style.setProperty('--rx', `${(-py * 4).toFixed(2)}deg`);
    ref.current.style.setProperty('--ry', `${(px * 4).toFixed(2)}deg`);
    ref.current.style.setProperty('--mx', `${((px + 0.5) * 100).toFixed(1)}%`);
    ref.current.style.setProperty('--my', `${((py + 0.5) * 100).toFixed(1)}%`);
  };
  const onLeave = () => {
    ref.current?.style.setProperty('--rx', '0deg');
    ref.current?.style.setProperty('--ry', '0deg');
  };

  return (
    <article ref={ref} className={`skill-card skill-card--${group.id}`} onPointerMove={onMove} onPointerLeave={onLeave}>
      <header className="skill-card__head">
        <span className="skill-card__index">{group.index}</span>
        <h3 className="skill-card__title">{group.label}</h3>
        <p className="skill-card__summary">{group.summary}</p>
      </header>
      <ul role="list" className="skill-card__list">
        {group.skills.map((s) => (
          <li key={s.name} className="skill-chip">
            <span className="skill-chip__name">{s.name}</span>
            <span className="skill-chip__note">{s.note}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
