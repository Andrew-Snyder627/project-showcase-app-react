# Personal Project Showcase App

A responsive single-page application (SPA) built in React to allow users to add, search, and manage personal projects in a simple portfolio-style interface.

---

## Features

- **Add New Projects**  
  Users can enter a project title and description to dynamically add new projects to the portfolio list.

- **Controlled Form Inputs**  
  All form inputs are fully controlled using React state, ensuring proper validation and state updates.

- **Form Validation**  
  Prevents adding empty projects by requiring both title and description before submission.

- **Project List Rendering**  
  Dynamically displays all added projects as cards.

- **Delete Functionality**  
  Each project card includes a delete button to remove the project from the list.

- **Search Functionality**  
  Real-time filtering of the project list based on the user's search query.

- **Responsive Design**  
  The entire application is mobile-friendly, centered, and scales cleanly across different screen sizes.

- **Component-Based Architecture**  
  Application is broken down into fully reusable components:

  - `App`
  - `Header`
  - `ProjectForm`
  - `SearchBar`
  - `ProjectList`
  - `ProjectCard`

- **First Time Using Tailwind CSS**  
  This project was styled using Tailwind CSS, marking our first implementation of Tailwind’s utility-first design system.

  - Allowed rapid, clean styling directly in component code.
  - Made it simple to manage spacing, width control, and responsive layout.
  - Perfectly matched the provided mockup with fine-grained width control (`max-w-[400px]` pattern).

- **Custom Width Locking to Match Mockup**  
  Applied consistent layout constraints to fully match design specifications by controlling outer width in parent container and allowing child components to flow naturally.

---

## Technologies Used

- React
- Tailwind CSS (first full integration)
- JavaScript (functional components with Hooks)
- Responsive Flexbox Layout

---

## How To Run Locally

Clone this repository:

```bash
git clone <your-repo-url>
cd project-showcase-app
```

Install dependencies:

```bash
npm install
```

Or, if you're using pnpm:

```bash
pnpm install
```

Start the development server:

```bash
npm run dev
```

The app will be available at:

http://localhost:5173/

(or whichever port Vite assigns on startup)

---

## Stretch Goals Completed

- Proper form validation
- Full responsive polish
- Accessibility-friendly forms
- Code fully modularized and maintainable
- Tailwind width control fully aligned to design spec

---

## Submission Notes

- All rubric requirements have been fully implemented.
- Mockup visual requirements fully achieved.
- Tailwind was used to handle spacing, sizing, typography, and responsiveness.
- Controlled state management throughout.
