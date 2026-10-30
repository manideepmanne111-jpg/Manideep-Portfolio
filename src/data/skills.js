/**
 * Skills grouped by category. `note` is one honest line on how you use it —
 * this replaces meaningless percentage bars.
 */
export const skillGroups = [
  {
    id: 'frontend',
    label: 'Frontend',
    index: '01',
    summary: 'Where I spend most of my time.',
    skills: [
      { name: 'React.js', note: 'Components, hooks, props & state' },
      { name: 'JavaScript', note: 'ES6+, DOM manipulation, async/await' },
      { name: 'HTML5', note: 'Semantic, accessible markup' },
      { name: 'CSS3', note: 'Flexbox, grid, responsive layouts' },
    ],
  },
  {
    id: 'styling',
    label: 'Web',
    index: '02',
    summary: 'Fundamentals behind every project.',
    skills: [
      { name: 'Responsive Web Design', note: 'Mobile-first layouts for every screen' },
      { name: 'REST APIs', note: 'Consuming and building JSON APIs' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    index: '03',
    summary: 'Building the server side of full-stack apps.',
    skills: [
      { name: 'Node.js', note: 'Server-side JavaScript' },
      { name: 'Express.js', note: 'Routing and middleware' },
    ],
  },
  {
    id: 'database',
    label: 'Database',
    index: '04',
    summary: 'Storing and querying application data.',
    skills: [{ name: 'MongoDB', note: 'Document modelling and CRUD' }],
  },
  {
    id: 'tools',
    label: 'Tools',
    index: '05',
    summary: 'The workflow around the code.',
    skills: [
      { name: 'Git & GitHub', note: 'Version control and hosting' },
      { name: 'VS Code', note: 'Everyday editor' },
      { name: 'Vite', note: 'Fast React project setup' },
      { name: 'Jupyter Notebook', note: 'Data exploration and ML experiments' },
    ],
  },
  {
    id: 'ai',
    label: 'Data & Machine Learning',
    index: '06',
    summary: 'From my B.Tech in AI & ML.',
    skills: [
      { name: 'Python & Pandas', note: 'Data cleaning, preprocessing, feature engineering' },
      { name: 'NLTK & TF-IDF', note: 'Tokenisation, lemmatisation, text features' },
      { name: 'ML models', note: 'Naive Bayes, SVM; evaluated with R², MAE' },
    ],
  },
];
