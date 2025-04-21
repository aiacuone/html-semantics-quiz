interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export const questions: Question[] = [
  {
    id: 1,
    question:
      'Which HTML element is used for the main content area of a document?',
    options: ['<div>', '<main>', '<content>', '<body>'],
    correctAnswer: '<main>',
    explanation:
      'The <main> element represents the main content of a document. It should be unique to the document and should not include content that is repeated across documents.',
  },
  {
    id: 2,
    question: 'What is the correct semantic element for navigation links?',
    options: ['<links>', '<nav>', '<navigation>', '<menu>'],
    correctAnswer: '<nav>',
    explanation:
      'The <nav> element represents a section of a page that contains navigation links, either within the current document or to other documents.',
  },
  {
    id: 3,
    question:
      'Which element should be used for the footer section of a document or section?',
    options: ['<bottom>', '<footer>', '<end>', '<section>'],
    correctAnswer: '<footer>',
    explanation:
      'The <footer> element represents a footer for its nearest ancestor sectioning content or sectioning root element.',
  },
  {
    id: 4,
    question: 'What is the proper semantic element for a standalone article?',
    options: ['<content>', '<section>', '<article>', '<div>'],
    correctAnswer: '<article>',
    explanation:
      'The <article> element represents a self-contained composition that is intended to be independently distributable or reusable.',
  },
  {
    id: 5,
    question: 'Which element is used to define a header section?',
    options: ['<head>', '<top>', '<header>', '<heading>'],
    correctAnswer: '<header>',
    explanation:
      'The <header> element represents introductory content, typically a group of introductory or navigational aids.',
  },
  {
    id: 6,
    question:
      'What element should be used for a sidebar or complementary content?',
    options: ['<sidebar>', '<complementary>', '<aside>', '<extra>'],
    correctAnswer: '<aside>',
    explanation:
      'The <aside> element represents content that is tangentially related to the content around it, often presented as sidebars or call-out boxes.',
  },
  {
    id: 7,
    question: 'Which element is used to mark text that has strong importance?',
    options: ['<bold>', '<strong>', '<important>', '<b>'],
    correctAnswer: '<strong>',
    explanation:
      'The <strong> element indicates strong importance, seriousness, or urgency for its contents.',
  },
  {
    id: 8,
    question:
      'What is the correct element for defining a section in a document?',
    options: ['<div>', '<part>', '<section>', '<area>'],
    correctAnswer: '<section>',
    explanation:
      'The <section> element represents a standalone section of content that is thematically grouped together.',
  },
  {
    id: 9,
    question: 'Which element should be used for emphasized text?',
    options: ['<i>', '<italic>', '<em>', '<emphasize>'],
    correctAnswer: '<em>',
    explanation:
      'The <em> element marks text that has stress emphasis, which can change the meaning of a sentence.',
  },
  {
    id: 10,
    question: 'What element represents a figure with optional caption?',
    options: ['<img>', '<figure>', '<picture>', '<image>'],
    correctAnswer: '<figure>',
    explanation:
      'The <figure> element represents self-contained content, potentially with an optional caption specified using <figcaption>.',
  },
  {
    id: 11,
    question: 'Which element is used to define a time or date?',
    options: ['<date>', '<time>', '<datetime>', '<clock>'],
    correctAnswer: '<time>',
    explanation:
      'The <time> element represents a specific period in time, optionally with a machine-readable timestamp.',
  },
  {
    id: 12,
    question: 'What element should be used for marking up contact information?',
    options: ['<contact>', '<info>', '<address>', '<details>'],
    correctAnswer: '<address>',
    explanation:
      'The <address> element indicates contact information for a person, people or organization.',
  },
  {
    id: 13,
    question:
      'Which element represents a contained piece of content that is entirely quoted from another source?',
    options: ['<quote>', '<blockquote>', '<q>', '<cite>'],
    correctAnswer: '<blockquote>',
    explanation:
      'The <blockquote> element represents a section that is quoted from another source.',
  },
  {
    id: 14,
    question: 'What element should be used for marking up keyboard input?',
    options: ['<input>', '<key>', '<kbd>', '<keyboard>'],
    correctAnswer: '<kbd>',
    explanation:
      'The <kbd> element represents user input typically entered via keyboard.',
  },
  {
    id: 15,
    question:
      'Which element represents a generic document or application section?',
    options: ['<div>', '<container>', '<section>', '<content>'],
    correctAnswer: '<section>',
    explanation:
      'The <section> element represents a generic section of a document or application, which generally contains a heading.',
  },
  {
    id: 16,
    question: "What element should be used for a page's primary heading?",
    options: ['<header>', '<heading>', '<h1>', '<title>'],
    correctAnswer: '<h1>',
    explanation:
      'The <h1> element represents the primary heading of a section, typically the title of the page or section.',
  },
  {
    id: 17,
    question: 'Which element represents a thematic break between paragraphs?',
    options: ['<break>', '<hr>', '<line>', '<separator>'],
    correctAnswer: '<hr>',
    explanation:
      'The <hr> element represents a thematic break between paragraph-level elements.',
  },
  {
    id: 18,
    question: 'What element should be used for a description or value term?',
    options: ['<description>', '<term>', '<dt>', '<def>'],
    correctAnswer: '<dt>',
    explanation:
      'The <dt> element specifies a term in a description or definition list.',
  },
  {
    id: 19,
    question:
      'Which element represents a self-contained composition that could be distributed independently?',
    options: ['<content>', '<section>', '<article>', '<post>'],
    correctAnswer: '<article>',
    explanation:
      'The <article> element represents a complete, self-contained composition that could be distributed independently.',
  },
  {
    id: 20,
    question: 'What element should be used for a figure caption?',
    options: ['<caption>', '<figcaption>', '<figurecaption>', '<desc>'],
    correctAnswer: '<figcaption>',
    explanation:
      'The <figcaption> element represents a caption or legend for a figure element.',
  },
  {
    id: 21,
    question:
      'Which element represents text marked or highlighted for reference?',
    options: ['<highlight>', '<mark>', '<reference>', '<marker>'],
    correctAnswer: '<mark>',
    explanation:
      'The <mark> element represents text marked or highlighted for reference or notation purposes.',
  },
  {
    id: 22,
    question: 'What element should be used for a short inline quotation?',
    options: ['<quote>', '<q>', '<blockquote>', '<cite>'],
    correctAnswer: '<q>',
    explanation: 'The <q> element represents a short inline quotation.',
  },
  {
    id: 23,
    question: 'Which element represents sample output from a computer program?',
    options: ['<code>', '<output>', '<samp>', '<pre>'],
    correctAnswer: '<samp>',
    explanation:
      'The <samp> element represents sample output from a computer program.',
  },
  {
    id: 24,
    question:
      'What element should be used for a generic container with no semantic meaning?',
    options: ['<container>', '<div>', '<section>', '<span>'],
    correctAnswer: '<div>',
    explanation:
      'The <div> element is a generic container that has no semantic meaning but can be useful for styling purposes.',
  },
  {
    id: 25,
    question:
      'Which element represents a summary or caption for a details element?',
    options: ['<summary>', '<caption>', '<title>', '<header>'],
    correctAnswer: '<summary>',
    explanation:
      "The <summary> element represents a summary, caption, or legend for a <details> element's disclosure box.",
  },
  {
    id: 26,
    question: 'What element should be used for a definition description?',
    options: ['<desc>', '<definition>', '<dd>', '<def>'],
    correctAnswer: '<dd>',
    explanation:
      'The <dd> element provides the description, definition, or value for the preceding term (<dt>) in a description list.',
  },
  {
    id: 27,
    question:
      'Which element represents text that has been deleted from a document?',
    options: ['<remove>', '<del>', '<strike>', '<deleted>'],
    correctAnswer: '<del>',
    explanation:
      'The <del> element represents text that has been deleted from a document.',
  },
  {
    id: 28,
    question:
      'What element should be used for text that is no longer accurate or relevant?',
    options: ['<outdated>', '<old>', '<s>', '<strike>'],
    correctAnswer: '<s>',
    explanation:
      'The <s> element represents text that is no longer accurate or relevant.',
  },
  {
    id: 29,
    question:
      'Which element represents a control that enables selection among a set of options?',
    options: ['<select>', '<option>', '<input>', '<choose>'],
    correctAnswer: '<select>',
    explanation:
      'The <select> element represents a control that provides a menu of options.',
  },
  {
    id: 30,
    question:
      'What element should be used for a section containing form controls?',
    options: ['<form>', '<controls>', '<fieldset>', '<section>'],
    correctAnswer: '<fieldset>',
    explanation:
      'The <fieldset> element is used to group related form controls and labels.',
  },
];
