import { ArrowUp } from 'lucide-react';
import { site } from '../data/site.js';
import SocialLinks from './SocialLinks.jsx';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="monogram" aria-hidden="true">{site.monogram}</span>
          <p>
            &copy; {year} {site.name}. Designed and built with React &amp; Framer Motion.
          </p>
        </div>
        <SocialLinks withEmail withPhone />
        <a href="#home" className="footer__top">
          Back to top <ArrowUp size={16} aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
