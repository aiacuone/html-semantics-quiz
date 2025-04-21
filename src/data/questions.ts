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
  {
    id: 31,
    question:
      'In what order should heading elements typically appear in a document?',
    options: [
      'Any order is fine as long as they look right',
      'Start with h1 and use h2-h6 in sequential order without skipping levels',
      'Use h1-h6 in any order based on design needs',
      'Only the visual size matters, not the heading level',
    ],
    correctAnswer:
      'Start with h1 and use h2-h6 in sequential order without skipping levels',
    explanation:
      'Heading elements should follow a logical hierarchy starting with one <h1> per page, followed by h2-h6 in sequential order without skipping levels. This maintains proper document outline and accessibility.',
  },
  {
    id: 32,
    question: 'When should you use <article> versus <section> elements?',
    options: [
      '<article> is for blog posts only, <section> is for everything else',
      '<article> for independent content, <section> for thematic grouping',
      'They are interchangeable, use either one',
      '<section> is for articles, <article> is for sections',
    ],
    correctAnswer:
      '<article> for independent content, <section> for thematic grouping',
    explanation:
      "Use <article> for self-contained content that could be distributed independently (like blog posts, news articles, comments). Use <section> for thematic grouping of content that makes sense together but isn't necessarily independent.",
  },
  {
    id: 33,
    question:
      'What is the correct nesting pattern for a typical web page layout?',
    options: [
      '<main> inside <header>, then <article>',
      '<body> > <header>, <main>, <footer> with <nav> typically in header',
      '<div> elements for all major sections',
      'Put everything inside <main>',
    ],
    correctAnswer:
      '<body> > <header>, <main>, <footer> with <nav> typically in header',
    explanation:
      'A semantic page structure typically has <header> (containing navigation), <main> (primary content), and <footer> as direct children of <body>. This provides a clear document outline and improves accessibility.',
  },
  {
    id: 34,
    question: 'How should content within an <article> element be structured?',
    options: [
      'No specific structure needed',
      '<header> with title, content sections, optional <footer>',
      'Just paragraphs of text',
      'Only <div> elements allowed',
    ],
    correctAnswer: '<header> with title, content sections, optional <footer>',
    explanation:
      "An <article> should typically contain a <header> with the article's title (using appropriate heading level), followed by content (which may include <section> elements), and optionally a <footer> for metadata like author, date, etc.",
  },
  {
    id: 35,
    question: 'What is the proper way to structure a <section> element?',
    options: [
      'Any content without a heading is fine',
      'Must start with a heading element (h1-h6)',
      'Only paragraph content allowed',
      'Headings are optional in sections',
    ],
    correctAnswer: 'Must start with a heading element (h1-h6)',
    explanation:
      'Each <section> element should begin with a heading element (h1-h6) that describes its content. This creates a proper document outline and helps with accessibility and navigation.',
  },
  {
    id: 36,
    question:
      'What is the correct way to structure a blog homepage with multiple articles?',
    options: [
      '<div> elements for each blog post',
      '<main> containing multiple <article> elements',
      'One big <section> with all posts',
      'Separate <main> for each post',
    ],
    correctAnswer: '<main> containing multiple <article> elements',
    explanation:
      'A blog homepage should use <main> as the primary content container, with each blog post preview wrapped in its own <article> element. This maintains proper semantic structure and indicates that each post is a self-contained piece of content.',
  },
  {
    id: 37,
    question:
      'How should sidebar content be structured in relation to the main content?',
    options: [
      'Inside <main> alongside primary content',
      'As an <aside> element outside of <main>',
      'Using <div> elements anywhere',
      'Inside <footer> at the bottom',
    ],
    correctAnswer: 'As an <aside> element outside of <main>',
    explanation:
      'Sidebar content should be placed in an <aside> element at the same level as <main>, not inside it. This indicates that the content is complementary to the main content but not part of the primary content flow.',
  },
  {
    id: 38,
    question:
      'What is the proper nesting order for a complex article with multiple sections?',
    options: [
      '<article> > <section>s > headings > content',
      '<section> > <article> > content',
      'Mix <article> and <section> freely',
      'Only use <div> elements for sections',
    ],
    correctAnswer: '<article> > <section>s > headings > content',
    explanation:
      'For a complex article, start with an <article> container, then divide it into <section>s as needed. Each section should start with an appropriate heading level, followed by its content. This creates a clear content hierarchy.',
  },
  {
    id: 39,
    question:
      'Where should navigation elements be placed in a semantic layout?',
    options: [
      'Anywhere convenient in the design',
      'Primary in <header>, secondary possible in <aside> or <footer>',
      'Only in <main>',
      'Only at the bottom in <footer>',
    ],
    correctAnswer:
      'Primary in <header>, secondary possible in <aside> or <footer>',
    explanation:
      'Primary navigation should be placed within the <header> element using <nav>. Secondary navigation can be placed in <aside> for sidebar navigation or <footer> for additional links. This follows common web patterns and user expectations.',
  },
  {
    id: 40,
    question: 'How should related content be grouped within a <main> element?',
    options: [
      'Using only <div> elements',
      'Using <section> elements with proper headings',
      'No grouping needed',
      'Using random elements as needed',
    ],
    correctAnswer: 'Using <section> elements with proper headings',
    explanation:
      'Related content within <main> should be grouped using <section> elements, each with its own heading that describes the content. This creates a logical document outline and improves navigation and accessibility.',
  },
];
