import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, Download, GraduationCap, MapPin, Phone } from 'lucide-react';
import { site } from '../data/site.js';
import Button from '../components/Button.jsx';
import SocialLinks from '../components/SocialLinks.jsx';
import HeroPortrait from '../components/HeroPortrait.jsx';
import { useFileExists } from '../hooks/useFileExists.js';

const ease = [0.22, 1, 0.36, 1];

export default function Hero() {
  const reduce = useReducedMotion();
  const hasResume = useFileExists(site.resumeUrl);

  const rise = (delay) =>
    reduce
      ? {}
      : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, ease, delay } };

  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero__backdrop" aria-hidden="true">
        <div className="hero__grid" />
      </div>

      <div className="container hero__inner">
        <div className="hero__copy">
          <motion.h1 id="hero-title" className="hero__title" {...rise(0)}>
            <span className="hero__hello">Hi, I&rsquo;m</span> <span className="hero__name">{site.name}</span>
          </motion.h1>

          {site.availability?.open && (
            <motion.p className="status" {...rise(0.08)}>
              <span className="status__dot" aria-hidden="true" />
              {site.availability.label}
            </motion.p>
          )}

          <motion.p className="hero__role" {...rise(0.12)}>
            {site.role}
          </motion.p>

          <motion.p className="hero__tagline" {...rise(0.16)}>
            {site.headline[0]} <span className="hero__line--accent">{site.headline[1]}</span>
          </motion.p>

          <motion.p className="hero__intro" {...rise(0.2)}>
            {site.intro}
          </motion.p>

          <motion.div className="hero__actions" {...rise(0.26)}>
            <Button href="#projects" size="lg" icon={ArrowDown}>
              Explore my work
            </Button>
            {hasResume && (
              <Button href={site.resumeUrl} variant="ghost" size="lg" icon={Download} download external={false}>
                Download résumé
              </Button>
            )}
          </motion.div>

          <motion.div className="hero__foot" {...rise(0.34)}>
            <SocialLinks withEmail />
            {site.phone && (
              <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="hero__loc hero__phone">
                <Phone size={14} aria-hidden="true" /> {site.phone}
              </a>
            )}
            {site.location && (
              <span className="hero__loc">
                <MapPin size={14} aria-hidden="true" /> {site.location}
              </span>
            )}
          </motion.div>
        </div>

        <motion.div className="hero__visual" {...rise(0.2)}>
          <div className="hero__plinth" aria-hidden="true" />
          <HeroPortrait src={site.portrait} framed={site.portraitFramed} monogram={site.monogram} reducedMotion={!!reduce} alt={`Portrait of ${site.name}`} />
          {site.badge && (
            <div className="hero-card">
              <span className="hero-card__icon">
                <GraduationCap size={22} aria-hidden="true" />
              </span>
              <span className="hero-card__text">
                <strong>{site.badge.title}</strong>
                <span>{site.badge.subtitle}</span>
              </span>
            </div>
          )}
        </motion.div>
      </div>

      <a href="#about" className="hero__scroll">
        <span>Scroll</span>
        <span className="hero__scroll-line" aria-hidden="true" />
      </a>
    </section>
  );
}
