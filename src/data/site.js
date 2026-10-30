/**
 * ─────────────────────────────────────────────────────────────
 *  PERSONAL DETAILS — edit this file first.
 *  Anything left as an empty string or null is hidden on the
 *  page instead of showing a placeholder or a dead link.
 * ─────────────────────────────────────────────────────────────
 */
export const site = {
  name: 'Manideep Manne',
  monogram: 'MM',
  // Hero photo: a background-free cutout in public/ (e.g. 'portrait.webp'). Leave '' to show the monogram.
  portrait: 'manideep.webp',
  // Round photo in the About section. Leave '' to reuse the hero photo.
  aboutPortrait: 'manideep-circle.webp',
  // true for a full photo with its background (shown as a framed card); false for a cutout.
  portraitFramed: true,
  role: 'Frontend & MERN Stack Developer',
  // Card on the hero photo. Set to null to hide.
  badge: { title: 'CSE (AI&ML) Graduate', subtitle: 'B.Tech · Class of 2026' },
  company: '',
  location: 'Hyderabad, India',

  // Hero
  headline: ['Responsive web apps,', 'built with care.'],
  intro:
    'Computer Science graduate building responsive, user-friendly web applications with React, Node.js, Express and MongoDB — backed by hands-on experience in data analytics and machine learning.',

  availability: {
    open: true,
    label: 'Open to entry-level Software & Frontend Developer roles',
  },

  // Put your PDF at public/resume.pdf (or change the path). Set to '' to hide the button.
  resumeUrl: 'resume.pdf',

  email: 'manideepmanne111@gmail.com',
  phone: '+91 9392592234',
  social: {
    github: 'https://github.com/manideepmanne111-jpg',
    linkedin: 'https://www.linkedin.com/in/manideep-manne-503771298',
    instagram: '',
    twitter: '', // optional
  },

  // About
  about: {
    summary: [
      'I am a Computer Science graduate (B.Tech in Artificial Intelligence and Machine Learning) with a strong foundation in web development and data analytics. I enjoy building responsive, user-friendly interfaces with HTML, CSS, JavaScript and React.',
      'I have hands-on experience building projects, working with REST APIs, managing databases and solving real-world technical problems. Right now I am focused on strengthening my frontend and full-stack development skills. I speak Telugu, English and Hindi.',
    ],
    philosophy: [
      { title: 'Problem-solving first', text: 'Understand the real problem and the data behind it before writing code — the same approach I used in my machine learning projects.' },
      { title: 'Responsive by default', text: 'Layouts that work on every screen size, from a small phone to a wide desktop.' },
      { title: 'Always learning', text: 'Steadily growing from frontend fundamentals into full-stack development with Node.js, Express and MongoDB.' },
    ],
    goals:
      'Seeking an entry-level Software Developer or Frontend Developer role where I can apply my technical knowledge and contribute to real-world projects.',
  },

  /**
   * Only add numbers you can back up in an interview.
   * Set value to null to hide a stat. If all are null the row is hidden.
   */
  stats: [
    { label: 'B.Tech CGPA', value: '7.96' },
    { label: 'Projects built', value: '3+' },
    { label: 'Certifications', value: '4+' },
  ],

  /**
   * Contact form. Messages are delivered to `email` through FormSubmit
   * (https://formsubmit.co). The very first message sends an activation
   * email to that address — click the link in it once and every message
   * after that arrives in your inbox.
   * To use another service, set VITE_FORM_ENDPOINT in a .env file.
   */
  formEndpoint: import.meta.env.VITE_FORM_ENDPOINT || 'https://formsubmit.co/ajax/manideepmanne111@gmail.com',
};
