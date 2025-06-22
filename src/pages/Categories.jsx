import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import posts from "../data/posts";

const categoryIcons = {
  React: "⚛️",
  JavaScript: "📜",
  CSS: "🎨",
  API: "🔌",
  Design: "🧠",
  DevOps: "🐳",
  Web: "🌐",
  Marketing: "📈",
  Vue: "🖼️",
};

export default function Category() {
  const categories = Array.from(new Set(posts.map((post) => post.category))).sort();

  // Animation variants for framer-motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.15 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <main className="max-w-6xl mx-auto px-6 py-12 min-h-screen bg-white dark:bg-slate-900 text-gray-800 dark:text-white">
      <h1 className="text-4xl font-bold mb-8 text-center">Browse by Category</h1>

      {categories.length === 0 ? (
        <p className="text-center text-gray-500 dark:text-gray-400">
          No categories found.
        </p>
      ) : (
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {categories.map((category) => (
            <motion.div
              key={category}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-slate-800 shadow hover:shadow-lg hover:border-indigo-500 transition-all"
            >
              <Link
                to={`/?category=${encodeURIComponent(category)}`}
                className="block p-6"
              >
                <h2 className="text-2xl font-semibold flex items-center gap-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  <span>{categoryIcons[category] || "📁"}</span> {category}
                </h2>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  {posts.filter((post) => post.category === category).length} post(s)
                </p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </main>
  );
}
