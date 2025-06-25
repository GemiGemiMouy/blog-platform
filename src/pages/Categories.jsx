import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import posts from "../data/posts";

// Updated icons with cleaner SVGs or better alternatives from Flaticon / Devicon / open sources
const categoryLogos = {
  React: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  API: "https://cdn-icons-png.flaticon.com/512/847/847969.png", // cleaner API icon
  Design: "https://cdn-icons-png.flaticon.com/512/833/833472.png", // modern design icon (pen tool)
  DevOps: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  Web: "https://cdn-icons-png.flaticon.com/512/1006/1006553.png", // modern web icon (monitor)
  Marketing: "https://cdn-icons-png.flaticon.com/512/2991/2991148.png", // megaphone icon
  Vue: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
};

export default function Category() {
  const categories = Array.from(new Set(posts.map((post) => post.category))).sort();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="max-w-7xl mx-auto px-8 py-14 min-h-screen bg-gradient-to-tr from-indigo-50 to-purple-50 dark:from-indigo-900 dark:to-purple-900 text-gray-900 dark:text-gray-100">
      <h1 className="text-5xl font-extrabold mb-12 text-center tracking-tight">
        Browse by Category
      </h1>

      {categories.length === 0 ? (
        <p className="text-center text-gray-500 dark:text-gray-400 text-lg">
          No categories found.
        </p>
      ) : (
        <motion.div
          className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {categories.map((category) => {
            const logoUrl =
              categoryLogos[category] ||
              "https://cdn-icons-png.flaticon.com/512/2991/2991148.png"; // fallback megaphone

            return (
              <motion.div
                key={category}
                variants={itemVariants}
                whileHover={{ scale: 1.07, boxShadow: "0 20px 40px rgba(99,102,241,0.4)" }}
                className="rounded-3xl bg-white dark:bg-slate-800 shadow-md hover:shadow-xl border border-gray-200 dark:border-gray-700 transition-transform duration-300 cursor-pointer flex flex-col items-center p-8"
              >
                <Link
                  to={`/?category=${encodeURIComponent(category)}`}
                  className="flex flex-col items-center w-full"
                >
                  <div className="bg-indigo-100 dark:bg-indigo-800 rounded-full p-6 mb-6 shadow-inner flex items-center justify-center w-28 h-28">
                    <img
                      src={logoUrl}
                      alt={`${category} logo`}
                      className="max-h-16 max-w-16 object-contain filter dark:invert"
                      loading="lazy"
                    />
                  </div>

                  <h2 className="text-2xl font-semibold mb-2 text-center">
                    {category}
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                    {posts.filter((post) => post.category === category).length} post(s)
                  </p>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      )}
    </main>
  );
}
