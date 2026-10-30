import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { site } from '../data/site.js';
import { useActiveSection } from '../hooks/useActiveSection.js';

export const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];
const IDS = NAV_ITEMS.map((n) => n.id);

export default function Navbar() {
  const active = useActiveSection(IDS);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const toggleRef = useRef(null);
  const panelRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Mobile menu: lock scroll, close on Escape, return focus to toggle.
  useEffect(() => {
    if (!open) return undefined;
    document.body.style.overflow = 'hidden';
    panelRef.current?.querySelector('a')?.focus();
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
      toggleRef.current?.focus();
    };
  }, [open]);

  useEffect(() => {
    const mql = window.matchMedia('(min-width: 1080px)');
    const close = () => mql.matches && setOpen(false);
    mql.addEventListener('change', close);
    return () => mql.removeEventListener('change', close);
  }, []);

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''} ${open ? 'nav--open' : ''}`}>
      <div className="nav__inner container">
        <a href="#home" className="nav__brand" aria-label={`${site.name} — back to top`}>
          <span className="monogram" aria-hidden="true">{site.monogram}</span>
          <span className="nav__name">
            {site.name}
            <span className="nav__name-dot" aria-hidden="true">.</span>
          </span>
        </a>

        <nav aria-label="Primary" className="nav__desktop">
          <ul role="list" className="nav__list">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`nav__link ${active === item.id ? 'is-active' : ''}`}
                  aria-current={active === item.id ? 'true' : undefined}
                >
                  {item.label}
                  {active === item.id && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="nav__indicator"
                      transition={reduce ? { duration: 0 } : { type: 'spring', stiffness: 420, damping: 36 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className="btn btn--primary btn--sm nav__cta">
          <span>Let&rsquo;s talk</span>
          <ArrowUpRight size={16} aria-hidden="true" className="btn__icon" />
        </a>

        <button
          ref={toggleRef}
          type="button"
          className="nav__toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div id="mobile-menu" ref={panelRef} className="nav__mobile" hidden={!open}>
        <nav aria-label="Mobile">
          <ul role="list">
            {NAV_ITEMS.map((item, i) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className={active === item.id ? 'is-active' : ''}
                  aria-current={active === item.id ? 'true' : undefined}
                >
                  <span className="nav__mobile-index">0{i + 1}</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a href="#contact" className="btn btn--primary btn--lg" onClick={() => setOpen(false)}>
          <span>Let&rsquo;s talk</span>
          <ArrowUpRight size={16} aria-hidden="true" className="btn__icon" />
        </a>
      </div>
    </header>
  );
}
