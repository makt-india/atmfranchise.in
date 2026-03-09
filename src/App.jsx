import React, { lazy, Suspense, useEffect, memo } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// Layout
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToHash from "./components/ScrollToHash";

// Lazy Pages
const HomePage = lazy(() => import("./Pages/Home"));
const AboutUsPage = lazy(() => import("./Pages/About"));
const BlogPage = lazy(() => import("./Pages/Blog"));
const BlogPostPage = lazy(() => import("./Pages/BlogPost"));
const PartnerPage = lazy(() => import("./Pages/Partner"));
const ContactUsPage = lazy(() => import("./Pages/Contact"));
const ServicePage = lazy(() => import("./Pages/Service"));

/* ================================
   MEMOIZED LAYOUT COMPONENTS
================================ */

const MemoHeader = memo(Header);
const MemoFooter = memo(Footer);

/* ================================
   LOADING COMPONENT
================================ */

function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="w-10 h-10 border-4 border-slate-200 border-t-slate-900 rounded-full animate-spin"></div>
    </div>
  );
}

/* ================================
   ERROR FALLBACK
================================ */

function ErrorFallback() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h2 className="text-xl font-semibold">Page failed to load</h2>
      <p className="text-slate-600">Please refresh the page.</p>
    </div>
  );
}

/* ================================
   SCROLL MANAGEMENT
================================ */

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

/* ================================
   ROUTES
================================ */

function AppRoutes() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/atm-franchise" element={<PartnerPage />} />
        <Route path="/atm-franchise/:partnerId" element={<PartnerPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
      </Routes>
    </Suspense>
  );
}

/* ================================
   MAIN APP
================================ */

function App() {
  return (
    <BrowserRouter>
      <MemoHeader />

      <ScrollToHash />
      <ScrollToTop />

      <main id="main-content" className="min-h-screen">
        <AppRoutes />
      </main>

      <MemoFooter />
    </BrowserRouter>
  );
}

export default App;