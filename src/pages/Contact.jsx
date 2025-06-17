import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white dark:from-slate-900 dark:to-slate-800 text-gray-800 dark:text-gray-200 px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4 text-indigo-700 dark:text-indigo-400">
          Get in Touch
        </h1>
        <p className="text-center mb-10 text-gray-600 dark:text-gray-400">
          Want to work together or have a question? Send me a message!
        </p>

        <form
          className="bg-white/70 dark:bg-slate-800/80 backdrop-blur-md shadow-xl p-8 rounded-2xl space-y-8 transition-all duration-300"
        >
          {/* Name Field */}
          <div className="relative">
            <input
              type="text"
              id="name"
              required
              className="peer w-full px-4 pt-6 pb-2 border border-gray-300 dark:border-gray-700 bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder=" "
            />
            <label
              htmlFor="name"
              className="absolute left-4 top-2 text-gray-500 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-indigo-500 dark:peer-focus:text-indigo-400"
            >
              Your Name
            </label>
          </div>

          {/* Email Field */}
          <div className="relative">
            <input
              type="email"
              id="email"
              required
              className="peer w-full px-4 pt-6 pb-2 border border-gray-300 dark:border-gray-700 bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder=" "
            />
            <label
              htmlFor="email"
              className="absolute left-4 top-2 text-gray-500 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-indigo-500 dark:peer-focus:text-indigo-400"
            >
              Your Email
            </label>
          </div>

          {/* Message Field */}
          <div className="relative">
            <textarea
              id="message"
              rows="5"
              required
              className="peer w-full px-4 pt-6 pb-2 border border-gray-300 dark:border-gray-700 bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder=" "
            ></textarea>
            <label
              htmlFor="message"
              className="absolute left-4 top-2 text-gray-500 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-indigo-500 dark:peer-focus:text-indigo-400"
            >
              Your Message
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mt-10">
          <a
            href="https://t.me/Seakmouy_Seng"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
            className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition"
          >
            <i className="fab fa-telegram fa-2x"></i>
          </a>
          <a
            href="https://github.com/GemiGemiMouy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition"
          >
            <i className="fab fa-github fa-2x"></i>
          </a>
          <a
            href="https://wa.me/855714141095"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="text-green-600 hover:text-green-700 transition"
          >
            <i className="fab fa-whatsapp fa-2x"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
