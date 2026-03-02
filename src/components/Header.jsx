import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { navItems } from "../Data";

// --- 1. Custom Nav Link (Standard Links) ---
const CustomNavLink = ({ to, title }) => {
  const isContact = title === "Contact Us";

  // Special Styling for "Contact Us" Button
  if (isContact) {
    return (
      <Link
        to={to}
        className={`
          hidden md:inline-flex items-center justify-center
          px-6 py-2.5 ml-4 rounded-full text-sm font-bold text-white
          bg-blue-600 hover:bg-blue-700 
          shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50
          transform hover:-translate-y-0.5 transition-all duration-300
        `}
      >
        {title}
      </Link>
    );
  }

  // Standard Link with Dot Indicator
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `
        relative h-full flex items-center px-4 text-sm font-bold tracking-wide transition-colors duration-300
        ${isActive ? "text-blue-600" : "text-gray-600 hover:text-blue-600"}
        `
      }
    >
      {({ isActive }) => (
        <>
          {title}
          {/* Active Dot - Absolute positioned to not affect alignment */}
          <span
            className={`
              absolute bottom-5 left-1/2 -translate-x-1/2 
              h-1.5 w-1.5 rounded-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.8)]
              transition-all duration-300 transform
              ${isActive ? "opacity-100 scale-100" : "opacity-0 scale-0"}
            `}
          />
        </>
      )}
    </NavLink>
  );
};

// --- 2. Dropdown Nav Link (ATM Franchise) ---
const DropdownNavLink = ({ item }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const location = useLocation();

  // Close dropdown when clicking outside
  useEffect(() => {
    const clickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", clickOutside);
    return () => document.removeEventListener("mousedown", clickOutside);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Check if any child path is active (to highlight parent)
  const isParentActive = item.children.some(child => location.pathname === child.path);

  return (
    <div className="relative h-full flex items-center" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className={`
          group flex items-center px-4 text-sm font-bold tracking-wide transition-colors duration-300 outline-none
          ${isParentActive ? "text-blue-600" : "text-gray-600 hover:text-blue-600"}
        `}
      >
        {item.title}
        <ChevronDown
          className={`w-4 h-4 ml-1 transition-transform duration-300 ${
            open ? "rotate-180 text-blue-600" : "rotate-0"
          }`}
        />
        
        {/* Active Dot for Parent */}
        <span
          className={`
            absolute bottom-5 left-1/2 -translate-x-1/2 
            h-1.5 w-1.5 rounded-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.8)]
            transition-all duration-300 transform
            ${isParentActive ? "opacity-100 scale-100" : "opacity-0 scale-0"}
          `}
        />
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div
          className={`
            absolute top-[80%] right-0 w-64 pt-2
            animate-in fade-in slide-in-from-top-2 duration-200 z-50
          `}
        >
          <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden ring-1 ring-black/5">
            <div className="py-2">
              {item.children.map((child, idx) => (
                <Link
                  key={idx}
                  to={child.path}
                  onClick={() => setOpen(false)}
                  className="group flex items-center justify-between px-6 py-3 hover:bg-slate-50 transition-colors"
                >
                  <span className="text-sm font-medium text-gray-600 group-hover:text-blue-600 transition-colors">
                    {child.title}
                  </span>
                  <ArrowRight className="w-4 h-4 text-blue-600 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// --- 3. Main Header Component ---
const Header = () => {
  const [menu, setMenu] = useState(false);
  const [shrink, setShrink] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setShrink(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenu(false);
  }, [location.pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menu) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [menu]);

  return (
    <>
      <header
        className={`
          sticky top-0 z-40 bg-white/95 backdrop-blur-md
          border-b border-gray-100
          transition-all duration-300 ease-in-out
          ${shrink ? "h-16 shadow-sm" : "h-20"}
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          
          {/* Logo Area */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none flex-shrink-0"
          >
            {/* Logo Image */}
            <img
              src="/img/common/logo2.png"
              alt="FindiATM Logo"
              className={`
                transition-all duration-300 object-contain
                ${shrink ? "h-13 w-auto" : "h-13 w-auto"}
              `}
            />

<div className="flex flex-col justify-center select-none">
  <div className="flex items-baseline gap-0.5">
  <span
    className={`font-black tracking-tighter text-slate-900 transition-all duration-500 ease-in-out ${
      shrink ? "text-xl" : "text-2xl"
    }`}
  >
    ATM
    <span className="bg-gradient-to-r from-[#4f3c89] to-[#6fb0cc] bg-clip-text text-transparent">
      FRANCHISE
    </span>
  </span>
</div>

  <div 
    className={`flex flex-col overflow-hidden transition-all duration-500 ease-in-out ${
      shrink ? "max-h-0 opacity-0 mt-0" : "max-h-10 opacity-100 mt-1"
    }`}
  >
    {/* Descriptor: Refined Letter Spacing */}
    <span className="text-[9px] font-bold tracking-[0.2em] text-slate-500 uppercase leading-none">
      India's #1 ATM Business Portal
    </span>

    {/* Trust Signal: Clean Attribution */}
   
  </div>
</div></Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center h-full space-x-2">
            {navItems.map((i) =>
              i.isDropdown ? (
                <DropdownNavLink key={i.title} item={i} />
              ) : (
                <CustomNavLink key={i.title} title={i.title} to={i.path} />
              )
            )}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-slate-700 hover:text-blue-600 transition-colors"
            onClick={() => setMenu(true)}
          >
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </header>

      {/* --- Mobile Menu Overlay --- */}
      <div
        className={`fixed inset-0 z-[100] transition-visibility duration-300 ${menu ? "visible" : "invisible"}`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300 ${menu ? "opacity-100" : "opacity-0"}`}
          onClick={() => setMenu(false)}
        />

        {/* Sidebar */}
        <div
          className={`
            absolute top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-2xl
            flex flex-col transform transition-transform duration-300 ease-out
            ${menu ? "translate-x-0" : "translate-x-full"}
          `}
        >
          {/* Mobile Sidebar Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <span className="font-bold text-xl text-slate-900">Menu</span>
            <button
              onClick={() => setMenu(false)}
              className="p-2 -mr-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Links */}
          <div className="flex-1 overflow-y-auto p-6">
            <nav className="flex flex-col space-y-6">
              {navItems.map((item) => (
                <div key={item.title}>
                  {item.isDropdown ? (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between pb-2 border-b border-gray-100 text-slate-900 font-bold text-lg">
                        {item.title}
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      </div>
                      <div className="pl-4 space-y-3 border-l-2 border-blue-100 ml-1">
                        {item.children.map((c) => (
                          <Link
                            key={c.title}
                            to={c.path}
                            onClick={() => setMenu(false)}
                            className="block text-gray-600 hover:text-blue-600 font-medium py-1 transition-colors"
                          >
                            {c.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    item.title !== "Contact Us" && (
                      <NavLink
                        to={item.path}
                        onClick={() => setMenu(false)}
                        className={({ isActive }) =>
                          `block text-lg font-bold py-2 border-b border-transparent transition-colors ${isActive ? "text-blue-600" : "text-slate-700 hover:text-blue-600"}`
                        }
                      >
                        {item.title}
                      </NavLink>
                    )
                  )}
                </div>
              ))}
              
              {/* Mobile CTA */}
              <div className="pt-6">
                <Link
                  to="/contact"
                  onClick={() => setMenu(false)}
                  className="flex items-center justify-center w-full px-6 py-4 text-white bg-blue-600 hover:bg-blue-700 rounded-xl font-bold text-lg shadow-lg shadow-blue-600/30 active:scale-95 transition-all"
                >
                  Contact Us
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;