import { Link } from "react-router-dom";
import posts from "../data/posts";

export default function Category() {
  const categories = Array.from(new Set(posts.map((post) => post.category)));

  return (
    <main className="max-w-6xl mx-auto px-6 py-12 min-h-screen bg-white dark:bg-slate-900 text-gray-800 dark:text-white">
      <h1 className="text-4xl font-bold mb-8 text-center">Browse by Category</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <Link
            to={`/?category=${category}`}
            key={category}
            className="group block p-6 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-slate-800 shadow hover:shadow-lg hover:border-indigo-500 transition-all"
          >
            <h2 className="text-2xl font-semibold group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              {category}
            </h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              {posts.filter((post) => post.category === category).length} post(s)
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}
