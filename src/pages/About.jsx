import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-3xl mx-auto px-6 py-12 min-h-screen prose dark:prose-invert prose-indigo prose-lg"
      style={{ WebkitFontSmoothing: "antialiased" }}
    >
      <h1 className="text-5xl font-extrabold mb-6 relative inline-block group">
        About This Blog
        <span
          className="absolute left-0 bottom-0 h-1 w-full bg-indigo-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"
          aria-hidden="true"
        ></span>
      </h1>

      <p className="mb-4 leading-relaxed">
        Welcome to <strong>MyBlog</strong>! This is a clean and modern blogging platform built with React and Tailwind CSS.
      </p>

      <p className="mb-4 leading-relaxed">
        Here you will find posts about React, CSS, UI/UX design, and web development in general.
      </p>

      <p className="mb-2 font-semibold text-indigo-600 dark:text-indigo-400">
        Features include:
      </p>

      <ul className="mb-6 list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
        {[
          "Dark mode toggle",
          "Search posts by title or tags",
          "Filter posts by category",
          "Markdown-rendered posts",
          "Clean, responsive design",
        ].map((feature) => (
          <li
            key={feature}
            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-default"
          >
            {feature}
          </li>
        ))}
      </ul>

      <p className="mb-4 leading-relaxed">
        This blog is a demo project to showcase modern frontend development techniques. Feel free to explore and learn!
      </p>

      <p className="leading-relaxed">
        If you want to contribute or have any questions, feel free to reach out to the developer.
      </p>
    </motion.main>
  );
}
