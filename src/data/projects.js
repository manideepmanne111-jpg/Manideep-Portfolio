/**
 * Your projects. Replace the descriptions with what YOU actually built.
 *
 * image:  put screenshots in /public/projects/ and reference them as
 *         '/projects/shop.webp' (16:10 ratio looks best). Leave '' to use
 *         the built-in abstract cover.
 * github / live: leave '' to hide that button — no dead links.
 * category: used by the filter bar.
 */
export const projects = [
  {
    id: 'landing',
    title: 'Aether AI — Landing Page',
    category: 'Web Development',
    year: '',
    overview:
      'A responsive landing page for a fictional AI developer workspace, with glassmorphism styling, neon gradients and smooth navigation.',
    problem:
      'A product landing page has to explain features, pricing and social proof clearly — and look right on every screen size.',
    solution:
      'Semantic HTML with CSS custom properties, Flexbox and Grid for the layout, and vanilla JavaScript for the sticky header, mobile menu and smooth scrolling.',
    role: 'Sole developer — Oasis Infobyte internship, Level 1 Task 1.',
    contributions: [
      'Built a sticky navigation bar with a responsive mobile menu',
      'Designed a hero section with call-to-action buttons and stat counters',
      'Created a 6-card features grid with hover animations and an interactive terminal-style preview',
      'Added pricing tiers, testimonials and a footer, all responsive from mobile to desktop',
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    image: '',
    github: 'https://github.com/manideepmanne111-jpg/OIBSIP/tree/master/WebDev-L1-LandingPage',
    live: '',
    accent: 'teal',
  },
  {
    id: 'temperature',
    title: 'Temperature Converter',
    category: 'Web Development',
    year: '',
    overview:
      'A real-time converter between Celsius, Fahrenheit and Kelvin, with input validation and absolute-zero checks.',
    problem:
      'Simple converters often accept invalid input or physically impossible temperatures without warning.',
    solution:
      'Converts automatically as the user types or changes unit, shows all three units at once, and validates empty, non-numeric and below-absolute-zero input.',
    role: 'Sole developer — Oasis Infobyte internship, Level 1 Task 3.',
    contributions: [
      'Implemented real-time conversion across °C, °F and K with DOM manipulation',
      'Added clear error messages for empty and non-numeric input',
      'Warned users when a value falls below absolute zero (−273.15 °C / 0 K)',
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    image: '',
    github: 'https://github.com/manideepmanne111-jpg/OIBSIP/tree/master/WebDev-L1-TemperatureConverter',
    live: '',
    accent: 'gold',
  },
  {
    id: 'portfolio-l1',
    title: 'Personal Portfolio Website',
    category: 'Web Development',
    year: '',
    overview:
      'A dark-themed personal portfolio showing skills, projects and contact links, built with plain HTML, CSS and JavaScript.',
    problem:
      'A developer needs one clear place to present their background, skills and work to recruiters.',
    solution:
      'A single-page site with semantic sections, a categorised skills grid, project cards with tech tags and smooth-scroll navigation.',
    role: 'Sole developer — Oasis Infobyte internship, Level 1 Task 2.',
    contributions: [
      'Built hero, about, skills, projects and contact sections with semantic HTML',
      'Styled glassmorphism cards with CSS custom properties, Flexbox and Grid',
      'Made the layout responsive for mobile, tablet and desktop',
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    image: '',
    github: 'https://github.com/manideepmanne111-jpg/OIBSIP/tree/master/WebDev-L1-Portfolio',
    live: '',
    accent: 'teal',
  },
  {
    id: 'flood',
    title: 'Flood Prediction Using Machine Learning',
    category: 'Machine Learning',
    year: '',
    overview:
      'A machine learning model that predicts flood conditions from rainfall and river-level data.',
    problem:
      'Floods cause heavy damage, and early warning depends on understanding how environmental factors such as rainfall and river levels combine.',
    solution:
      'Cleaned and preprocessed environmental data, engineered features with Python and Pandas, trained a prediction model and evaluated it with R-squared and MAE.',
    role: 'Developer — data preparation, modelling and evaluation.',
    contributions: [
      'Developed a machine learning model to predict flood conditions using rainfall and river-level data',
      'Performed data cleaning, preprocessing and feature engineering using Python and Pandas',
      'Used environmental data to identify the most important factors affecting flood prediction',
      'Evaluated model performance using R-squared and MAE metrics',
    ],
    tech: ['Python', 'Pandas', 'Machine Learning', 'Jupyter Notebook'],
    image: '',
    github: 'https://github.com/manideepmanne111-jpg/Flood-Prediction-Using-Mchine-Learning',
    live: '',
    accent: 'teal',
  },
  {
    id: 'sentiment',
    title: 'Tourist Place Reviews Sentiment Classification',
    category: 'Machine Learning',
    year: '',
    overview:
      'An NLP pipeline that classifies 10K+ tourist reviews as Positive, Negative or Neutral.',
    problem:
      'Thousands of free-text tourist reviews are hard to read one by one, which makes customer-satisfaction trends difficult to spot.',
    solution:
      'Preprocessed the reviews with NLTK, converted text into features with TF-IDF and trained Naive Bayes and SVM classifiers to label each review’s sentiment.',
    role: 'Developer — text preprocessing, feature extraction, modelling and analysis.',
    contributions: [
      'Preprocessed 10K+ tourist reviews using NLTK: tokenization, stop-word removal and lemmatization',
      'Applied TF-IDF vectorization to convert text into machine-learning features',
      'Implemented Naive Bayes and SVM models to classify reviews into Positive, Negative and Neutral',
      'Analyzed tourist feedback to identify customer-satisfaction trends',
    ],
    tech: ['Python', 'NLTK', 'TF-IDF', 'Naive Bayes', 'SVM'],
    image: '',
    github: 'https://github.com/manideepmanne111-jpg/Tourist-Places-Reviews-Sentiment-Classification-Using-Machinelearning-Techniques',
    live: '',
    accent: 'gold',
  },
];
