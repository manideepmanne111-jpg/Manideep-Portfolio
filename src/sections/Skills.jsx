import { skillGroups } from '../data/skills.js';
import SectionHeading from '../components/SectionHeading.jsx';
import SkillCard from '../components/SkillCard.jsx';
import Reveal from '../components/Reveal.jsx';

export default function Skills() {
  return (
    <section id="skills" className="section section--alt" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeading
          index="02"
          eyebrow="Capabilities"
          id="skills-title"
          title={<>A focused, <em>full-stack</em> toolkit.</>}
          lede="No percentage bars — just what I use and how I use it."
        />
        <div className="skills-grid">
          {skillGroups.map((g, i) => (
            <Reveal key={g.id} delay={i * 0.05} className={`skills-grid__cell skills-grid__cell--${g.id}`}>
              <SkillCard group={g} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
