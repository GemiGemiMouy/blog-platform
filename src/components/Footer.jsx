export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-slate-800 text-slate-600 dark:text-gray-400 text-center py-5 mt-12 shadow-inner">
      <p className="text-sm font-light select-none">
        &copy; {new Date().getFullYear()} MyBlog. Built with React & Tailwind CSS.
      </p>
    </footer>
  );
}
