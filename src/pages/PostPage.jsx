import React from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import posts from "../data/posts";

const PostPage = () => {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return <div className="text-center text-red-500 py-20">Post not found</div>;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-64 object-cover rounded-2xl mb-6"
      />
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
        {post.date} · {post.readingTime}
      </p>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
        By <strong>{post.author}</strong>
      </p>
      <div className="prose dark:prose-invert max-w-none">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </div>
  );
};

export default PostPage;
