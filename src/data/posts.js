const posts = [
  {
    id: 1,
    slug: "exploring-react-hooks",
    title: "Exploring React Hooks",
    image:
      "https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=800&q=80",
    date: "2024-05-01",
    author: "Jane Doe",
    category: "React",
    tags: ["react", "hooks", "javascript"],
    readingTime: "6 min read",
    content: `
## React Hooks Introduction

React hooks let you use state and other React features without writing a class. Common hooks include \`useState\`, \`useEffect\`, and \`useContext\`.

### useState Example

\`\`\`jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}
\`\`\`

Hooks improve code readability and reduce boilerplate.
    `,
  },
  {
    id: 2,
    slug: "tailwind-css-basics",
    title: "Tailwind CSS Basics",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    date: "2024-04-25",
    author: "John Smith",
    category: "CSS",
    tags: ["css", "tailwind", "design"],
    readingTime: "5 min read",
    content: `
## Getting started with Tailwind CSS

Tailwind is a utility-first CSS framework that makes styling faster by composing classes.

### Example

\`\`\`html
<button class="bg-blue-500 text-white px-4 py-2 rounded">
  Click Me
</button>
\`\`\`

You can customize Tailwind with your own colors and breakpoints.
    `,
  },
  {
    id: 3,
    slug: "javascript-es6-features",
    title: "JavaScript ES6 Features",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    date: "2024-04-20",
    author: "Alice Johnson",
    category: "JavaScript",
    tags: ["javascript", "es6", "programming"],
    readingTime: "7 min read",
    content: `
## ES6 Features Overview

ES6 introduced many features like let/const, arrow functions, template literals, destructuring, and classes.

### Arrow Function Example

\`\`\`js
const add = (a, b) => a + b;
\`\`\`

These features help write cleaner and more concise code.
    `,
  },
  {
    id: 4,
    slug: "building-react-router-app",
    title: "Building React Router App",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    date: "2024-04-18",
    author: "Michael Lee",
    category: "React",
    tags: ["react", "router", "spa"],
    readingTime: "8 min read",
    content: `
## React Router Basics

React Router helps build single-page applications with dynamic routing.

### Setting up Routes

\`\`\`jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
\`\`\`

It allows declarative routing and nested routes.
    `,
  },
  {
    id: 5,
    slug: "responsive-web-design",
    title: "Responsive Web Design",
    image:
      "https://images.unsplash.com/photo-1497493292307-31c376b6e479?auto=format&fit=crop&w=800&q=80",
    date: "2024-04-15",
    author: "Emma Wilson",
    category: "Design",
    tags: ["design", "responsive", "css"],
    readingTime: "6 min read",
    content: `
## Responsive Design Principles

Make your website look good on all devices using fluid grids, flexible images, and media queries.

### Media Query Example

\`\`\`css
@media (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}
\`\`\`

Test your site on multiple devices for best results.
    `,
  },
  {
    id: 6,
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js",
    image:
      "https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=800&q=80",
    date: "2024-04-12",
    author: "David Brown",
    category: "React",
    tags: ["react", "nextjs", "ssr"],
    readingTime: "9 min read",
    content: `
## Introduction to Next.js

Next.js is a React framework for server-side rendering and static site generation.

### Basic Page

\`\`\`jsx
export default function Home() {
  return <h1>Welcome to Next.js!</h1>;
}
\`\`\`

It optimizes performance and SEO automatically.
    `,
  },
  {
    id: 7,
    slug: "understanding-async-await",
    title: "Understanding Async/Await",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    date: "2024-04-10",
    author: "Sophia Martinez",
    category: "JavaScript",
    tags: ["javascript", "async", "await", "promises"],
    readingTime: "7 min read",
    content: `
## Async/Await in JavaScript

Async/await allows writing asynchronous code that looks synchronous.

### Example

\`\`\`js
async function fetchData() {
  try {
    const response = await fetch('/api/data');
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
\`\`\`

Makes error handling easier than callbacks.
    `,
  },
  {
    id: 8,
    slug: "state-management-with-redux",
    title: "State Management with Redux",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    date: "2024-04-08",
    author: "Oliver Davis",
    category: "React",
    tags: ["redux", "state", "react"],
    readingTime: "10 min read",
    content: `
## Redux Overview

Redux helps manage complex app state in a predictable way.

### Store Example

\`\`\`js
import { createStore } from 'redux';

function reducer(state = { count: 0 }, action) {
  switch(action.type) {
    case 'increment':
      return { count: state.count + 1 };
    default:
      return state;
  }
}

const store = createStore(reducer);
\`\`\`

Use with React-Redux for integration.
    `,
  },
  {
    id: 9,
    slug: "css-grid-vs-flexbox",
    title: "CSS Grid vs Flexbox",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    date: "2024-04-05",
    author: "Mia Garcia",
    category: "CSS",
    tags: ["css", "grid", "flexbox", "layout"],
    readingTime: "6 min read",
    content: `
## CSS Grid and Flexbox

Both are CSS layout models but serve different purposes.

- **Flexbox**: 1-dimensional layout (row or column)
- **Grid**: 2-dimensional layout (rows and columns)

### Grid Example

\`\`\`css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
\`\`\`

Use the best tool based on your layout needs.
    `,
  },
  {
    id: 10,
    slug: "introduction-to-typescript",
    title: "Introduction to TypeScript",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    date: "2024-04-02",
    author: "Ethan Thompson",
    category: "JavaScript",
    tags: ["typescript", "javascript", "typing"],
    readingTime: "8 min read",
    content: `
## What is TypeScript?

TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.

### Example

\`\`\`ts
function greet(name: string) {
  return 'Hello, ' + name;
}
\`\`\`

It adds static typing and improved tooling.
    `,
  },
  {
    id: 11,
    slug: "building-accessible-websites",
    title: "Building Accessible Websites",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    date: "2024-03-30",
    author: "Isabella King",
    category: "Design",
    tags: ["accessibility", "web", "a11y"],
    readingTime: "7 min read",
    content: `
## Accessibility Basics

Ensure your website is usable by people with disabilities.

### Tips

- Use semantic HTML
- Provide alt text for images
- Ensure good color contrast

Accessibility improves UX for all users.
    `,
  },
  {
    id: 12,
    slug: "graphql-vs-rest-api",
    title: "GraphQL vs REST API",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    date: "2024-03-28",
    author: "Liam Moore",
    category: "API",
    tags: ["graphql", "rest", "api"],
    readingTime: "8 min read",
    content: `
## REST and GraphQL

REST is an architectural style; GraphQL is a query language for APIs.

### Pros of GraphQL

- Fetch exactly the data you need
- Single endpoint
- Strong typing

Both have their use cases.
    `,
  },
  {
    id: 13,
    slug: "progressive-web-apps-pwa",
    title: "Progressive Web Apps (PWA)",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    date: "2024-03-25",
    author: "Charlotte Evans",
    category: "Web",
    tags: ["pwa", "web", "offline"],
    readingTime: "7 min read",
    content: `
## What is a PWA?

PWAs are web apps that load like regular websites but can offer offline access and push notifications.

### Features

- Service workers
- Web app manifest
- Responsive design

Great for better mobile experiences.
    `,
  },
  {
    id: 14,
    slug: "introduction-to-docker",
    title: "Introduction to Docker",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    date: "2024-03-22",
    author: "James Wilson",
    category: "DevOps",
    tags: ["docker", "containers", "devops"],
    readingTime: "9 min read",
    content: `
## What is Docker?

Docker is a containerization platform for packaging apps and dependencies.

### Basic Commands

\`\`\`
docker build -t myapp .
docker run -p 3000:3000 myapp
\`\`\`

Improves portability and deployment.
    `,
  },
  {
    id: 15,
    slug: "seo-best-practices",
    title: "SEO Best Practices",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    date: "2024-03-20",
    author: "Amelia Roberts",
    category: "Marketing",
    tags: ["seo", "marketing", "web"],
    readingTime: "6 min read",
    content: `
## SEO Basics

Improve your site's ranking by optimizing titles, meta descriptions, and using semantic HTML.

### Tips

- Use keywords naturally
- Optimize images
- Improve page speed

SEO drives organic traffic.
    `,
  },
  {
    id: 16,
    slug: "unit-testing-in-javascript",
    title: "Unit Testing in JavaScript",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    date: "2024-03-18",
    author: "Benjamin Scott",
    category: "JavaScript",
    tags: ["testing", "javascript", "unit-testing"],
    readingTime: "7 min read",
    content: `
## Unit Testing Overview

Write tests for individual components or functions.

### Jest Example

\`\`\`js
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
\`\`\`

Testing improves code reliability.
    `,
  },
  {
    id: 17,
    slug: "introduction-to-nodejs",
    title: "Introduction to Node.js",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    date: "2024-03-15",
    author: "Mason Clark",
    category: "JavaScript",
    tags: ["nodejs", "javascript", "backend"],
    readingTime: "8 min read",
    content: `
## Node.js Basics

Node.js allows running JavaScript on the server.

### Hello World Example

\`\`\`js
const http = require('http');
const server = http.createServer((req, res) => {
  res.end('Hello World!');
});
server.listen(3000);
\`\`\`

Great for building fast backend apps.
    `,
  },
  {
    id: 18,
    slug: "introduction-to-graphql",
    title: "Introduction to GraphQL",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    date: "2024-03-10",
    author: "Ella Hughes",
    category: "API",
    tags: ["graphql", "api", "query"],
    readingTime: "7 min read",
    content: `
## GraphQL Basics

GraphQL lets clients specify exactly what data they need.

### Query Example

\`\`\`graphql
{
  user(id: 1) {
    name
    email
  }
}
\`\`\`

Simplifies data fetching.
    `,
  },
  {
    id: 19,
    slug: "css-variables-tutorial",
    title: "CSS Variables Tutorial",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    date: "2024-03-05",
    author: "Ava Lopez",
    category: "CSS",
    tags: ["css", "variables", "design"],
    readingTime: "5 min read",
    content: `
## CSS Custom Properties

CSS variables allow you to reuse values throughout your stylesheet.

### Example

\`\`\`css
:root {
  --main-color: #06b6d4;
}
button {
  background-color: var(--main-color);
}
\`\`\`

Easy to maintain design tokens.
    `,
  },
  {
    id: 20,
    slug: "getting-started-with-vue",
    title: "Getting Started with Vue.js",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    date: "2024-03-01",
    author: "Noah Martinez",
    category: "Vue",
    tags: ["vue", "javascript", "frontend"],
    readingTime: "9 min read",
    content: `
## Vue.js Introduction

Vue is a progressive JavaScript framework for building UI.

### Example

\`\`\`vue
<template>
  <div>{{ message }}</div>
</template>
<script>
export default {
  data() {
    return { message: 'Hello Vue!' };
  }
}
</script>
\`\`\`

Simple and approachable.
    `,
  },
];

export default posts;
