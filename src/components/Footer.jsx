// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-slate-900 text-center py-6 mt-10 border-t border-gray-300 dark:border-gray-700">
      <div className="flex justify-center space-x-6">
        {/* Telegram */}
        <a
          href="https://t.me/Seakmouy_Seng"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Telegram"
          className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-600 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7 inline-block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M22 2L11 13" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M22 2L15 22 11 13 2 9 22 2z" />
          </svg>
          <span className="sr-only">Telegram</span>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/GemiGemiMouy"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7 inline-block"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.11.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.807 1.304 3.492.997.108-.776.418-1.305.76-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.468-2.382 1.236-3.22-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3-.404c1.02.005 2.047.137 3 .404 2.29-1.553 3.297-1.23 3.297-1.23.655 1.653.243 2.874.12 3.176.77.838 1.235 1.91 1.235 3.22 0 4.61-2.804 5.62-5.475 5.92.43.37.814 1.096.814 2.21 0 1.595-.015 2.88-.015 3.27 0 .32.217.694.825.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
          </svg>
          <span className="sr-only">GitHub</span>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/+855714141095" 
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="text-green-600 hover:text-green-700 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7 inline-block"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M20.52 3.48A11.94 11.94 0 0 0 3.48 20.52L2 22l1.55-4.58A11.94 11.94 0 0 0 20.52 3.48zM12 21a9 9 0 0 1-4.5-1.24L5 20l1.24-2.5A9 9 0 1 1 12 21zm5.68-6.54c-.19-.1-1.12-.56-1.3-.62-.19-.07-.33-.1-.47.1-.14.19-.54.62-.66.75-.12.12-.25.14-.46.05-.19-.1-.8-.29-1.52-.94-.56-.5-.93-1.12-1.04-1.31-.12-.19-.01-.29.08-.39.09-.09.19-.25.28-.38.09-.12.12-.19.19-.31.06-.12.03-.23-.02-.32-.05-.1-.47-1.13-.65-1.55-.17-.41-.35-.36-.47-.37-.12 0-.25 0-.38 0-.12 0-.32.05-.49.23-.18.19-.69.68-.69 1.65 0 .97.71 1.91.81 2.04.1.12 1.4 2.14 3.4 3 .47.2.83.32 1.11.41.47.14.9.12 1.24.07.38-.06 1.16-.47 1.32-.92.15-.44.15-.82.11-.92-.05-.1-.19-.16-.38-.27z" />
          </svg>
          <span className="sr-only">WhatsApp</span>
        </a>
      </div>
      <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} MyBlog. All rights reserved.
      </p>
    </footer>
  );
}
