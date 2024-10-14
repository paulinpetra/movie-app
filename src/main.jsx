import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationMenu from "./components/NavigationMenu";
import FavoritesList from "./components/FavoritesList.jsx";

import App from "./App.jsx";
import "./index.css";

import TagManager from "react-gtm-module";
import ReactGA from "react-ga4";
import { HelmetProvider } from "react-helmet-async"; // For managing meta tags

// Get GTM and GA IDs from environment variables
const gtmId = import.meta.env.VITE_GTM_ID;
const gaId = import.meta.env.VITE_GA_ID;

// Initialize Google Tag Manager if the GTM ID is available
if (gtmId) {
  const tagManagerArgs = { gtmId };
  TagManager.initialize(tagManagerArgs);
} else {
  console.warn(
    "Google Tag Manager ID (VITE_GTM_ID) is not set in environment variables."
  );
}

// Initialize Google Analytics if the GA ID is available
if (gaId) {
  ReactGA.initialize(gaId);
} else {
  console.warn(
    "Google Analytics ID (VITE_GA_ID) is not set in environment variables."
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <HelmetProvider>
        {/* HelmetProvider added for meta tags */}
        <BrowserRouter>
          <NavigationMenu />
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/favorites" element={<FavoritesList />} />
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </Provider>
  </StrictMode>
);
