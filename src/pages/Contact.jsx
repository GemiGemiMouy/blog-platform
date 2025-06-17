import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_a7xr9mi",       // ✅ your EmailJS service ID
        "template_r2prusk",      // ✅ your EmailJS template ID
        form.current,
        "YUiDFYUzXdYPNLmTi"      // ✅ your public key
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error(error);
          setStatus("❌ Failed to send. Please try again.");
        }
      );
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-16 bg-gradient-to-br from-indigo-50 via-white to-indigo-100 dark:from-slate-900 dark:to-slate-800">
      <div className="w-full max-w-2xl bg-white dark:bg-slate-800 rounded-xl shadow-lg px-10 py-12 transition-all duration-300">
        <h1 className="text-4xl font-bold mb-6 text-center text-slate-800 dark:text-white">
          Contact Us
        </h1>
        <p className="text-center text-slate-600 dark:text-slate-300 mb-8">
          Have a question or feedback? Drop us a message and we’ll get back to you shortly.
        </p>

        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div className="group relative">
            <input
              type="text"
              name="user_name"
              required
              placeholder="Your name"
              className="peer w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-100 dark:bg-slate-700 text-gray-800 dark:text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <label className="absolute left-4 top-3 text-sm text-gray-500 dark:text-gray-400 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 dark:peer-placeholder-shown:text-gray-500 transition-all">
              Name
            </label>
          </div>

          <div className="group relative">
            <input
              type="email"
              name="user_email"
              required
              placeholder="you@example.com"
              className="peer w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-100 dark:bg-slate-700 text-gray-800 dark:text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <label className="absolute left-4 top-3 text-sm text-gray-500 dark:text-gray-400 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 dark:peer-placeholder-shown:text-gray-500 transition-all">
              Email
            </label>
          </div>

          <div className="group relative">
            <textarea
              name="message"
              rows="5"
              required
              placeholder="Your message"
              className="peer w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-100 dark:bg-slate-700 text-gray-800 dark:text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
            <label className="absolute left-4 top-3 text-sm text-gray-500 dark:text-gray-400 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 dark:peer-placeholder-shown:text-gray-500 transition-all">
              Message
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md transition duration-200"
          >
            Send Message
          </button>

          {status && (
            <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2">
              {status}
            </p>
          )}
        </form>
      </div>
    </main>
  );
}
