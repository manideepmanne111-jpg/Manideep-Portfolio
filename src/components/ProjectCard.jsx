import { ArrowUpRight, Info } from 'lucide-react';
import ProjectCover from './ProjectCover.jsx';

/**
 * Clicking the card opens the live project (or its output) in a new tab.
 * Projects without a live link open the case study instead.
 */
export default function ProjectCard({ project, index, onOpen }) {
  const hasLive = Boolean(project.live);

  return (
    <article className="project-card">
      {hasLive ? (
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer noopener"
          className="project-card__hit"
          aria-label={`Open live project: ${project.title} (opens in a new tab)`}
        />
      ) : (
        <button
          type="button"
          className="project-card__hit"
          onClick={() => onOpen(project)}
          aria-haspopup="dialog"
          aria-label={`Open case study: ${project.title}`}
        />
      )}
      <div className="project-card__media">
        <ProjectCover project={project} priority={index === 0} />
      </div>
      <div className="project-card__body">
        <p className="project-card__meta">
          <span>{String(index + 1).padStart(2, '0')}</span>
          <span className="dot" aria-hidden="true" />
          <span>{project.category}</span>
          {project.year && (
            <>
              <span className="dot" aria-hidden="true" />
              <span>{project.year}</span>
            </>
          )}
        </p>
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__overview">{project.overview}</p>
        <ul role="list" className="tags">
          {project.tech.map((t) => (
            <li key={t} className="tag">
              {t}
            </li>
          ))}
        </ul>
        <div className="project-card__foot">
          <span className="project-card__cta" aria-hidden="true">
            {hasLive ? project.liveLabel || 'View live project' : 'View case study'} <ArrowUpRight size={16} />
          </span>
          {hasLive && (
            <button
              type="button"
              className="project-card__details"
              onClick={() => onOpen(project)}
              aria-haspopup="dialog"
              aria-label={`Project details: ${project.title}`}
            >
              <Info size={15} aria-hidden="true" /> Details
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
