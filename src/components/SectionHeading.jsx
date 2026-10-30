import Reveal from './Reveal.jsx';

/** Editorial section header: index + eyebrow, serif title, optional lede. */
export default function SectionHeading({ index, eyebrow, title, lede, id, align = 'left' }) {
  return (
    <Reveal className={`section-heading section-heading--${align}`}>
      <p className="eyebrow">
        <span className="eyebrow__index">{index}</span>
        <span className="eyebrow__rule" aria-hidden="true" />
        <span>{eyebrow}</span>
      </p>
      <h2 id={id} className="section-title">
        {title}
      </h2>
      {lede && <p className="section-lede">{lede}</p>}
    </Reveal>
  );
}
