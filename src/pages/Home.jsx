import { useState } from "react";
import PostCard from "../components/PostCard";
import posts from "../data/posts";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  // Get all categories from posts
  const categories = [...new Set(posts.map((p) => p.category))];

  // Filter posts based on search and category
  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    const matchesCategory =
      categoryFilter === "" || post.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="max-w-5xl mx-auto px-6 py-8 min-h-screen">
      <h1 className="text-4xl font-extrabold mb-6 text-slate-900 dark:text-gray-100">
        Latest Posts
      </h1>

      <div className="flex flex-col md:flex-row md:items-center mb-8 space-y-3 md:space-y-0 md:space-x-6">
        <input
          type="search"
          placeholder="Search posts by title or tags..."
          className="flex-grow px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {filteredPosts.length === 0 ? (
        <p className="text-center text-gray-500 dark:text-gray-400">
          No posts found.
        </p>
      ) : (
        <div className="grid gap-8 md:grid-cols-2">
          {filteredPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </main>
  );
}
