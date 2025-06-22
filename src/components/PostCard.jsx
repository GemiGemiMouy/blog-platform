import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function PostCard({ post }) {
  return (
    <motion.article
      className="border border-gray-300 dark:border-gray-700 rounded-md p-4 hover:shadow-lg transition-shadow"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
    >
      <Link to={`/post/${post.slug}`}>
        <h2 className="text-xl font-semibold mb-1 hover:text-indigo-600 dark:hover:text-indigo-400">
          {post.title}
        </h2>
      </Link>
      <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
        <span className="mr-2">{new Date(post.date).toLocaleDateString()}</span>
        <span>by {post.author}</span>
      </div>
      <div className="flex flex-wrap gap-2 text-xs">
        <span className="bg-indigo-200 text-indigo-800 px-2 py-1 rounded dark:bg-indigo-800 dark:text-indigo-200">
          {post.category}
        </span>
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="bg-gray-200 text-gray-700 px-2 py-1 rounded dark:bg-gray-700 dark:text-gray-300"
          >
            #{tag}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
