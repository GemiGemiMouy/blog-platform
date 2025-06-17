import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import PostPage from "./pages/PostPage";
import About from "./pages/About";
import Categories from "./pages/Categories";
import Contact from "./pages/Contact";



export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:slug" element={<PostPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="*"
              element={
                <main className="max-w-3xl mx-auto px-4 py-8">
                  <h1 className="text-2xl font-bold">404 - Page Not Found</h1>
                </main>
              }
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
