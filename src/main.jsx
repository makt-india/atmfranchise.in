import React from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";

import App from "./App.jsx";
import "./index.css";

/* ================================
   ERROR BOUNDARY
================================ */

class RootErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("React render error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: "40px", textAlign: "center" }}>
          <h1>Something went wrong.</h1>
          <p>Please refresh the page.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

/* ================================
   ROOT INITIALIZATION
================================ */

const container = document.getElementById("root");

if (!container) {
  throw new Error("Root container not found");
}

/* ================================
   PERFORMANCE OPTIMIZED RENDER
================================ */

function startApp() {
  const root = createRoot(container);

  root.render(
    <RootErrorBoundary>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </RootErrorBoundary>
  );
}

/*
 Delay render slightly so browser
 can paint HTML first (helps LCP)
*/

if ("requestIdleCallback" in window) {
  requestIdleCallback(startApp);
} else {
  setTimeout(startApp, 1);
}