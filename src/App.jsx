import React, { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// Core Layout
import Header from "./components/Header";
import Footer from "./components/Footer";

// Lazy Pages
const HomePage = lazy(() => import("./Pages/Home"));
const AboutUsPage = lazy(() => import("./Pages/About"));
const BlogPage = lazy(() => import("./Pages/Blog"));
const BlogPostPage = lazy(() => import("./Pages/BlogPost"));
const PartnerPage = lazy(() => import("./Pages/Partner"));
const ContactUsPage = lazy(() => import("./Pages/Contact"));
const Service = lazy(() => import("./Pages/Service"));
import ScrollToHash from "./components/ScrollToHash";

function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="w-12 h-12 border-4 border-slate-200 border-t-slate-900 rounded-full animate-spin" />
    </div>
  );
}

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({
        top: 0,
        behavior: "auto",
      });
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <Header />
       <ScrollToHash />
      <ScrollToTop />

      <main id="main-content" className="min-h-screen">
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/service" element={<Service />} />
            <Route path="/blog" element={<BlogPage />} />
<Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/atm-franchise" element={<PartnerPage />} />
            <Route path="/atm-franchise/:partnerId" element={<PartnerPage />} />
            <Route path="/contact" element={<ContactUsPage />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
