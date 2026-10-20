export function Wrapper() {
  return (
    <div className="main">
      <h1>Albin Lundström</h1>
      <p>Welcome to my portfolio!</p>
      <p>
        Frontend developer working with React, Vue and TypeScript. I'm also interested and curious about security and 3D work in web development.
      </p>
      <h2>Experience</h2>
      <h3>Frontend Intern, The Roll (Nov 2023 – May 2024)</h3>


      <ul>
        <li>
          I rebuilt an existing codebase written in Vue2 and migrated into Vue3 with TypeScript and Pinia for state
          management.
        </li>
        <li>Implemented a new design system using Tailwind CSS and Quasar with a UI/UX developer.</li>
        <li>
          Worked with a team of developers to implement new features and fix bugs in the application and connect to the
          backend services securely.
        </li>
      </ul>

      <h2>Skills</h2>
      <ul>
        <li>React</li>
        <li>Vue</li>
        <li>TypeScript</li>
        <li>Node.js</li>
        <li>Quasar</li>
        <li>Tailwind CSS</li>
      </ul>
      <a
        href="https://www.linkedin.com/in/albin-lundstrom"
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        View My LinkedIn
      </a>
      <a
        href="https://github.com/wilhelmerik"
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        View My Github
      </a>
    </div>
  );
}
