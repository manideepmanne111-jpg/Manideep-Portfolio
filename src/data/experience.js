/**
 * Education and certifications timeline, newest first.
 * type: 'internship' | 'education' | 'certification' — shown as separate tracks.
 * points and tech are optional.
 */
export const experience = [
  {
    type: 'internship',
    role: 'Web Development & Designing Intern',
    company: 'Oasis Infobyte',
    period: '',
    location: '',
    summary: 'Completed the Level 1 web development tasks with HTML, CSS and JavaScript.',
    points: [
      'Built a responsive product landing page with a sticky navbar, features grid, pricing and testimonials',
      'Built a personal portfolio website with skills, projects and contact sections',
      'Built a real-time temperature converter with input validation',
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    type: 'education',
    role: 'B.Tech in Artificial Intelligence and Machine Learning',
    company: 'Mallareddy Institute of Technology and Science',
    period: '2022 – 2026',
    location: 'Maisammaguda, Hyderabad',
    summary: 'CGPA: 7.96',
    points: [
      'Built a flood prediction model and a sentiment classifier for tourist reviews',
      'Studied web development alongside machine learning and data analytics',
    ],
    tech: ['Python', 'Machine Learning', 'Data Analytics'],
  },
  {
    type: 'certification',
    role: 'GenAI for Proposal Generation Job Simulation',
    company: 'EAB · Forage',
    period: '',
    location: '',
    summary: 'Virtual job simulation on using generative AI to create proposals.',
  },
  {
    type: 'certification',
    role: 'Gen-AI Data Analytics Job Simulation',
    company: 'Tata · Forage',
    period: '',
    location: '',
    summary: 'Virtual job simulation on applying generative AI to data analytics.',
  },
  {
    type: 'education',
    role: 'Board of Intermediate Education',
    company: 'Sandeepani Junior College',
    period: '2020 – 2022',
    location: 'Kamareddy',
    summary: 'CGPA: 8.5',
  },
  {
    type: 'education',
    role: 'Board of Secondary Education',
    company: 'Vignann High School',
    period: '2020',
    location: 'Bikknoor',
    summary: 'CGPA: 10',
  },
];

export const processSteps = [
  { n: '01', title: 'Understand requirements', text: 'Clarify the users, the goal and the constraints. Agree on what “done” looks like before writing code.' },
  { n: '02', title: 'Plan the structure', text: 'Map pages, components and data flow, and decide where state lives.' },
  { n: '03', title: 'Design the interface', text: 'Lay out key screens and every state — empty, loading and error — before polishing.' },
  { n: '04', title: 'Build reusable components', text: 'Small React components with clear props, so features fit together cleanly.' },
  { n: '05', title: 'Test responsiveness & function', text: 'Check every breakpoint, keyboard path and edge case on real devices.' },
  { n: '06', title: 'Optimise & deploy', text: 'Trim what is not needed, build for production with Vite and deploy.' },
];
